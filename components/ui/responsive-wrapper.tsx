import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveWrapperProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none"
  padding?: boolean
  centered?: boolean
}

export function ResponsiveWrapper({
  children,
  className,
  as: Component = "div",
  maxWidth = "2xl",
  padding = true,
  centered = true,
}: ResponsiveWrapperProps) {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-7xl",
    full: "max-w-full",
    none: "",
  }

  return (
    <Component
      className={cn(
        "w-full",
        maxWidthClasses[maxWidth],
        padding && "px-4 sm:px-6 md:px-8",
        centered && "mx-auto",
        className,
      )}
    >
      {children}
    </Component>
  )
}
