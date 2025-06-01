import { cn } from "@/lib/utils"
import type React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function TypographyH1({ children, className, as: Component = "h1" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH2({ children, className, as: Component = "h2" }: TypographyProps) {
  return (
    <Component className={cn("scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight", className)}>
      {children}
    </Component>
  )
}

export function TypographyH3({ children, className, as: Component = "h3" }: TypographyProps) {
  return (
    <Component className={cn("scroll-m-20 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight", className)}>
      {children}
    </Component>
  )
}

export function TypographyH4({ children, className, as: Component = "h4" }: TypographyProps) {
  return (
    <Component className={cn("scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight", className)}>
      {children}
    </Component>
  )
}

export function TypographyP({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component className={cn("leading-7 text-sm sm:text-base md:text-lg [&:not(:first-child)]:mt-6", className)}>
      {children}
    </Component>
  )
}

export function TypographyLead({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component className={cn("text-base sm:text-xl md:text-2xl text-muted-foreground", className)}>
      {children}
    </Component>
  )
}

export function TypographyLarge({ children, className, as: Component = "div" }: TypographyProps) {
  return <Component className={cn("text-base sm:text-lg md:text-xl font-semibold", className)}>{children}</Component>
}

export function TypographySmall({ children, className, as: Component = "small" }: TypographyProps) {
  return <Component className={cn("text-xs sm:text-sm font-medium leading-none", className)}>{children}</Component>
}

export function TypographyMuted({ children, className, as: Component = "p" }: TypographyProps) {
  return <Component className={cn("text-xs sm:text-sm text-muted-foreground", className)}>{children}</Component>
}
