import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading, SectionLabel } from '@/components/section-heading'

const channels = [
  { icon: Mail, label: 'Email', value: 'ekanabila224@gmail.com', href: 'mailto:ekanabila224@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+6285725767292', href: 'wa.me/6285725767292' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'nabilla-eka', href: 'https://www.linkedin.com/in/nabilla-eka' },
  { icon: GithubIcon, label: 'GitHub', value: 'greeyash', href: 'https://github.com/greeyash' },
]

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <div className="h-px w-full bg-border" aria-hidden="true" />

      <div className="pt-14">
        <SectionHeading>Let&apos;s Connect</SectionHeading>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          I&apos;m open to internship opportunities, collaborations, and interesting projects.
          Feel free to reach out!
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-gold"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft">
                <Icon className="size-5 text-gold-foreground" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate font-medium text-foreground">{value}</span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-border" aria-hidden="true" />
      <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
        <span className="font-heading text-xl font-extrabold tracking-tight text-primary">
          n.<span className="text-gold"></span>
        </span>
        <p className="text-sm text-muted-foreground">
          © 2026 Nabilla Eka Putri Sunarto · Information Systems &amp; Technology, ITB
        </p>
      </div>
    </footer>
  )
}
