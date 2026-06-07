import { SectionHeading, SectionLabel } from '@/components/section-heading'

const experiences = [
  {
    role: 'Project Manager',
    org: 'Inkubator IT',
    period: 'October 2025 – February 2026',
    points: [
      'Managed 3 end-to-end software development projects for startup and enterprise clients, including Paragon and PLUGNDD.',
      'Prepared User Stories, PRDs, and Project Charters.',
      'Tracked project progress via Gantt Charts — achieving 95% on-schedule delivery.',
    ],
    tags: ['Project Management', 'PRD', 'Agile', 'Gantt Charts', 'Jira'],
  },
  {
    role: 'Practicum Assistant',
    org: 'Comlabs USDI ITB',
    period: 'September 2025 – December 2025',
    points: [
      'Supported 60+ students in learning Python programming, debugging, and algorithmic problem-solving.',
      'Reviewed and graded 200+ Python submissions.',
    ],
    tags: ['Python', 'Teaching', 'Algorithms', 'Code Review'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <SectionHeading>Experiences</SectionHeading>

      <div className="mt-10 space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.role}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="mt-0.5 text-sm font-semibold text-primary">{exp.org}</p>
              </div>
              <span className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-primary">
                {exp.period}
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-foreground" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
