"use client"

import { useEffect } from "react"

export function ViewportFix() {
  useEffect(() => {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    // We listen to the resize event
    window.addEventListener("resize", setVh)

    // We call the function once to set the initial value
    setVh()

    return () => window.removeEventListener("resize", setVh)
  }, [])

  return null
}
