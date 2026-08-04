# Morality Story Chatbot — Backend

Express API for saving game runs, statistics, Excel export, and post-choice RAG feedback.

## Setup

```bash
npm install
```

Create a `.env` file in this folder:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile
```

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | Yes | MongoDB connection string |
| `GROQ_API_KEY` | For RAG | Groq Cloud API key ([console.groq.com](https://console.groq.com)) |
| `GROQ_MODEL` | No | Defaults to `llama-3.3-70b-versatile` |
| `PORT` | No | Defaults to `5000` |

If `GROQ_API_KEY` is missing, `POST /api/rag/choice-feedback` still returns **200** with rule-based fallback text so gameplay is never blocked.

## Run

```bash
npm run dev
# or
npm start
```

## Key routes

- `POST /api/games/save-game` — save a completed run
- `GET /api/games/export/excel` — download Excel report
- `POST /api/rag/choice-feedback` — trait-tagged retrieval + Llama explanation / forecast

### RAG request body (example)

```json
{
  "storyId": "story1",
  "storyTitle": "The Four Learned Scholars",
  "sceneId": "scene1",
  "choiceText": "Knowledge is powerful, but only when used with wisdom.",
  "choicePreview": "You emphasize wisdom over raw power.",
  "moralImpact": { "wisdom": 20, "arrogance": -15 },
  "updatedScores": { "wisdom": 70, "arrogance": 35 },
  "endingLean": "Leaning Prevention",
  "username": "player1"
}
```

## Design note (research)

Moral scores and ending lean are **deterministic** (computed on the client from `moralImpact` and score rules). The RAG endpoint only generates educational foreshadowing from curated chunks in `knowledge/moralChunks.json`. The model never chooses the next scene or mutates scores.
