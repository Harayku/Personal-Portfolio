import ProjectCard from "./ProjectCard"

/**
 * ProjectGrid — Responsive grid of ProjectCard components
 * Props:
 *   items     — filtered array of project/cert objects
 *   onCertClick — (cert) => void — opens modal for certificates
 *   loading   — boolean (optional, for skeleton state)
 */
export default function ProjectGrid({ items, onCertClick, loading }) {
  // Loading skeletons
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading projects">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="glass rounded-2xl overflow-hidden animate-pulse"
            aria-hidden="true"
          >
            <div className="h-48 bg-slate-800" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-slate-700 rounded-lg w-3/4" />
              <div className="h-4 bg-slate-800 rounded-lg w-full" />
              <div className="h-4 bg-slate-800 rounded-lg w-2/3" />
              <div className="flex gap-2 pt-2">
                <div className="h-6 bg-slate-700 rounded-full w-16" />
                <div className="h-6 bg-slate-700 rounded-full w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Empty state
  if (items.length === 0) {
    return (
      <div className="text-center py-24 text-slate-500" role="status" aria-live="polite">
        <p className="text-5xl mb-4" aria-hidden="true">🔍</p>
        <p className="text-xl font-semibold text-slate-400 mb-2">No results found</p>
        <p className="text-sm">Try a different category or search term.</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Project and certificate list"
    >
      {items.map((item) => (
        <div key={item.id} role="listitem">
          <ProjectCard
            item={item}
            onClick={item.category === "Cyber Certificates" ? onCertClick : undefined}
          />
        </div>
      ))}
    </div>
  )
}
