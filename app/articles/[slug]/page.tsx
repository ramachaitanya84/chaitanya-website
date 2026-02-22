import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getArticleBySlug, getSlugs } from "@/lib/content";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/articles"
        className="mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-blue-600"
      >
        ← Back to Articles
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          {article.title}
        </h1>
        <p className="mt-2 text-neutral-500">
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="prose">
        <MDXRemote source={article.content} />
      </div>
    </article>
  );
}
