import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md bg-white p-8 rounded-2xl border border-stone-200 shadow-xl space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-[#11181C]">
              Notice
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              We encountered an issue rendering this section. Please reload the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors shadow"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
