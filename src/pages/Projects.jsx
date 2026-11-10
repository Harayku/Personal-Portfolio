import { useMemo } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { ChevronRight, ChevronLeft, Copy, ExternalLink } from "lucide-react"
import { GithubIcon } from "../components/SocialIcons"
import { projects } from "../data/projects"

export default function Projects() {
  const [searchParams] = useSearchParams()
  const projectId = searchParams.get("project")

  // Find the selected project, or default to rendering an overview/category page
  const activeProject = useMemo(() => {
    if (!projectId) return null
    return projects.find(p => p.id === projectId) || null
  }, [projectId])

  // Group projects for the overview view
  const categoriesMap = useMemo(() => {
    const map = {}
    projects.forEach(p => {
      if (!map[p.category]) map[p.category] = []
      map[p.category].push(p)
    })

    const categoryOrder = [
      "Experience",
      "Programming",
      "Cybersecurity & Networking",
      "Multimedia",
      "Quality Assurance",
      "Write Ups",
    ]

    const sortedMap = {}
    categoryOrder.forEach(cat => {
      if (map[cat]) sortedMap[cat] = map[cat]
    })
    Object.keys(map).forEach(cat => {
      if (!sortedMap[cat]) sortedMap[cat] = map[cat]
    })

    return sortedMap
  }, [])

  // View: Single Project Details
  if (activeProject) {
    const currentIndex = projects.findIndex(p => p.id === activeProject.id)
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

    return (
      <div className="text-[#d4d4d4] animate-fade-in pb-24">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
          <div>
            <h2 className="text-[11px] font-bold text-[#3b82f6] uppercase tracking-wider mb-3">
              {activeProject.category}
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {activeProject.title}
            </h1>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
             <button className="flex items-center gap-2 px-3 py-1.5 border border-[#2a2b2f] rounded-lg text-[13px] text-[#a1a1a1] hover:text-white hover:bg-[#1a1b1f] transition-colors">
              <Copy size={14} />
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="prose prose-invert max-w-none">
          <p className="text-[15px] leading-relaxed text-[#a1a1a1] mb-8">
            {activeProject.longDescription || activeProject.description}
          </p>

          {activeProject.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-[#2a2b2f] bg-[#151619]">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-4 mb-12">
            {activeProject.demoUrl && activeProject.demoUrl !== "#" && (
              <a 
                href={activeProject.demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[13px] font-medium rounded-lg transition-colors"
              >
                <ExternalLink size={16} /> View Project
              </a>
            )}
            {activeProject.githubUrl && activeProject.githubUrl !== "#" && (
              <a 
                href={activeProject.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1b1f] hover:bg-[#2a2b2f] border border-[#3a3a40] text-white text-[13px] font-medium rounded-lg transition-colors"
              >
                <GithubIcon size={16} /> Source Code
              </a>
            )}
          </div>
          
          {/* Tags */}
          {activeProject.tags && (
             <div className="flex flex-wrap gap-2 mb-12">
               {activeProject.tags.map(tag => (
                 <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-[#7a7a7a] bg-[#1a1b1f] border border-[#2a2b2f] rounded-md">
                   {tag}
                 </span>
               ))}
             </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 mt-8 border-t border-[#2a2b2f]">
          {prevProject ? (
            <Link to={`/projects?project=${prevProject.id}`} className="flex items-center justify-between p-4 border border-[#2a2b2f] rounded-xl bg-transparent hover:border-[#4a4b4f] hover:bg-[#151619] transition-all group">
              <ChevronLeft size={16} className="text-[#5a5a5a] group-hover:text-[#a1a1a1] transition-colors" />
              <div className="text-right max-w-[80%]">
                <div className="text-[11px] text-[#7a7a7a] mb-0.5 group-hover:text-[#a1a1a1] transition-colors">Previous</div>
                <div className="text-[14px] font-medium text-[#d4d4d4] group-hover:text-white transition-colors truncate">{prevProject.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/projects?project=${nextProject.id}`} className="flex items-center justify-between p-4 border border-[#2a2b2f] rounded-xl bg-transparent hover:border-[#4a4b4f] hover:bg-[#151619] transition-all group">
              <div className="text-left max-w-[80%]">
                <div className="text-[11px] text-[#7a7a7a] mb-0.5 group-hover:text-[#a1a1a1] transition-colors">Next</div>
                <div className="text-[14px] font-medium text-[#d4d4d4] group-hover:text-white transition-colors truncate">{nextProject.title}</div>
              </div>
              <ChevronRight size={16} className="text-[#5a5a5a] group-hover:text-[#a1a1a1] transition-colors" />
            </Link>
          ) : <div />}
        </div>
      </div>
    )
  }

  // View: Overview / Categories Grid (Default when no project is selected)
  return (
    <div className="text-[#d4d4d4] animate-fade-in pb-24">
      <div className="mb-12">
        <h2 className="text-[11px] font-bold text-[#3b82f6] uppercase tracking-wider mb-3">
          OVERVIEW
        </h2>
        <h1 className="text-4xl md:text-[40px] font-extrabold text-white tracking-tight">
          All Projects
        </h1>
      </div>

      <div className="space-y-12">
        {Object.entries(categoriesMap).map(([category, catProjects]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-[#2a2b2f] pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {catProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects?project=${project.id}`}
                  className="flex items-center justify-between p-4 border border-[#2a2b2f] rounded-xl bg-transparent hover:border-[#4a4b4f] hover:bg-[#151619] transition-all group"
                >
                  <span className="text-[14px] font-medium text-[#d4d4d4] group-hover:text-white transition-colors line-clamp-1 pr-4">
                    {project.title}
                  </span>
                  <ChevronRight size={16} className="text-[#5a5a5a] group-hover:text-[#a1a1a1] transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
