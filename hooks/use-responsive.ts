"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export function useResponsive() {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const breakpoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1400,
  }

  const isXs = isMounted && windowWidth >= breakpoints.xs
  const isSm = isMounted && windowWidth >= breakpoints.sm
  const isMd = isMounted && windowWidth >= breakpoints.md
  const isLg = isMounted && windowWidth >= breakpoints.lg
  const isXl = isMounted && windowWidth >= breakpoints.xl
  const is2xl = isMounted && windowWidth >= breakpoints["2xl"]

  const isMobile = isMounted && windowWidth < breakpoints.md
  const isTablet = isMounted && windowWidth >= breakpoints.md && windowWidth < breakpoints.lg
  const isDesktop = isMounted && windowWidth >= breakpoints.lg

  const activeBreakpoint: Breakpoint = is2xl ? "2xl" : isXl ? "xl" : isLg ? "lg" : isMd ? "md" : isSm ? "sm" : "xs"

  return {
    windowWidth,
    breakpoints,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    isMobile,
    isTablet,
    isDesktop,
    activeBreakpoint,
  }
}
