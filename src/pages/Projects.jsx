import { useState, useMemo } from "react"
import { Layers } from "lucide-react"
import { projects, categories } from "../data/projects"
import { certificates } from "../data/certificates"
import CategoryFilter from "../components/CategoryFilter"
import ProjectGrid from "../components/ProjectGrid"
import Modal from "../components/Modal"

// Merge projects and certificates into one list
const allItems = [
  ...projects,
  ...certificates,
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search,         setSearch]         = useState("")
  const [selectedCert,   setSelectedCert]   = useState(null)

  const filtered = useMemo(() => {
    let list = allItems

    if (activeCategory !== "All") {
      list = list.filter((item) => item.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.tags || item.skills || []).some((t) => t.toLowerCase().includes(q))
      )
    }

    return list
  }, [activeCategory, search])

  return (
    <main id="main-content" className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <Layers size={16} aria-hidden="true" />
            Portfolio
          </div>
          <h1 className="section-title">Projects & Certificates</h1>
          <p className="section-sub">
            Browse my work across programming, networking, cybersecurity, and multimedia.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
            search={search}
            onSearch={setSearch}
          />
        </div>

        {/* Result count */}
        <p className="text-sm text-slate-500 mb-6" aria-live="polite">
          Showing <span className="text-slate-300 font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "item" : "items"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        <ProjectGrid
          items={filtered}
          onCertClick={(cert) => setSelectedCert(cert)}
        />
      </div>

      {/* Certificate modal */}
      <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </main>
  )
}
