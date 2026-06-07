import { BookOpen, GraduationCap, User, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import userImage from '@./public/user.jpeg'

const courses = [
  'Algorithm Strategy',
  'Object Oriented Programming',
  'Database Modelling',
  'Database Management',
  'Foundations of Software Engineering',
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'Node.js'],
  },
  {
    title: 'Databases & Tools',
    items: ['Supabase', 'SQLite', 'MySQL', 'PostgreSQL', 'Git', 'GitHub'],
  },
  {
    title: 'QA & Project Management',
    items: [
      'Manual Testing',
      'Functional Testing',
      'Integration Testing',
      'Bug Tracking',
      'SDLC',
      'Jira',
      'Notion',
      'Agile',
    ],
  },
]

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  )
}

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <SectionHeading>Background &amp; Skills</SectionHeading>

      {/* About */}
      <div className="mt-10 flex items-center gap-2">
        <User className="size-4 text-primary" aria-hidden="true" />
        <h3 className="font-heading text-lg font-bold text-primary">About Me</h3>
      </div>
      <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
       <div className="flex flex-col gap-6 sm:flex-row items-center">
  
            <div className="flex size-40 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-md overflow-hidden">
              <img 
                src="/user.jpeg"
                alt="Nabilla Eka Putri Sunarto" 
                className="w-full h-full object-cover" 
                aria-hidden="true" 
              />
            </div>

            <div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Nabilla Eka Putri Sunarto
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">
              Information Systems &amp; Technology · Bandung Institute of Technology
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A tech enthusiast and problem-solver with a strong passion for transforming complex challenges into clean, user-centric digital products. Bridging the gap between technical development and agile project management, I have hands-on experience in software development, hackathons, and stakeholder engagement. Driven by curiosity, I focus on leveraging modern web frameworks and product strategy to build meaningful, scalable solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12 flex items-center gap-2">
        <GraduationCap className="size-4 text-primary" aria-hidden="true" />
        <h3 className="font-heading text-lg font-bold text-primary">
          Education</h3>
      </div>
      <div className="mt-4 grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft">
              <GraduationCap className="size-6 text-gold-foreground" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Bandung Institute of Technology
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-foreground">
                August 2024 – Present
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Bachelor of Science in Information System and Technology
          </p>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="size-4 text-muted-foreground" aria-hidden="true" />
            <GroupLabel>Related Courses</GroupLabel>
          </div>
          <ul className="space-y-2.5">
            {courses.map((course) => (
              <li key={course} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12 flex items-center gap-2">
        <Wrench className="size-5 text-primary" aria-hidden="true" />
        <h3 className="font-heading text-lg font-bold text-primary">
          Core Competencies &amp; Skills
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <GroupLabel>{group.title}</GroupLabel>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {group.items.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
