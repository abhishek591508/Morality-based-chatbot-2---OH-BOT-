import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const chunksPath = join(__dirname, '../knowledge/moralChunks.json');
const CHUNKS = JSON.parse(readFileSync(chunksPath, 'utf-8'));

const tokenize = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2);

/**
 * Get traits with largest absolute change from moralImpact.
 */
export const getTopChangedTraits = (moralImpact = {}, limit = 4) =>
  Object.entries(moralImpact)
    .filter(([, delta]) => typeof delta === 'number' && delta !== 0)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, limit)
    .map(([trait, delta]) => ({ trait, delta }));

/**
 * Trait-weighted lexical retrieval over curated moral chunks.
 */
export const retrieveChunks = ({
  storyId,
  choiceText = '',
  sceneTheme = '',
  moralImpact = {},
  topK = 3
} = {}) => {
  const topTraits = getTopChangedTraits(moralImpact, 4);
  const traitSet = new Set(topTraits.map((t) => t.trait));
  const queryTokens = new Set([
    ...tokenize(choiceText),
    ...tokenize(sceneTheme),
    ...topTraits.map((t) => t.trait.toLowerCase())
  ]);

  const scored = CHUNKS.map((chunk) => {
    let score = 0;

    // Prefer chunks tagged for this story (or both)
    if (!chunk.storyIds?.length || chunk.storyIds.includes(storyId)) {
      score += 2;
    } else {
      score -= 5;
    }

    // Trait overlap (weighted by |delta|)
    for (const { trait, delta } of topTraits) {
      if (chunk.traits?.includes(trait)) {
        score += 3 + Math.min(3, Math.abs(delta) / 10);
      }
    }

    // Keyword overlap with choice / theme
    const chunkTokens = tokenize(`${chunk.text} ${chunk.source}`);
    let overlap = 0;
    for (const token of chunkTokens) {
      if (queryTokens.has(token)) overlap += 1;
    }
    score += Math.min(6, overlap);

    // Bonus if chunk traits intersect any changed trait
    const traitHits = (chunk.traits || []).filter((t) => traitSet.has(t)).length;
    score += traitHits;

    return { chunk, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ chunk, score }) => ({
      id: chunk.id,
      text: chunk.text,
      source: chunk.source,
      traits: chunk.traits,
      score
    }));
};

export const getChunkCount = () => CHUNKS.length;
