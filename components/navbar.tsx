'use client'

import { Menu, X, FolderKanban } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#top', id: 'top' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Experiences', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    if (!isHome) return

    const onScroll = () => {
      setScrolled(window.scrollY > 16)

      const offset = window.scrollY + 120
      let current = 'top'
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el && el.offsetTop <= offset) {
          current = link.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    if (!isHome) setScrolled(true)
  }, [isHome])

  const isProjectsPage = pathname === '/projects'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto max-w-5xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-[#d4e2f4] shadow-lg shadow-[#173b64]/5'
            : 'border-transparent'
        }`}
        style={{
          backgroundColor: 'rgba(246, 250, 255, 0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-5">
          <a
            href={isHome ? '#top' : '/#top'}
            onClick={() => setOpen(false)}
            className="shrink-0 font-heading text-lg font-extrabold tracking-tight text-primary"
            aria-label="Back to top"
          >
            n<span className="text-gold-foreground">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-3 md:flex">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={isHome ? link.href : `/${link.href}`}
                    className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      isHome && active === link.id
                        ? 'bg-accent/50 text-primary'
                        : 'text-muted-foreground hover:bg-accent/40 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-5 w-px bg-[#d4e2f4]" aria-hidden="true" />

            {/* Projects — separated, styled as a distinct route link */}
            <Link
              href="/projects"
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
                isProjectsPage
                  ? 'border-primary/30 bg-primary text-primary-foreground'
                  : 'border-[#d4e2f4] text-primary hover:bg-accent/40'
              }`}
            >
              <FolderKanban className="size-3.5" aria-hidden="true" />
              Projects
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-9 items-center justify-center rounded-lg border border-[#d4e2f4] text-primary transition-colors hover:bg-accent/40 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0 px-3 pb-3">
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isHome && active === link.id
                        ? 'bg-accent/50 text-primary'
                        : 'text-muted-foreground hover:bg-accent/40 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="my-2 h-px bg-[#d4e2f4]" aria-hidden="true" />

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                isProjectsPage
                  ? 'bg-primary text-primary-foreground'
                  : 'text-primary hover:bg-accent/40'
              }`}
            >
              <FolderKanban className="size-4" aria-hidden="true" />
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}