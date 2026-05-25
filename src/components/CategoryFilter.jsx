/**
 * CategoryFilter — Pill-style category filter buttons + search bar
 * Props:
 *   categories   — string[]
 *   active       — currently selected category string
 *   onChange     — (category: string) => void
 *   search       — current search string
 *   onSearch     — (query: string) => void
 */
import { Search, X } from "lucide-react"

export default function CategoryFilter({ categories, active, onChange, search, onSearch }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Search bar */}
      <div className="relative max-w-sm w-full mx-auto md:mx-0">
        <label htmlFor="project-search" className="sr-only">Search projects</label>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" aria-hidden="true">
          <Search size={16} />
        </span>
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search projects…"
          className="input-field pl-9 pr-9 text-sm"
          aria-label="Search projects by name or technology"
        />
        {search && (
          <button
            onClick={() => onSearch("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
          >
            <X size={15} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              aria-pressed={isActive}
              className={`
                px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
                ${
                  isActive
                    ? "bg-sky-500 border-transparent text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-400 bg-transparent"
                }
              `}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
