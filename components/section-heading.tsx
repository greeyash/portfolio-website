export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-gold-foreground">
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      {children}
    </h2>
  )
}
