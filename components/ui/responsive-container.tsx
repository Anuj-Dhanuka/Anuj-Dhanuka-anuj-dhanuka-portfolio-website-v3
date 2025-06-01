import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  fluid?: boolean
  noPadding?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  fluid = false,
  noPadding = false,
}: ResponsiveContainerProps) {
  return (
    <Component className={cn(fluid ? "w-full" : "container", noPadding ? "px-0" : "", className)}>{children}</Component>
  )
}
