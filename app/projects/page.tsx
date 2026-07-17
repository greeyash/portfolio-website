import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen scroll-mt-24">
        <Projects />
      </main>
    </>
  )
}