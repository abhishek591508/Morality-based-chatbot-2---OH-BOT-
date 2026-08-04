const API_URL = 'http://localhost:5000/api/rag';
const RAG_TIMEOUT_MS = 12000;

/**
 * Fetch RAG + Llama choice feedback. Returns null on hard failure
 * so the UI can fall back to choice.preview locally.
 */
export const fetchChoiceFeedback = async (payload) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RAG_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_URL}/choice-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const result = await response.json();
    if (result.success) {
      return result.data;
    }

    console.error('RAG feedback failed:', result.message);
    return null;
  } catch (error) {
    console.error('RAG feedback error:', error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
