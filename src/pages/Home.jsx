import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Mail, Download, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons"
import { about } from "../data/about"
import { projects } from "../data/projects"
import AvatarSequence from "../components/AvatarSequence"

export default function Home({ darkMode }) {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const featuredIds = ["prog-pathogenesis", "prog-survey", "prog-packet-flipper", "prog-library"]
  const featuredProjects = projects.filter((p) => featuredIds.includes(p.id))

  const defaultCategories = ["Cybersecurity", "Programming", "Frameworks & Libraries"]
  const displayedSkills = showAllSkills
    ? about.skills
    : about.skills.filter(skill => defaultCategories.includes(skill.group))

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-slate-200 dark:selection:bg-slate-800 pb-24 pt-24 sm:pt-32">
      <div className="max-w-4xl mx-auto px-6">

        {/* HERO HEADER */}
        <div className="flex flex-col sm:flex-row gap-8 mb-16 items-start animate-fade-in" style={{ animationDuration: "0.6s" }}>
          {/* Avatar Sequence Toggle */}
          <div className="w-40 h-40 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <AvatarSequence isDarkMode={darkMode} />
          </div>

          {/* Info */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white tracking-tight">
                {about.name}
                <CheckCircle2 size={24} className="text-blue-500 fill-blue-500/10" />
              </h1>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                <MapPin size={16} />
                <span>{about.location}</span>
              </div>
              {about.education && about.education.length > 0 && (
                <div className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <GraduationCap size={16} className="mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span>{about.education[0].school} • BSIT</span>
                    <span>Arellano University - Elisa Esguera Campus • ICT-TVL</span>
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              {about.tagline.split(' · ').map((part, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  {part}
                  {i < arr.length - 1 && <span className="text-slate-300 dark:text-slate-600 font-light">\</span>}
                </span>
              ))}
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={about.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                href={`mailto:${about.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-transparent text-slate-900 dark:text-slate-100 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm"
              >
                <Mail size={16} /> Send Email
              </a>
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-transparent text-slate-900 dark:text-slate-100 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm"
              >
                <GithubIcon size={16} /> GitHub <ChevronRight size={14} className="ml-1 text-slate-400" />
              </a>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-transparent text-slate-900 dark:text-slate-100 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm"
              >
                <LinkedinIcon size={16} /> LinkedIn <ChevronRight size={14} className="ml-1 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* ABOUT TEXT */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">About</h2>
          <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] sm:text-base">
            {about.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <hr className="border-slate-100 dark:border-slate-800/60 mb-16" />

        {/* TECH STACK */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Tech Stack</h2>
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              {showAllSkills ? "Show Less" : "View All"} <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-8">
            {displayedSkills.map((skillGroup) => (
              <div key={skillGroup.group}>
                <h3 className="text-[15px] font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {skillGroup.group}
                </h3>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-[15px] font-medium text-slate-600 dark:text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-100 dark:border-slate-800/60 mb-16" />

        {/* PROJECTS */}
        <section id="projects">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Projects</h2>
            <Link
              to="/projects"
              className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects.map((project) => {
              let tagLabel = project.tags && project.tags.length > 0 ? project.tags[0] : "Project";
              if (project.demoUrl && project.demoUrl !== "#" && project.demoUrl.startsWith("http")) {
                try {
                  tagLabel = new URL(project.demoUrl).hostname.replace("www.", "");
                } catch (e) { }
              }

              return (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors flex flex-col h-full group"
                >
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono font-semibold rounded">
                      {tagLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  )
}
