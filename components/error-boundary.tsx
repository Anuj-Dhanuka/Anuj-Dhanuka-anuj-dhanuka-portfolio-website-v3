"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">Something went wrong</h2>
            <p className="text-red-600 dark:text-red-300">
              There was an error loading this section. Please try refreshing the page.
            </p>
          </div>
        )
      )
    }

    return this.props.children
  }
}
