import { useState } from "react"
import { IdCard, FileText, Menu, X } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./SocialIcons"
import { about } from "../data/about"
import DigitalCallingCardModal from "./DigitalCallingCardModal"

export default function TopBar({ mobileMenuOpen, onToggleMobileMenu }) {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f11]/95 backdrop-blur-md border-b border-[#2a2b2f] z-50">
        <div className="max-w-[1200px] mx-auto w-full px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-2">
          {/* Left: Mobile Menu Button + Logo */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleMobileMenu}
              className="md:hidden p-1.5 rounded-lg text-[#9a9a9a] hover:text-white hover:bg-[#1a1b1f] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <span className="text-white font-bold text-[15px] tracking-wide">
              Harayku
            </span>
          </div>

          {/* Right side links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="flex items-center gap-3 sm:gap-5 text-[12px] sm:text-[13px] font-medium text-[#9a9a9a]">
              <a
                href={about.github}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={about.resumeUrl || "/resume.pdf"}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FileText size={14} />
                <span>Resume</span>
              </a>
              <button
                type="button"
                onClick={() => setIsCardOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#16171a] hover:bg-[#1f2126] text-white border border-[#2a2b2f] hover:border-blue-500/40 transition-all cursor-pointer shadow-sm text-xs sm:text-[13px]"
              >
                <IdCard size={14} className="text-blue-400 shrink-0" />
                <span>Digital Calling Card</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <DigitalCallingCardModal
        isOpen={isCardOpen}
        onClose={() => setIsCardOpen(false)}
      />
    </>
  )
}
