## Morality Based Chatbot

**Developed during internship at IIT Mandi, currently being used for data collection purpose.**

### Post-choice projection + RAG

After each choice, players see:

1. **Score changes** — which moral traits went up/down (deterministic from `moralImpact`)
2. **Ending lean** — soft rule-based trajectory label (not a final result)
3. **AI insight** — Groq Llama + trait-tagged retrieval explains the choice and offers a labeled speculative forecast

Setup: add `GROQ_API_KEY` (and optional `GROQ_MODEL`) to `backend/.env`. See [backend/README.md](backend/README.md). Without a key, the UI still works using fallback text.

<img width="700" height="400" alt="image" src="https://github.com/user-attachments/assets/0f91dc25-6fff-4fd5-afe4-6ea3e498a37d" />

---

<img width="400" height="350" alt="image" src="https://github.com/user-attachments/assets/b394f5fb-25f2-42fa-9833-517b298c62e9" />

---

<img width="1693" height="906" alt="image" src="https://github.com/user-attachments/assets/87a944a1-c511-4eca-a887-5038d4336741" />

---


<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/3cc40f71-067f-4073-aae9-e8f9c445d21f" />

---


<img width="600" height="440" alt="image" src="https://github.com/user-attachments/assets/b2f44b71-21e8-4679-b8cf-0e331048c3b0" />

---


<img width="800" height="330" alt="image" src="https://github.com/user-attachments/assets/67860efa-13d6-4dfa-bb32-ebb690bdcbc8" />
