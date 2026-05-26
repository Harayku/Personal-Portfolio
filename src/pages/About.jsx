import { Link } from "react-router-dom"
import { Download, MapPin, Mail, GraduationCap, User } from "lucide-react"
import { about } from "../data/about"

export default function About() {
  return (
    <main id="main-content" className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <User size={16} aria-hidden="true" />
            About Me
          </div>
          <h1 className="section-title">Who I Am</h1>
        </div>

        {/* Top section: avatar + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Avatar column */}
          <div className="flex flex-col items-center gap-6">
            {/* REPLACE: Add your photo to /public/images/avatar.jpg */}
            <div className="relative w-52 h-52 rounded-3xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-sky-500 rounded-3xl" aria-hidden="true" />
              {about.avatar ? (
                <img
                  src={about.avatar}
                  alt={`Photo of ${about.name}`}
                  className="w-full h-full object-cover relative z-10 transition-all duration-300"
                  onMouseOver={(e) => (e.currentTarget.src = "/images/avatar2.png")}
                  onMouseOut={(e) => (e.currentTarget.src = about.avatar)}
                  onError={(e) => { e.currentTarget.style.display = "none" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-7xl relative z-10">
                  🧑‍💻
                </div>
              )}
            </div>

            {/* Quick info */}
            <div className="w-full glass rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-sky-400 shrink-0" aria-hidden="true" />
                <span className="text-slate-700 dark:text-slate-300">{about.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-sky-400 shrink-0" aria-hidden="true" />
                {/* REPLACE: your email in data/about.js */}
                <a href={`mailto:${about.email}`} className="text-slate-700 dark:text-slate-300 hover:text-sky-400 transition-colors truncate">
                  {about.email}
                </a>
              </div>
              {about.education.map((edu) => (
                <div key={edu.school} className="flex items-start gap-3 text-sm">
                  <GraduationCap size={16} className="text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.degree}</p>
                    <p className="text-slate-500">{edu.school} · {edu.years}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href={about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              aria-label="Download resume PDF"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{about.name}</h2>
              <p className="gradient-text font-semibold text-lg">{about.tagline}</p>
            </div>

            {/* REPLACE: Bio paragraphs are in data/about.js → bio[] */}
            <div className="space-y-4">
              {about.bio.map((para, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <Link to="/contact" className="btn-primary inline-flex" aria-label="Go to contact page">
              Let's Connect
            </Link>
          </div>
        </div>

        {/* Skills grid */}
        <section aria-label="Skills">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-8">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* REPLACE: Skill groups are in data/about.js → skills[] */}
            {about.skills.map(({ group, items }) => (
              <div key={group} className="glass rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-4">
                  {group}
                </h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
