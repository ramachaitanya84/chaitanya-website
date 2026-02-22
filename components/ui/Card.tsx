import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  meta?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, href, meta, children }: CardProps) {
  const content = (
    <div className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm">
      {meta && (
        <p className="mb-2 text-sm text-neutral-500">{meta}</p>
      )}
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      {description && (
        <p className="mt-2 flex-1 text-neutral-600">{description}</p>
      )}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
