---
title: "RAG & Semantic Search"
date: 2026-04-20
---

# 🧠 RAG & Semantic Search — Personal Notes

---

## 1. Semantic Search

Semantic search focuses on the **meaning** of content, unlike **lexical search** which does literal string/pattern matching.

- Meaning is captured as **vectors** (numerical representations of content)
- To find relevant content, we calculate the **distance between vectors** and return the nearest ones

### Nearest Neighbour Algorithms

| Algorithm                                     | Description                                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **KNN** (K-Nearest Neighbours)                | Basic approach — compares a vector against all others                                                                   |
| **NSW** (Navigable Small World)               | Approximate nearest neighbour — maintains 2 closest connections per node, navigates the graph from a random start point |
| **HNSW** (Hierarchical Navigable Small World) | Layered version of NSW — searches across multiple layers, narrowing down to the nearest vector at each level            |

> HNSW is the standard used in most production vector databases.

---

## 2. RAG Workflow

```
DATA → Chunks → Vector Embeddings → Vector Store → Relevant Docs → LLM → USER
```

### Tweeks

- **Recommender by topic** → Regular topic search
- **Recommender by content** → Remove duplicate titles so new content retrieved is more relavent instead of repeated results

---

## 3. Embeddings

> **An embedding is a vector that carries meaning.**

### Sparse Embeddings

- **BM25** — A ranking function that retrieves text by estimating the relative importance of terms against the search query
  - Calculated based on: number of documents in the corpus + word frequency across relevant documents

### Dense Embeddings

- **CLIP** (Contrastive Language–Image Pre-Training) — Maps images to text/captions
  - Trained on image-text pairs to describe images semantically

### Hybrid Search

Combining **sparse + dense** embeddings gives the best retrieval results. This is called **hybrid search**.

---

## 4. Vector Databases

Uses **HNSW** under the hood — returns all relevant elements within a given distance threshold.

### Choosing a Vector Database — Key Considerations

| Factor                   | Questions to Ask                       |
| ------------------------ | -------------------------------------- |
| **Search Functionality** | What types of search do you need?      |
| **Budget**               | Open-source vs. commercial?            |
| **Privacy**              | Does data need to be self-hosted?      |
| **Popularity**           | Better community = better support      |
| **SDK Support**          | Does it support your language/stack?   |
| **Performance**          | Does it meet your latency/scale needs? |

---

## 5. Chunking Strategy

### Chunk Length

- **200–300 tokens** works well as a general baseline
- **Up to 600 tokens** for complex/legal/policy documents
- Always **test different lengths** with your specific data to optimise recall

### Chunk Overlap

- Overlapping chunks improve search relevance by preserving context at boundaries

---

## 6. Metadata

Attach extra metadata to chunks for two reasons:

1. **Enrich LLM generation** — e.g. citations, page numbers
2. **Enable custom filtering** during retrieval

### Common Metadata Fields

- Source document name
- Page numbers
- Section & section path
- Section chunk index + total chunks
- Reference IDs, article/rule/error/product codes
- LLM-generated summary of chunk contents

---

## 7. Reranking

Searches often return irrelevant chunks — reranking **sorts results by relevance** and filters noise, especially useful with keyword search.

### Reranking Pipeline (Example: Top k = 5)

```
Hybrid Search  →  Top k × 2  =  10 chunks
Add adjacent chunks           =  18 chunks
Reranker filters to Top k     =  5 chunks  ✅
```

> **Rule of thumb:** Retrieve **2–3× more** than your Top k, then rerank down to Top k.

### Cross Encoders

- Specialised ML models trained specifically for **relevance scoring**
- Much faster than LLMs at processing text
- Higher-quality models typically require **GPUs** for production use
- Good open-source option: **`BAAI/bge-reranker-base`** — solid performance, fast enough for CPUs, hostable via a Python FastAPI + HuggingFace setup

---

## Quick Reference Cheatsheet

```
Semantic Search   →  meaning-based, uses vector distance
Lexical Search    →  pattern/string matching (BM25)
Embeddings        →  vectors with meaning
Sparse            →  BM25 (term frequency)
Dense             →  CLIP, neural models
Hybrid            →  sparse + dense combined
HNSW              →  layered graph for fast ANN search
Chunking          →  200–300 tokens default, overlap helps
Reranking         →  retrieve 2–3× Top k, filter down
Cross Encoder     →  fast ML model for relevance scoring
```
