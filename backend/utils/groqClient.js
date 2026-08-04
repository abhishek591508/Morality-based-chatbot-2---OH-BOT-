const GROQ_BASE_URL = 'https://api.groq.com/openai/v1';

/**
 * Call Groq OpenAI-compatible chat completions with a Llama model.
 */
export const createChatCompletion = async ({
  messages,
  temperature = 0.4,
  maxTokens = 350
} = {}) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    const err = new Error('GROQ_API_KEY is not configured');
    err.code = 'MISSING_API_KEY';
    throw err;
  }

  const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

  const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
      response_format: { type: 'json_object' }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    const err = new Error(`Groq API error (${response.status}): ${errorText}`);
    err.code = 'GROQ_API_ERROR';
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Empty response from Groq');
  }

  return {
    content,
    model: data.model || model,
    usage: data.usage
  };
};
