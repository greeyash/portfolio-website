import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Resume } from '@/components/resume'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen scroll-mt-24">
        <Hero />
        <Resume />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
