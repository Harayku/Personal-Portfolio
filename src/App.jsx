import { useState, useEffect, lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Lazy-load pages for code splitting
const Home     = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact  = lazy(() => import("./pages/Contact"))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4 text-slate-500">
        <div className="w-10 h-10 rounded-full border-2 border-sky-500/30 border-t-sky-500 animate-spin" aria-hidden="true" />
        <p className="text-sm">Loading…</p>
      </div>
    </div>
  )
}

export default function App() {
  // Dark mode state — persisted in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved !== null) return saved === "true"
    return false // Default to light mode first
  })

  const toggleDark = (val) => {
    setDarkMode(val)
    localStorage.setItem("darkMode", String(val))
  }

  // Apply dark class to <html> element for full-page theming
  // Apply dark class to <html> element for full-page theming
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      {/* Skip-to-content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-sky-500 focus:text-slate-900 dark:text-white focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar darkMode={darkMode} setDarkMode={toggleDark} />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"         element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <main className="min-h-screen flex items-center justify-center text-center px-4 pt-16" id="main-content">
                <div>
                  <p className="text-8xl font-extrabold text-sky-400 mb-4">404</p>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Page Not Found</h1>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary">Go Home</a>
                </div>
              </main>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}
