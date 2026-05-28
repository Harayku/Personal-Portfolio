import { ExternalLink, Award, ShieldCheck } from "lucide-react"
import { GithubIcon } from "./SocialIcons"

const getDemoLabel = (url) => {
  if (!url) return "Live Demo"
  const lowerUrl = url.toLowerCase()
  if (lowerUrl.endsWith(".pdf")) return "View PDF"
  if (
    lowerUrl.endsWith(".png") ||
    lowerUrl.endsWith(".jpg") ||
    lowerUrl.endsWith(".jpeg") ||
    lowerUrl.endsWith(".gif")
  ) {
    return "View Image"
  }
  if (
    lowerUrl.includes("youtube.com") ||
    lowerUrl.includes("youtu.be") ||
    lowerUrl.includes("drive.google.com") ||
    lowerUrl.endsWith(".mp4") ||
    lowerUrl.endsWith(".webm") ||
    lowerUrl.endsWith(".mov")
  ) {
    return "Watch Video"
  }
  return "Live Demo"
}

/**
 * ProjectCard — Reusable card for both projects and certificates.
 * Props:
 *   item     — project or certificate object from data files
 *   onClick  — optional click handler (used for certificate modal)
 */
export default function ProjectCard({ item, onClick }) {
  const isCert = item.category === "Awards and Honor" || item.category === "Certificate"

  if (isCert) {
    return (
      <article
        onClick={() => onClick(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(item)}
        aria-label={`View details for ${item.title}`}
        className="glass glow-border rounded-3xl p-6 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 text-left min-h-[220px] h-full justify-between cursor-pointer"
      >
        {/* Ribbon decoration in background */}
        <div className="absolute right-0 top-0 text-slate-800/10 dark:text-white/5 pointer-events-none transform translate-x-2 -translate-y-2 scale-[1.6]">
          <Award size={100} strokeWidth={1} />
        </div>

        {/* Top Header Row */}
        <div className="flex items-center justify-between z-10">
          {/* Badge Icon / Logo */}
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} className="text-emerald-400" />
          </div>
          {/* Year */}
          {(item.yearRange || item.date) && (
            <span className="text-[13px] font-bold text-sky-400 font-mono">
              [{item.yearRange || new Date(item.date).getFullYear()}]
            </span>
          )}
        </div>

        {/* Title & Issuer */}
        <div className="space-y-1 z-10 mt-3 flex-grow">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            {item.title}
          </h3>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {item.issuer}
          </p>
        </div>

        {/* Rank / Status */}
        {item.rank && (
          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 uppercase tracking-wider mt-4 z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            {item.rank}
          </div>
        )}

        {/* View Verification Button */}
        <div className="mt-4 pt-1 z-10">
          {(item.pdfUrl || item.verifyUrl) ? (
            <a
              href={item.pdfUrl || item.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-xs font-black uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors"
            >
              VIEW VERIFICATION &gt;
            </a>
          ) : (
            <span className="text-xs font-black uppercase tracking-wider text-purple-400">
              VIEW VERIFICATION &gt;
            </span>
          )}
        </div>
      </article>
    )
  }

  return (
    <article
      onClick={onClick ? () => onClick(item) : undefined}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && onClick(item) : undefined}
      aria-label={onClick ? `View details for ${item.title}` : item.title}
      className={`
        glass glow-border rounded-2xl overflow-hidden flex flex-col h-full
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10
        ${onClick ? "cursor-pointer" : ""}
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
        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">{item.title}</h3>

        {/* Certificate-specific: issuer + date */}
        {isCert && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
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

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">{item.description}</p>

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
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/5">
            {onClick && (
              <span className="text-xs text-sky-400 font-medium hidden sm:inline-block">
                Click to view details →
              </span>
            )}
            <div className="flex items-center gap-3 ml-auto">
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
                {getDemoLabel(item.demoUrl)}
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${item.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors duration-200"
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
            </div>
          </div>
        )}

        {isCert && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/5">
            <span className="text-xs text-sky-400 font-medium">
              Click to view details →
            </span>
            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View PDF of ${item.title}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                <ExternalLink size={12} aria-hidden="true" />
                View PDF
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
