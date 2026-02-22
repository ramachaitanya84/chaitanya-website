import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
] as const;

export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link
          href="/"
          className="text-lg font-medium text-neutral-900 transition-colors hover:text-blue-600"
        >
          Home
        </Link>
        <ul className="flex flex-wrap gap-6 sm:gap-8">
          {navLinks.slice(1).map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-neutral-600 transition-colors hover:text-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
