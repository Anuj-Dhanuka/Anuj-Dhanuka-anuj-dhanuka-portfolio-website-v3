"use client"

import type React from "react"

import { ErrorBoundary } from "./error-boundary"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
}

export function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <ErrorBoundary>
      <div id={id}>{children}</div>
    </ErrorBoundary>
  )
}
