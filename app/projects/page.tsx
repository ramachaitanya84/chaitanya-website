import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Projects",
  description: "AI and software projects I've built.",
};

const projects = [
  {
    title: "RAG Chat Assistant",
    description:
      "A retrieval-augmented generation system that answers questions from custom knowledge bases. Built with LangChain and vector embeddings.",
    meta: "AI • RAG • LangChain",
  },
  {
    title: "AI Code Review Bot",
    description:
      "Automated code review using LLMs to suggest improvements, catch bugs, and enforce style guidelines. Integrates with GitHub.",
    meta: "AI • DevOps • GitHub",
  },
  {
    title: "Personal Knowledge Graph",
    description:
      "Semantic search over notes and documents. Extracts entities, builds relationships, and enables natural language queries.",
    meta: "NLP • Graph • Search",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-12 text-3xl font-semibold tracking-tight text-neutral-900">
        Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            meta={project.meta}
          />
        ))}
      </div>
    </div>
  );
}
