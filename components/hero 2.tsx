import { ArrowDown, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { HeroCanvas } from '@/components/hero-canvas'

const contacts = [
  { icon: Mail, label: 'ekanabila224@gmail.com', href: 'mailto:ekanabila224@gmail.com' },
  { icon: Phone, label: '+6285725767292', href: 'tel:+6285725767292' },
  { icon: LinkedinIcon, label: 'nabilla-eka', href: 'https://www.linkedin.com/in/nabilla-eka' },
  { icon: GithubIcon, label: 'greeyash', href: 'https://github.com/greeyash' },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28">
      {/* Animated ambient background + interactive canvas */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob-a absolute -left-24 top-[-10%] size-[28rem] rounded-full bg-[#a3c4eb] opacity-50 blur-3xl" />
        <div className="animate-blob-b absolute right-[-8%] top-1/4 size-[32rem] rounded-full bg-[#f6faff] opacity-70 blur-3xl" />
        <div className="animate-blob-c absolute bottom-[-15%] left-1/3 size-[26rem] rounded-full bg-[#a3c4eb] opacity-40 blur-3xl" />
        <HeroCanvas />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col">
        <span className="animate-fade-in-up mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold-soft px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-gold-foreground">
          <span className="size-1.5 rounded-full bg-gold-foreground" aria-hidden="true" />
          Available for Opportunities
        </span>

        <h1 className="animate-fade-in-up text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl [animation-delay:80ms]">
          Nabilla Eka Putri Sunarto
        </h1>

        <div className="animate-fade-in-up mt-7 flex items-center gap-3 [animation-delay:160ms]">
          <span className="h-px w-8 bg-foreground/30" aria-hidden="true" />
          <p className="font-medium text-muted-foreground">
            Information Systems &amp; Technology · ITB
          </p>
        </div>

        <p className="animate-fade-in-up mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground [animation-delay:240ms]">
          Student at <strong className="font-semibold text-foreground">Bandung Institute of Technology</strong>{' '}
          with experience in project management, software development, and stakeholder engagement.
          Passionate about product development and leveraging technology to solve real-world problems.
        </p>

        <ul className="animate-fade-in-up mt-8 flex flex-wrap gap-3 [animation-delay:320ms]">
          {contacts.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-3 py-2 font-mono text-sm text-foreground/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-gold hover:text-foreground hover:shadow-md"
              >
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="animate-fade-in-up mt-9 flex flex-wrap gap-3 [animation-delay:400ms]">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-gold font-semibold text-[#173b64] shadow-md shadow-gold/30 transition-all duration-200 hover:scale-105 hover:bg-gold hover:shadow-lg hover:shadow-gold/40"
            render={<a href="#projects">View Projects</a>}
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="border-primary/30 font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-primary hover:bg-accent/30"
            render={
              <a href="https://github.com/greeyash" target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
                GitHub Profile
              </a>
            }
          />
        </div>

        <a
          href="#resume"
          className="animate-fade-in-up mt-20 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground [animation-delay:520ms]"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Scroll to Explore
        </a>
      </div>
    </section>
  )
}
