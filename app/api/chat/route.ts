/**
 * Placeholder for future RAG-based chat API.
 * Will stream responses from a vector-augmented LLM that answers questions
 * about my experience, projects, and writing.
 */
export async function POST() {
  return Response.json(
    { message: "Chat API coming soon - RAG integration planned" },
    { status: 501 }
  );
}
