import { retrieveChunks, getTopChangedTraits } from '../utils/retriever.js';
import { createChatCompletion } from '../utils/groqClient.js';

const SYSTEM_PROMPT = `You are a moral-education assistant for an interactive story research app.
Use ONLY the retrieved knowledge context provided by the user.
Do not invent story events that are not implied by the player's choice.
Do not invent numeric scores that contradict the provided updatedScores or endingLean.
Output valid JSON with exactly these keys:
- choiceLine: 1-2 sentences explaining the moral meaning of this choice; briefly cite a source name from the context.
- endingForecast: 1-2 sentences of speculative trajectory. Label uncertainty (e.g. "might", "could"). Never claim certainty. Align loosely with endingLean.
Keep both fields concise and suitable for a player-facing UI.`;

const buildFallback = ({ choicePreview, endingLean, sources }) => ({
  choiceLine:
    choicePreview ||
    'This choice shifts your moral profile based on the values it emphasizes.',
  endingForecast: endingLean
    ? `Based on your current scores, you appear ${endingLean.toLowerCase()}. Later choices can still change this path.`
    : 'Your later choices will continue to shape how this story may end.',
  sources,
  retrievedIds: sources.map((s) => s.id),
  usedFallback: true
});

export const getChoiceFeedback = async (req, res) => {
  try {
    const {
      storyId,
      storyTitle,
      sceneId,
      choiceText,
      choicePreview,
      moralImpact = {},
      updatedScores = {},
      endingLean = '',
      username
    } = req.body || {};

    if (!storyId || !choiceText) {
      return res.status(400).json({
        success: false,
        message: 'storyId and choiceText are required'
      });
    }

    const retrieved = retrieveChunks({
      storyId,
      choiceText,
      sceneTheme: `${storyTitle || ''} ${sceneId || ''}`,
      moralImpact,
      topK: 3
    });

    const sources = retrieved.map(({ id, source, text }) => ({ id, source, text }));
    const topTraits = getTopChangedTraits(moralImpact, 4);

    // If no API key, return deterministic fallback immediately
    if (!process.env.GROQ_API_KEY) {
      console.warn('[RAG] GROQ_API_KEY missing — using fallback text');
      return res.status(200).json({
        success: true,
        data: buildFallback({ choicePreview, endingLean, sources })
      });
    }

    const contextBlock = retrieved
      .map(
        (c, i) =>
          `[${i + 1}] id=${c.id}\nsource=${c.source}\ntraits=${(c.traits || []).join(', ')}\ntext=${c.text}`
      )
      .join('\n\n');

    const userPrompt = JSON.stringify(
      {
        storyId,
        storyTitle,
        sceneId,
        choiceText,
        topChangedTraits: topTraits,
        updatedScores,
        endingLean,
        retrievedContext: contextBlock
      },
      null,
      2
    );

    try {
      const completion = await createChatCompletion({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ]
      });

      let parsed;
      try {
        parsed = JSON.parse(completion.content);
      } catch {
        console.warn('[RAG] Failed to parse model JSON — using fallback');
        return res.status(200).json({
          success: true,
          data: buildFallback({ choicePreview, endingLean, sources })
        });
      }

      const choiceLine =
        typeof parsed.choiceLine === 'string' && parsed.choiceLine.trim()
          ? parsed.choiceLine.trim()
          : buildFallback({ choicePreview, endingLean, sources }).choiceLine;

      const endingForecast =
        typeof parsed.endingForecast === 'string' && parsed.endingForecast.trim()
          ? parsed.endingForecast.trim()
          : buildFallback({ choicePreview, endingLean, sources }).endingForecast;

      console.log(
        `[RAG] feedback ok user=${username || 'anon'} story=${storyId} chunks=${retrieved.map((c) => c.id).join(',')}`
      );

      return res.status(200).json({
        success: true,
        data: {
          choiceLine,
          endingForecast,
          sources: sources.map(({ id, source }) => ({ id, source })),
          retrievedIds: retrieved.map((c) => c.id),
          usedFallback: false,
          model: completion.model
        }
      });
    } catch (llmError) {
      console.error('[RAG] Groq generation failed:', llmError.message);
      return res.status(200).json({
        success: true,
        data: buildFallback({ choicePreview, endingLean, sources })
      });
    }
  } catch (error) {
    console.error('[RAG] Unexpected error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error generating choice feedback',
      error: error.message
    });
  }
};
