import type React from "react"

export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()

  // Extract the target ID from the href
  const targetId = href.replace(/.*#/, "")
  const element = document.getElementById(targetId)

  if (element) {
    // Get the navbar height for offset calculation
    const navbar = document.querySelector("header") as HTMLElement
    const navbarHeight = navbar ? navbar.offsetHeight : 80

    // Increased offset for better visibility
    const scrollOffset = element.offsetTop - navbarHeight - 40 // Increased from 20px to 40px

    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    })

    // Update URL without reloading the page
    window.history.pushState({}, "", href)

    // Announce to screen readers (accessibility)
    const announcer = document.getElementById("scroll-announcer")
    if (announcer) {
      announcer.textContent = `Navigated to ${targetId} section`
    }

    // Add a small delay and then focus on the section for better accessibility
    setTimeout(() => {
      element.setAttribute("tabindex", "-1")
      element.focus({ preventScroll: true })
    }, 1000)
  }
}

// Function to determine if an element is in viewport
export const isElementInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
