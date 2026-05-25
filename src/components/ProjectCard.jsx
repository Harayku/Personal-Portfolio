import { ExternalLink, Award } from "lucide-react"
import { GithubIcon } from "./SocialIcons"

/**
 * ProjectCard — Reusable card for both projects and certificates.
 * Props:
 *   item     — project or certificate object from data files
 *   onClick  — optional click handler (used for certificate modal)
 */
export default function ProjectCard({ item, onClick }) {
  const isCert = item.category === "Cyber Certificates"

  return (
    <article
      onClick={isCert ? () => onClick(item) : undefined}
      role={isCert ? "button" : "article"}
      tabIndex={isCert ? 0 : undefined}
      onKeyDown={isCert ? (e) => (e.key === "Enter" || e.key === " ") && onClick(item) : undefined}
      aria-label={isCert ? `View details for ${item.title}` : item.title}
      className={`
        glass glow-border rounded-2xl overflow-hidden flex flex-col
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10
        ${isCert ? "cursor-pointer" : ""}
      `}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={`Screenshot of ${item.title}`}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            onError={(e) => {
              // Fallback gradient if image fails to load
              e.currentTarget.style.display = "none"
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Award size={48} className="text-slate-600" />
          </div>
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-sky-400 border border-sky-500/30">
          {item.category}
        </span>

        {/* Featured star */}
        {item.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
            ★ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-white line-clamp-2 leading-snug">{item.title}</h3>

        {/* Certificate-specific: issuer + date */}
        {isCert && (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Award size={14} className="text-sky-400 shrink-0" aria-hidden="true" />
            <span>{item.issuer}</span>
            {item.date && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </time>
              </>
            )}
          </div>
        )}

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {(item.tags || item.skills || []).slice(0, 5).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        {!isCert && (
          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            {item.demoUrl && item.demoUrl !== "#" && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${item.title}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                <ExternalLink size={13} aria-hidden="true" />
                Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${item.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
          </div>
        )}

        {isCert && (
          <p className="text-xs text-sky-400 font-medium pt-2 border-t border-white/5">
            Click to view certificate details →
          </p>
        )}
      </div>
    </article>
  )
}
