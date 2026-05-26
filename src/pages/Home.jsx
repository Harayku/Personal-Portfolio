import { Link } from "react-router-dom"
import { ArrowRight, Download, Sparkles, Terminal, Shield, Layers, Database, ToolCase } from "lucide-react"
import { about } from "../data/about"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

// Stat counters shown in the hero section
const stats = [
  { label: "Projects Completed", value: projects.length },
  { label: "Technologies", value: "15+" },
  { label: "Certifications", value: "3+" },
]

// Feature highlights
const highlights = [
  { icon: Terminal, title: "Software Engineering", desc: "C#, Laravel, Unity, ASP.NET, React," },
  { icon: Shield, title: "Cybersecurity & Net", desc: "Kali Linux, Wireshark, Cisco, Routing" },
  { icon: Database, title: "Cloud & Databases", desc: "AWS, Docker, MySQL, MongoDB" },
  { icon: Layers, title: "Multimedia & Design", desc: "Photoshop, Figma, Canva" },
  { icon: ToolCase, title: "Tools", desc: "Git/Github, VS Code, Antigravity, Trello, etc." },
]

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Hero section"
        className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16"
      >
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            {/* REPLACE: Update your availability status */}
            Open to opportunities
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-6">
            {/* REPLACE: Your name */}
            Hi, I'm{" "}
            <span className="gradient-text">{about.name.split(" ")[0]}</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">{about.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {/* REPLACE: Update in data/about.js */}
            {about.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/projects" className="btn-primary text-base px-8 py-4" aria-label="View my projects">
              View My Work <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
              aria-label="Download my resume PDF"
            >
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold gradient-text">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce text-slate-600" aria-hidden="true">
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 mx-auto flex items-start justify-center pt-2">
              <div className="w-1 h-3 rounded-full bg-slate-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─────────────────────────────────────────────────── */}
      <section id="highlights" aria-label="Skills highlights" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6 flex items-start gap-4 group hover:border-sky-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-300">
                <Icon size={24} className="text-sky-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ──────────────────────────────────────────── */}
      <section id="featured-projects" aria-label="Featured projects" className="py-24 bg-slate-50/30 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={16} aria-hidden="true" />
              Featured Work
            </div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-sub">
              A curated selection of my best work across programming, networking, and multimedia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map((project) => (
              <ProjectCard key={project.id} item={project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-secondary" aria-label="See all projects">
              See All Projects <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────────────────────── */}
      <section id="cta" aria-label="Call to action" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass animate-glow rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-sky-600/10 rounded-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
              Whether you have a project in mind, a networking challenge, or just want to connect — I'd love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4" aria-label="Go to contact page">
              Get In Touch <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
