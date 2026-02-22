import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

/**
 * Get all article slugs from the content directory.
 * Used for generateStaticParams and validation.
 */
export function getSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Get all articles with metadata, sorted by date (newest first).
 */
export async function getArticles(): Promise<ArticleMeta[]> {
  const slugs = getSlugs();
  const articles: ArticleMeta[] = [];

  for (const slug of slugs) {
    const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    articles.push({
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      slug: data.slug ?? slug,
    });
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single article by slug, including raw MDX content.
 * Rendered with MDXRemote from next-mdx-remote/rsc.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const slugs = getSlugs();
  const normalizedSlug = slug.toLowerCase();
  const matchedSlug = slugs.find((s) => s.toLowerCase() === normalizedSlug);

  if (!matchedSlug) return null;

  const filePath = path.join(ARTICLES_DIR, `${matchedSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title ?? matchedSlug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    slug: data.slug ?? matchedSlug,
    content,
  };
}
