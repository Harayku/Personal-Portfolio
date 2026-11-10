import { useState, useEffect, useRef, useCallback } from "react"
import {
  X,
  RotateCw,
  Mail,
  Phone,
  ExternalLink,
  Sparkles,
  MapPin,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./SocialIcons"
import { about } from "../data/about"

export default function DigitalCallingCardModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const cardRef = useRef(null)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      setIsFlipped(false)
      setTilt({ x: 0, y: 0 })
      setGlare((prev) => ({ ...prev, opacity: 0 }))
      onClose()
    }, 220)
  }, [onClose])

  // Handle entrance animation and Escape key
  useEffect(() => {
    if (!isOpen) return

    const raf = requestAnimationFrame(() => setIsVisible(true))
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleClose])

  // Pointer-based 3D parallax tilt effect (mouse & touch)
  const updateTilt = (clientX, clientY) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const posX = Math.min(Math.max(clientX - rect.left, 0), width)
    const posY = Math.min(Math.max(clientY - rect.top, 0), height)

    // Normalize between -0.5 and 0.5
    const normX = posX / width - 0.5
    const normY = posY / height - 0.5

    // Max tilt of ~8 degrees
    const rotateY = normX * 16
    const rotateX = -normY * 16

    setTilt({ x: rotateX, y: rotateY })
    setGlare({
      x: (posX / width) * 100,
      y: (posY / height) * 100,
      opacity: 0.22,
    })
  }

  const handleMouseMove = (e) => {
    updateTilt(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      updateTilt(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlare((prev) => ({ ...prev, opacity: 0 }))
  }

  if (!isOpen) return null

  const phoneDisplay = about.phone || "+63 961 016 8416"

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto transition-all duration-250 ease-out ${
        isVisible
          ? "bg-black/80 backdrop-blur-md opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Digital Calling Card"
    >
      {/* Modal Wrapper with Scale + Fade Entrance */}
      <div
        className={`relative w-full max-w-[94vw] sm:max-w-[520px] md:max-w-[560px] my-auto flex flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls */}
        <div className="w-full flex items-center justify-between mb-2.5 sm:mb-3 px-1 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#a1a1a1] truncate">
            <Sparkles size={13} className="text-[#3b82f6] shrink-0" />
            <span className="truncate">Digital Calling Card • Tap to flip</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg bg-[#18191d] border border-[#2a2b2f] text-[#a1a1a1] hover:text-white hover:border-[#3b82f6] transition-colors cursor-pointer shrink-0"
            aria-label="Close Digital Calling Card"
          >
            <X size={16} />
          </button>
        </div>

        {/* 3D Perspective Stage */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseLeave}
          onClick={() => setIsFlipped((prev) => !prev)}
          className="w-full perspective-1000 cursor-pointer select-none"
        >
          {/* Parallax Tilt Wrapper */}
          <div
            className="w-full preserve-3d transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* 180-deg Flip Inner Container (Responsive CR80 Aspect Ratio ~1.586:1) */}
            <div
              className="relative w-full sm:aspect-[1.586/1] min-h-[250px] sm:min-h-[320px] preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ================= FRONT FACE (IDENTITY & CONTACT DETAILS) ================= */}
              <div className="relative sm:absolute inset-0 w-full h-full backface-hidden rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-[#11141d] cr80-guilloche shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between p-4 sm:p-6 md:p-7">
                {/* Specular Cursor Glare Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200"
                  style={{
                    opacity: glare.opacity,
                    background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35), transparent 70%)`,
                  }}
                />

                {/* Top Header: Name & Title */}
                <div className="relative z-10 flex items-start justify-between gap-3 border-b border-white/10 pb-2.5 sm:pb-3.5">
                  <div className="min-w-0">
                    <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.18em] sm:tracking-[0.2em] text-[#60a5fa] uppercase mb-0.5 sm:mb-1">
                      DIGITAL CALLING CARD
                    </div>
                    <h2 className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white uppercase leading-tight break-words">
                      {about.name}
                    </h2>
                    <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#38bdf8] mt-0.5 leading-snug">
                      Network Security &amp; Cybersecurity Practitioner
                    </p>
                  </div>
                </div>

                {/* Middle Body: Contact Details */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 my-auto py-3 text-xs">
                  <a
                    href={`mailto:${about.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 sm:gap-2.5 text-[#cbd5e1] hover:text-[#38bdf8] transition-colors min-w-0"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#1a1f2e] border border-white/10 flex items-center justify-center shrink-0">
                      <Mail size={12} className="text-[#3b82f6] sm:w-[13px] sm:h-[13px]" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs truncate">
                      {about.email}
                    </span>
                  </a>

                  <div className="flex items-center gap-2 sm:gap-2.5 text-[#cbd5e1] min-w-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#1a1f2e] border border-white/10 flex items-center justify-center shrink-0">
                      <Phone size={12} className="text-[#3b82f6] sm:w-[13px] sm:h-[13px]" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs truncate">
                      {phoneDisplay}
                    </span>
                  </div>

                  <a
                    href={about.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 sm:gap-2.5 text-[#cbd5e1] hover:text-[#38bdf8] transition-colors min-w-0"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#1a1f2e] border border-white/10 flex items-center justify-center shrink-0">
                      <GithubIcon size={12} />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs truncate">
                      {about.github.replace("https://", "")}
                    </span>
                    <ExternalLink size={10} className="opacity-60 shrink-0" />
                  </a>

                  <a
                    href={about.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 sm:gap-2.5 text-[#cbd5e1] hover:text-[#38bdf8] transition-colors min-w-0"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#1a1f2e] border border-white/10 flex items-center justify-center shrink-0">
                      <LinkedinIcon size={12} />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs truncate">
                      {about.linkedin.replace("https://www.", "")}
                    </span>
                    <ExternalLink size={10} className="opacity-60 shrink-0" />
                  </a>
                </div>

                {/* Bottom Footer Bar: Location */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2.5 sm:pt-3 gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94a3b8] min-w-0">
                    <MapPin size={12} className="text-[#3b82f6] shrink-0 sm:w-[13px] sm:h-[13px]" />
                    <span className="font-mono truncate">
                      {about.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= BACK FACE (D4TUS LOGO) ================= */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-[#0e1118] cr80-guilloche shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-4 sm:p-8">
                {/* Specular Cursor Glare Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200"
                  style={{
                    opacity: glare.opacity,
                    background: `radial-gradient(circle 260px at ${100 - glare.x}% ${glare.y}%, rgba(255,255,255,0.3), transparent 70%)`,
                  }}
                />

                {/* Centered Responsive Logo on Card Back */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <img
                    src="/images/D4TUS.png"
                    alt="D4TUS Logo"
                    className="w-[82%] sm:w-[78%] max-w-[380px] max-h-[75%] object-contain brightness-0 invert drop-shadow-[0_8px_24px_rgba(59,130,246,0.25)] select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dedicated Action Bar */}
        <div className="mt-3 sm:mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsFlipped((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#18191d] hover:bg-[#22242a] border border-[#2a2b2f] hover:border-[#3b82f6] text-xs font-semibold text-white transition-all cursor-pointer shadow-lg"
          >
            <RotateCw
              size={14}
              className={`text-[#3b82f6] transition-transform duration-500 ${
                isFlipped ? "rotate-180" : ""
              }`}
            />
            <span>{isFlipped ? "Show Front Face" : "Flip Card (180°)"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
