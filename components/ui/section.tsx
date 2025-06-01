import { cn } from "@/lib/utils"
import type React from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
  fullWidth?: boolean
}

export function Section({ children, className, id, as: Component = "section", fullWidth = false }: SectionProps) {
  return (
    <Component id={id} className={cn("py-12 sm:py-16 md:py-20 lg:py-24", fullWidth ? "" : "container", className)}>
      {children}
    </Component>
  )
}

export function SectionHeader({
  children,
  className,
  centered = true,
}: {
  children: React.ReactNode
  className?: string
  centered?: boolean
}) {
  return <div className={cn("mb-8 sm:mb-12 md:mb-16", centered && "text-center", className)}>{children}</div>
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold mb-4", className)}>{children}</h2>
}

export function SectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", className)}>
      {children}
    </p>
  )
}

export function SectionDivider({ className }: { className?: string }) {
  return <div className={cn("h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6", className)}></div>
}
