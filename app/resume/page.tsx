import { ResumeSection } from "@/components/resume/ResumeSection";

export const metadata = {
  title: "Resume",
  description: "Professional experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 print:py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 print:hidden"
        >
          Download PDF
        </a>
      </div>

      <ResumeSection title="Summary">
        <p>
          Software engineer with experience building AI-native applications and
          full-stack systems. Passionate about clean architecture, developer
          experience, and the intersection of AI with product development.
        </p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-neutral-900">
              Senior Software Engineer
            </h3>
            <p className="text-sm text-neutral-500">Company Name • 2022 – Present</p>
            <p className="mt-1">
              Built scalable systems, led technical initiatives, and mentored
              junior developers. Shipped AI-powered features used by millions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">
              Software Engineer
            </h3>
            <p className="text-sm text-neutral-500">Previous Company • 2019 – 2022</p>
            <p className="mt-1">
              Developed web applications, improved performance, and
              collaborated across teams.
            </p>
          </div>
        </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <ul className="list-inside list-disc space-y-1">
          <li>TypeScript, React, Next.js</li>
          <li>Python, Node.js</li>
          <li>AI/ML: LangChain, OpenAI API, RAG systems</li>
          <li>Databases: PostgreSQL, Redis</li>
          <li>Cloud: Vercel, AWS</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Education">
        <div>
          <h3 className="font-semibold text-neutral-900">
            B.S. Computer Science
          </h3>
          <p className="text-sm text-neutral-500">University Name • 2019</p>
        </div>
      </ResumeSection>
    </div>
  );
}
