import { lazy, Suspense, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import Sidebar from "./components/Sidebar"

const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f11]" aria-busy="true" aria-label="Loading page">
      <div className="w-8 h-8 rounded-full border-2 border-[#3b82f6]/30 border-t-[#3b82f6] animate-spin" />
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0f0f11] text-[#b4b4b4] font-sans overflow-x-hidden">
        <TopBar
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        />
        <div className="flex flex-1 pt-14 max-w-[1200px] mx-auto w-full px-3 sm:px-6 lg:px-8 relative">
          {/* Desktop Sidebar */}
          <div className="hidden md:block shrink-0">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Drawer & Backdrop */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 top-14 bg-black/70 backdrop-blur-xs z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          <div
            className={`fixed top-14 left-0 bottom-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
          </div>

          <main className="flex-1 overflow-y-auto px-2 sm:px-6 py-6 sm:py-10 md:px-12 flex justify-start w-full min-w-0">
            <div className="w-full min-w-0">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
