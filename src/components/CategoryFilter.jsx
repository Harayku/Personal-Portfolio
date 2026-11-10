/**
 * CategoryFilter — Pill-style category filter buttons
 * Props:
 *   categories   — string[]
 *   active       — currently selected category string
 *   onChange     — (category: string) => void
 */
export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-col gap-4">
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
                    ? "bg-sky-500 border-transparent text-slate-900 dark:text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "border-slate-700 text-slate-600 dark:text-slate-400 hover:border-sky-500 hover:text-sky-400 bg-transparent"
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
