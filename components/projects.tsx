import { ArrowUpRight, ImageIcon, Trophy } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading, SectionLabel } from '@/components/section-heading'

const projects = [
  {
    title: 'ReWear',
    subtitle: 'Sustainable Fashion Marketplace',
    date: 'October 2025',
    headerClass: '/rewear.png',
    description:
      'Developed a web-based marketplace for second-hand clothing. Implemented an AI-powered clothing grading feature that assesses item quality automatically.',
    award: 'Top 8 Finalist — Technoday Hackathon 2025',
    tags: ['Next.js', 'Supabase', 'AI/ML'],
    repo: 'https://github.com/greeyash/rewear-app',
  },
  {
    title: 'Setor.in',
    subtitle: 'Waste Bank Management System',
    date: 'May 2026',
    headerClass: '/setorin.png',
    description:
      'Collaborated in a 6-member team to develop a desktop-based waste bank management system. Implemented transaction management and integrated SQLite database.',
    award: null,
    tags: ['Java', 'SQLite'],
    repo: 'https://github.com/greeyash/setor.in',
  },
  {
    title: 'Forkception in the Kitchen',
    subtitle: 'Pixel Cooking Game',
    date: 'December 2025',
    headerClass: '/nimons.png',
    description:
      'A pixel art cooking game inspired by Overcooked. Players control two chefs collaborating to prepare pizza dishes, manage kitchen stations, and complete orders within time limits.',
    award: null,
    tags: ['Java'],
    repo: 'https://github.com/ZulfaNurhuda/IF2010-ForkceptionInTheKitchen-2025-K02-C',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">

      <SectionHeading>Featured Work</SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accent hover:shadow-xl hover:shadow-accent/30 hover:ring-1 hover:ring-primary/20"
          >
           <div 
              className="relative flex h-56 items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${project.headerClass})` }} 
            >
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-card/60 px-2.5 py-1 text-xs text-foreground/70 backdrop-blur-sm">
             preview
            </span>
          </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary">{project.subtitle}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="rounded-md border border-gold/50 bg-gold-soft px-2.5 py-1 text-xs text-gold-foreground">
                    {project.date}
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                    className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.award && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-gold/40 bg-gold-soft px-3 py-2.5">
                  <Trophy className="size-4 shrink-0 text-gold-foreground" aria-hidden="true" />
                  <span className="text-sm font-medium text-gold-foreground">{project.award}</span>
                </div>
              )}

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-gold-foreground"
                >
                  View Repo
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
