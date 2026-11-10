import { Mail, FileText } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./SocialIcons"
import { about } from "../data/about"

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f11] border-b border-[#2a2b2f] z-50">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-[15px] tracking-wide">Harayku</span>
        </div>

        {/* Right side links */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-[13px] font-medium text-[#9a9a9a]">
            <a href={about.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a href={about.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FileText size={14} />
              <span>Resume</span>
            </a>
            <a href={`mailto:${about.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
