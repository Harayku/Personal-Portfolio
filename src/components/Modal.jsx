import { useEffect, useRef } from "react"
import { X, Award, Calendar, Hash, FileText, CheckCircle, ExternalLink } from "lucide-react"
import { GithubIcon } from "./SocialIcons"

/**
 * Modal — Item detail modal
 * Props:
 *   item    — project or certificate object or null (null = closed)
 *   onClose — () => void
 */
export default function Modal({ item, onClose }) {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)

  // Lock body scroll & trap focus
  useEffect(() => {
    if (!item) return
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => { document.body.style.overflow = "" }
  }, [item])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  if (!item) return null

  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null

  const isCertCategory = item.category === "Awards and Honor" || item.category === "Certificate"

  const formattedExpiry = item.expiryDate
    ? new Date(item.expiryDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : isCertCategory ? "No Expiry" : null

  const displayTags = item.skills || item.tags || []

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div className="relative glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-sky-900/30 animate-[fadeInUp_0.25s_ease]">

        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-all duration-200"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-200 dark:border-white/5">
          <div className="flex items-start gap-4">
            {item.badgeUrl || item.image ? (
              <img
                src={item.badgeUrl || item.image}
                alt={`${item.title} logo`}
                className="w-20 h-20 object-cover rounded-xl bg-white/5 p-2 shrink-0"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
            ) : (
              <div className="w-20 h-20 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Award size={36} className="text-sky-400" />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-1">
                {item.category || "Details"}
              </p>
              <h2
                id="modal-title"
                className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight pr-8"
              >
                {item.title}
              </h2>
              {item.issuer && <p className="text-slate-600 dark:text-slate-400 mt-1 font-medium">{item.issuer}</p>}
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p id="modal-desc" className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
            {item.longDescription || item.description}
          </p>

          {/* Meta info */}
          {(formattedDate || formattedExpiry || item.yearRange || item.credentialId) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formattedDate && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-slate-200 dark:border-white/5">
                <Calendar size={18} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Issued</p>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">{formattedDate}</p>
                </div>
              </div>
            )}
            {!item.yearRange && formattedExpiry ? (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-slate-200 dark:border-white/5">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Expires</p>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">{formattedExpiry}</p>
                </div>
              </div>
            ) : item.yearRange ? (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-slate-200 dark:border-white/5">
                <Calendar size={18} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Academic Period</p>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">{item.yearRange}</p>
                </div>
              </div>
            ) : null}
            {item.credentialId && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-slate-200 dark:border-white/5 sm:col-span-2">
                <Hash size={18} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Credential ID</p>
                  <p className="text-slate-800 dark:text-slate-200 font-mono text-sm">{item.credentialId}</p>
                </div>
              </div>
            )}
          </div>
          )}

          {/* Skills */}
          {displayTags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-3">
                {isCertCategory ? "Skills Covered" : "Technologies"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {displayTags.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200 dark:border-white/5">
            {item.verifyUrl && (
              <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <CheckCircle size={15} aria-hidden="true" /> Verify Credential
              </a>
            )}
            {item.pdfUrl && (
              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <FileText size={15} aria-hidden="true" /> Download PDF
              </a>
            )}
            {item.demoUrl && item.demoUrl !== "#" && (
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <ExternalLink size={15} aria-hidden="true" /> View Demo
              </a>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <GithubIcon size={15} aria-hidden="true" /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
