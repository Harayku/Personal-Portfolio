import { useEffect, useRef } from "react"
import { X, ExternalLink, Award, Calendar, Hash, FileText, CheckCircle } from "lucide-react"

/**
 * Modal — Certificate detail modal
 * Props:
 *   cert    — certificate object or null (null = closed)
 *   onClose — () => void
 */
export default function Modal({ cert, onClose }) {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)

  // Lock body scroll & trap focus
  useEffect(() => {
    if (!cert) return
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => { document.body.style.overflow = "" }
  }, [cert])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  if (!cert) return null

  const formattedDate = cert.date
    ? new Date(cert.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null

  const formattedExpiry = cert.expiryDate
    ? new Date(cert.expiryDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "No Expiry"

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
          aria-label="Close certificate details"
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-all duration-200"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-white/5">
          <div className="flex items-start gap-4">
            {cert.badgeUrl ? (
              <img
                src={cert.badgeUrl}
                alt={`${cert.title} badge`}
                className="w-20 h-20 object-contain rounded-xl bg-white/5 p-2 shrink-0"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
            ) : (
              <div className="w-20 h-20 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Award size={36} className="text-sky-400" />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-1">
                Cyber Certificate
              </p>
              <h2
                id="modal-title"
                className="text-2xl font-extrabold text-white leading-tight"
              >
                {cert.title}
              </h2>
              <p className="text-slate-400 mt-1 font-medium">{cert.issuer}</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p id="modal-desc" className="text-slate-300 leading-relaxed">
            {cert.longDescription || cert.description}
          </p>

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formattedDate && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Calendar size={18} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Issued</p>
                  <p className="text-slate-200 font-semibold">{formattedDate}</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Expires</p>
                <p className="text-slate-200 font-semibold">{formattedExpiry}</p>
              </div>
            </div>
            {cert.credentialId && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 sm:col-span-2">
                <Hash size={18} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Credential ID</p>
                  <p className="text-slate-200 font-mono text-sm">{cert.credentialId}</p>
                </div>
              </div>
            )}
          </div>

          {/* Skills */}
          {cert.skills && cert.skills.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
                Skills Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${cert.title} credential`}
                className="btn-primary text-sm"
              >
                <CheckCircle size={15} aria-hidden="true" />
                Verify Credential
              </a>
            )}
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${cert.title} certificate PDF`}
                className="btn-secondary text-sm"
              >
                <FileText size={15} aria-hidden="true" />
                Download PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
