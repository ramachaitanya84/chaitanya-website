interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 border-b border-neutral-200 pb-2 text-lg font-semibold text-neutral-900">
        {title}
      </h2>
      <div className="text-neutral-700">{children}</div>
    </section>
  );
}
