import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons"
import { about } from "../data/about"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [certsOpen, setCertsOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  
  // Close mobile menu when navigating
  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    `flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors
     ${isActive ? "bg-slate-800 text-sky-400" : "text-slate-300 hover:bg-slate-800/50 hover:text-white"}`

  const subNavLinkClass = "block px-4 py-1.5 text-sm text-slate-400 hover:text-sky-400 transition-colors"

  const projectsCategories = ["Experience", "Programming", "Cybersecurity & Networking", "Multimedia", "Quality Assurance", "Write Ups"]
  
  const certCategories = [
    { name: "HACK SMARTER LABS", items: ["2026", "2025"] },
    { name: "WEBVERSE PRO", items: ["2026", "NoshRun", "Aster Check", "Poppet"] },
    { name: "HACKTHEBOX", items: ["2025", "2024", "2023"] }
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-950 border-r border-slate-800 text-slate-300 w-64">
      {/* Header / Brand */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
        <span className="text-xl font-bold text-white tracking-tight">{about.name.split(' ')[0]}<span className="text-sky-400">.</span></span>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2 custom-scrollbar">
        <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
          About
        </NavLink>

        {/* Projects Accordion */}
        <div>
          <button 
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <span>Projects</span>
            {projectsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {projectsOpen && (
            <div className="mt-1 ml-4 border-l border-slate-800 pl-2 space-y-1">
              {projectsCategories.map(cat => (
                <NavLink key={cat} to={`/projects?category=${encodeURIComponent(cat)}`} className={subNavLinkClass} onClick={closeMenu}>
                  {cat}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Certificates Accordion */}
        <div>
          <button 
            onClick={() => setCertsOpen(!certsOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors"
          >
            <span className="text-left">Certificates & Awards</span>
            {certsOpen ? <ChevronDown size={16} className="shrink-0" /> : <ChevronRight size={16} className="shrink-0" />}
          </button>
          
          {certsOpen && (
            <div className="mt-2 ml-4 border-l border-slate-800 pl-2 space-y-4">
              {certCategories.map(group => (
                <div key={group.name} className="space-y-1">
                  <div className="px-4 py-1 text-xs font-bold text-slate-500 tracking-wider uppercase">
                    {group.name}
                  </div>
                  {group.items.map(item => (
                    <NavLink key={item} to={`/projects?cert=${encodeURIComponent(item)}`} className={subNavLinkClass} onClick={closeMenu}>
                      {item}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Socials Footer */}
      <div className="p-4 border-t border-slate-800 shrink-0">
        <div className="flex items-center justify-center gap-4">
          <a href={about.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
          {about.twitter && (
            <a href={about.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <TwitterIcon size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-40 flex items-center justify-between px-4">
        <span className="text-lg font-bold text-white tracking-tight">{about.name.split(' ')[0]}<span className="text-sky-400">.</span></span>
        <button onClick={toggleMenu} className="p-2 text-slate-300 hover:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 bottom-0 w-64 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {sidebarContent}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 bottom-0 w-64 z-40">
        {sidebarContent}
      </div>
    </>
  )
}
