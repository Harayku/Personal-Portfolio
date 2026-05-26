import { Link } from "react-router-dom"
import { Heart, ArrowUp } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons"
import { about } from "../data/about"

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950" role="contentinfo">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-extrabold text-lg">
              {/* REPLACE: Your name */}
              <span className="gradient-text">Jet Angelo Pagaduan</span>
            </div>
            {/* REPLACE: Your tagline */}
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              IT Student · Network Enthusiast · Game Developer. Building things that connect people and ideas.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-600 dark:text-slate-400 text-sm hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-widest">Get In Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {/* REPLACE: your email */}
              <a href={`mailto:${about.email}`} className="hover:text-sky-400 transition-colors duration-200">
                {about.email}
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
              >
                <LinkedinIcon size={18} />
              </a>
              {about.twitter && (
                <a
                  href={about.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <TwitterIcon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={14} className="text-sky-500" aria-hidden="true" /> by{" "}
            {/* REPLACE: Your name */}
            <span className="text-slate-600 dark:text-slate-400">Jet Angelo Pagaduan</span> · {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
