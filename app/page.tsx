import { SearchBar } from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
          Hi, I&apos;m here.
        </h1>
        <SearchBar />
        <p className="max-w-md text-neutral-500">
          Ask about my work. Explore my writing and projects.
        </p>
      </div>
    </div>
  );
}
