import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  cols?: {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    "2xl"?: number
  }
  gap?:
    | {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
        "2xl"?: number
      }
    | number
}

export function ResponsiveGrid({
  children,
  className,
  as: Component = "div",
  cols = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 4,
  },
  gap = {
    xs: 4,
    sm: 6,
    md: 6,
    lg: 8,
    xl: 8,
    "2xl": 8,
  },
}: ResponsiveGridProps) {
  // Convert gap object to tailwind classes
  const gapClasses =
    typeof gap === "number"
      ? `gap-${gap}`
      : [
          gap.xs && `gap-${gap.xs}`,
          gap.sm && `sm:gap-${gap.sm}`,
          gap.md && `md:gap-${gap.md}`,
          gap.lg && `lg:gap-${gap.lg}`,
          gap.xl && `xl:gap-${gap.xl}`,
          gap["2xl"] && `2xl:gap-${gap["2xl"]}`,
        ]
          .filter(Boolean)
          .join(" ")

  // Convert cols object to tailwind classes
  const colClasses = [
    cols.xs && `grid-cols-${cols.xs}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    cols["2xl"] && `2xl:grid-cols-${cols["2xl"]}`,
  ]
    .filter(Boolean)
    .join(" ")

  return <Component className={cn("grid", colClasses, gapClasses, className)}>{children}</Component>
}
