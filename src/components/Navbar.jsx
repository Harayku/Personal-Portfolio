import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons"
import { about } from "../data/about"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add glass background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative px-1 py-0.5 text-sm font-medium transition-colors duration-200 
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-400
     after:rounded-full after:transition-all after:duration-300
     hover:after:w-full hover:text-sky-400
     ${isActive ? "text-sky-400 after:w-full" : "text-slate-700 dark:text-slate-300"}`

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-xl shadow-black/20" : "bg-transparent"}`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between"
      >

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Social icons */}
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
          >
            <LinkedinIcon size={18} />
          </a>
          {about.twitter && (
            <a
              href={about.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
            >
              <TwitterIcon size={18} />
            </a>
          )}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
          >
            {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-4 pb-4 pt-2 flex flex-col gap-1 list-none m-0">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                   ${isActive ? "bg-sky-500/10 text-sky-400" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:text-white"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile social + dark mode */}
          <li className="flex items-center gap-2 px-4 pt-2 border-t border-slate-200 dark:border-white/5 mt-2">
            <a href={about.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">
              <GithubIcon size={18} />
            </a>
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">
              <LinkedinIcon size={18} />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="ml-auto p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
