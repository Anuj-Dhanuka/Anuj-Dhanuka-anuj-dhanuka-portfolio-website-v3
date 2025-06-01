"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { ViewportFix } from "@/components/viewport-fix"

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ViewportFix />
      {isLoading ? <LoadingAnimation /> : children}
    </>
  )
}
