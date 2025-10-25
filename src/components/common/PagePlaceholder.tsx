"use client"

interface PagePlaceholderProps {
  title: string
  description?: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      {description && (
        <p className="mt-4 max-w-md text-muted-foreground">{description}</p>
      )}
      <p className="mt-6 text-sm text-muted-foreground">
        (This page is under construction)
      </p>
    </main>
  )
}
