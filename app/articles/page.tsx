import Link from "next/link";
import { getArticles } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Articles",
  description: "Writing and thoughts on technology, AI, and more.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-12 text-3xl font-semibold tracking-tight text-neutral-900">
        Articles
      </h1>

      {articles.length === 0 ? (
        <p className="text-neutral-500">No articles yet. Check back soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Card
              key={article.slug}
              title={article.title}
              description={article.excerpt}
              href={`/articles/${article.slug}`}
              meta={new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
