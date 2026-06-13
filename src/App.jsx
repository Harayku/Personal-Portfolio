import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import Sidebar from "./components/Sidebar"

const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f11]" aria-busy="true" aria-label="Loading page">
      <div className="w-8 h-8 rounded-full border-2 border-[#3b82f6]/30 border-t-[#3b82f6] animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0f0f11] text-[#b4b4b4] font-sans">
        <TopBar />
        <div className="flex flex-1 pt-14 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="hidden md:block shrink-0">
            <Sidebar />
          </div>
          
          <main className="flex-1 overflow-y-auto px-6 py-10 md:px-12 flex justify-start w-full min-w-0">
            <div className="w-full">
                 <Suspense fallback={<PageLoader />}>
                   <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/projects" element={<Projects />} />
                     <Route path="/contact" element={<Contact />} />
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
