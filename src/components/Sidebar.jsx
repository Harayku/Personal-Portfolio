import { useState, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronRight, ChevronDown, Layers } from "lucide-react"
import { projects } from "../data/projects"

export default function Sidebar() {
  const location = useLocation()
  
  // Group projects by category
  const categoriesMap = useMemo(() => {
    const map = {}
    projects.forEach(p => {
      if (!map[p.category]) map[p.category] = []
      map[p.category].push(p)
    })
    return map
  }, [])

  const categoryNames = Object.keys(categoriesMap)

  // Start with all categories closed by default
  const [openSections, setOpenSections] = useState(() => {
    const initialState = {}
    categoryNames.forEach(cat => { initialState[cat] = false })
    initialState['certificates'] = false
    initialState['awards'] = false
    return initialState
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="w-64 md:w-72 flex-shrink-0 bg-[#0f0f11] border-r border-[#2a2b2f] flex flex-col h-[calc(100vh-3.5rem)] sticky top-14">
      <div className="flex-1 overflow-y-auto custom-scrollbar py-6">
        <div className="px-5 mb-6 space-y-3">
          <NavLink to="/" end className={({isActive}) => `block text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d4] hover:text-white'}`}>About Me</NavLink>
          <NavLink to="/contact" className={({isActive}) => `block text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d4] hover:text-white'}`}>Contact</NavLink>
          <NavLink to="/projects" end className={({isActive}) => `block text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d4] hover:text-white'}`}>Projects Overview</NavLink>
        </div>

        <nav className="space-y-6">
          {categoryNames.map(category => {
            const isOpen = openSections[category]
            const categoryProjects = categoriesMap[category]

            return (
              <div key={category}>
                <h3 className="px-5 text-[11px] font-bold text-[#7a7a7a] mb-2 tracking-wider uppercase">
                  {category}
                </h3>
                <ul className="space-y-0.5">
                  <li>
                    <button 
                      onClick={() => toggleSection(category)}
                      className={`w-full flex items-center justify-between px-5 py-1.5 text-[13px] ${isOpen ? 'text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1b1f] hover:text-[#d4d4d4]'} transition-colors`}
                    >
                      <span className="text-left font-medium">Projects List</span>
                      {isOpen ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
                    </button>
                    {isOpen && (
                      <ul className="mt-0.5 border-l border-[#2a2b2f] ml-7 pl-3 space-y-0.5">
                        {categoryProjects.map(project => {
                          const isActive = location.search.includes(`project=${project.id}`)
                          return (
                            <li key={project.id}>
                              <NavLink 
                                to={`/projects?project=${project.id}`} 
                                className={`block py-1.5 text-[13px] transition-colors line-clamp-1 pr-2 ${isActive ? 'text-white font-medium' : 'text-[#a1a1a1] hover:text-[#d4d4d4]'}`}
                                title={project.title}
                              >
                                {project.title}
                              </NavLink>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            )
          })}
        </nav>

        <div className="mt-8">
          <h3 className="px-5 text-[11px] font-bold text-[#7a7a7a] mb-2 tracking-wider uppercase">
            CERTIFICATES & AWARDS
          </h3>
          <ul className="space-y-0.5">
            <li>
              <button 
                onClick={() => toggleSection('certificates')}
                className={`w-full flex items-center justify-between px-5 py-1.5 text-[13px] ${openSections['certificates'] ? 'text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1b1f] hover:text-[#d4d4d4]'} transition-colors`}
              >
                <span className="text-left font-medium">View Certificates</span>
                {openSections['certificates'] ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
              </button>
              {openSections['certificates'] && (
                <ul className="mt-1 mb-2">
                  <li>
                    <a 
                      href="/certs/THM-PreSecurity.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6]"
                    >
                      Pre-Security Pathway
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button 
                onClick={() => toggleSection('awards')}
                className={`w-full flex items-center justify-between px-5 py-1.5 text-[13px] ${openSections['awards'] ? 'text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1b1f] hover:text-[#d4d4d4]'} transition-colors`}
              >
                <span className="text-left font-medium">View Awards</span>
                {openSections['awards'] ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
              </button>
              {openSections['awards'] && (
                <ul className="mt-1 mb-2 space-y-0.5">
                  <li>
                    <a 
                      href="/certs/Goldrush-2026.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6]"
                    >
                      Goldrush Gauntlet 2026 (CTF)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/HTB-CTF-Nightfall.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6]"
                    >
                      Global Cyber Skills Benchmark
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/ITlympics-CTF-2026.jpg" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6]"
                    >
                      ITIympics (CTF) 2026 - Silver
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/DEAN-LISTER-PAGADUAN.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6]"
                    >
                      Consistent Dean's Lister
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
