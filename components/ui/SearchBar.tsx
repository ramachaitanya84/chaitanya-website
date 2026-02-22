"use client";

import { useState } from "react";

type Mode = "ask" | "explore";

export function SearchBar() {
  const [mode, setMode] = useState<Mode>("ask");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: no backend yet. Future: Ask mode -> /api/chat, Explore mode -> search/browse
    if (mode === "ask") {
      console.log("Ask (chat) placeholder:", query);
    } else {
      console.log("Explore placeholder:", query);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setMode("ask")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "ask"
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          Ask
        </button>
        <button
          type="button"
          onClick={() => setMode("explore")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "explore"
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          Explore
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              mode === "ask"
                ? "Ask me anything about my work..."
                : "Search articles and projects..."
            }
            className="flex-1 bg-transparent text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            aria-label={mode === "ask" ? "Ask a question" : "Explore content"}
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            {mode === "ask" ? "Ask" : "Search"}
          </button>
        </div>
      </form>

      <p className="mt-3 text-center text-sm text-neutral-500">
        {mode === "ask"
          ? "Chat interface coming soon. I'll answer questions about my experience and projects."
          : "Browse my articles and AI projects by topic or keyword."}
      </p>
    </div>
  );
}
