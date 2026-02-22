# AI-Native Personal Website

A minimal, production-ready personal site built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for future RAG-based chat integration.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX** (next-mdx-remote) for articles

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home - search bar
│   ├── articles/           # Articles list + dynamic [slug]
│   ├── resume/             # Resume page
│   ├── projects/           # Projects grid
│   └── api/chat/           # Placeholder for future RAG
├── components/
│   ├── ui/                 # SearchBar, Card
│   ├── layout/             # Header, Footer
│   └── resume/             # ResumeSection
├── lib/
│   └── content.ts          # Article loader (getArticles, getArticleBySlug)
├── content/
│   └── articles/           # MDX files
└── public/
    └── resume.pdf          # Placeholder PDF
```

## How to Add a New Article

1. Create `content/articles/your-slug.mdx`
2. Add frontmatter:

```yaml
---
title: "Your Title"
date: "2025-02-22"
excerpt: "Brief description"
slug: "your-slug"
---
```

3. Write content in Markdown (or MDX) below the frontmatter
4. Rebuild – article appears at `/articles/your-slug`

## How to Deploy to Vercel

1. Push to GitHub:

```bash
git init && git add . && git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: Next.js (auto-detected)
4. Deploy

## Future Enhancements

- **RAG chat**: Replace `/api/chat` with streaming response, vector DB, embeddings
- **Projects**: Move from placeholder to `content/projects.json` or MDX
- **Analytics**: Vercel Analytics or Plausible
