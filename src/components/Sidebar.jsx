import { useState, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronRight, ChevronDown } from "lucide-react"
import { projects } from "../data/projects"
import { about } from "../data/about"

export default function Sidebar({ onNavigate }) {
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

  const baseCategories = useMemo(() => [
    "Experience",
    "Programming",
    "Cybersecurity & Networking",
    "Multimedia",
    "Quality Assurance",
  ], [])

  const categoryNames = useMemo(() => {
    const extra = Object.keys(categoriesMap).filter(
      c => !baseCategories.includes(c) && c !== "Write Ups" && c !== "Write-ups"
    )
    return [...baseCategories, ...extra]
  }, [categoriesMap, baseCategories])

  // Start with all categories closed by default
  const [openSections, setOpenSections] = useState(() => {
    const initialState = {}
    categoryNames.forEach(cat => { initialState[cat] = false })
    initialState['certificates'] = false
    initialState['awards'] = false
    initialState['seminars'] = false
    initialState['writeups'] = false
    return initialState
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="w-64 md:w-72 flex-shrink-0 bg-[#0f0f11] border-r border-[#2a2b2f] flex flex-col h-[calc(100vh-3.5rem)] sticky top-14">
      <div className="flex-1 overflow-y-auto custom-scrollbar py-6">
        <div className="px-5 mb-6 space-y-3">
          <NavLink to="/" end onClick={() => onNavigate?.()} className={({isActive}) => `block text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d4] hover:text-white'}`}>About Me</NavLink>
          <NavLink to="/projects" end onClick={() => onNavigate?.()} className={({isActive}) => `block text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d4] hover:text-white'}`}>Projects Overview</NavLink>
          <a
            href={about.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
            onClick={() => onNavigate?.()}
            className="block sm:hidden text-[14px] font-medium text-[#d4d4d4] hover:text-white transition-colors"
          >
            Resume (PDF)
          </a>
        </div>

        <nav className="space-y-6">
          {categoryNames.map(category => {
            const isOpen = openSections[category]
            const categoryProjects = categoriesMap[category] || []

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
                      <span className="text-left font-medium">
                        {category === "Experience" ? "View Experience" : "Projects List"}
                      </span>
                      {isOpen ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
                    </button>
                    {isOpen && (
                      <ul className="mt-0.5 border-l border-[#2a2b2f] ml-7 pl-3 space-y-0.5">
                        {categoryProjects.length > 0 ? (
                          categoryProjects.map(project => {
                            const isActive = location.search.includes(`project=${project.id}`)
                            return (
                              <li key={project.id}>
                                <NavLink 
                                  to={`/projects?project=${project.id}`} 
                                  onClick={() => onNavigate?.()}
                                  className={`block py-1.5 text-[13px] transition-colors line-clamp-1 pr-2 ${isActive ? 'text-white font-medium' : 'text-[#a1a1a1] hover:text-[#d4d4d4]'}`}
                                  title={project.title}
                                >
                                  {project.title}
                                </NavLink>
                              </li>
                            )
                          })
                        ) : (
                          <li className="py-1 text-[12px] text-[#6a6a6a] italic">
                            {category === "Experience" ? "No experience yet" : "No projects yet"}
                          </li>
                        )}
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
                <ul className="mt-1 mb-2 space-y-0.5">
                  <li>
                    <a 
                      href="/certs/THM-PreSecurity.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Pre-Security Pathway"
                    >
                      Pre-Security Pathway
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/THM-JrPenetrationTester.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Jr Penetration Tester Learning Path"
                    >
                      Jr Penetration Tester
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/THM-CyberSecurity.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Cyber Security 101 Learning Path"
                    >
                      Cyber Security 101
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/Appkademiya-CCP.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Certified Cybersecurity Professional (CCP)"
                    >
                      Certified Cybersecurity Professional (CCP)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/OPSWAT- introduction_to_cip.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Introduction to Critical Infrastructure Protection (ICIP)"
                    >
                      OPSWAT – Intro to CIP
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/Cisco_Getting_Started_With_CPT.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Getting Started with Cisco Packet Tracer"
                    >
                      Getting Started with Cisco Packet Tracer
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/dict-cyberpro-badge.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="DICT Cybersecurity Professional (Level 1 — Entry-Level)"
                    >
                      DICT Cybersecurity Professional (Level 1)
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
                  <li>
                    <a 
                      href="/certs/CHRONOS-CTF.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="CSCTF 2026: Total Warfare"
                    >
                      CSCTF 2026: Total Warfare
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/CyberPHCTF.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Packet Capture: Beneath the Network CTF (4th Place)"
                    >
                      Packet Capture CTF - 4th Place
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/SecLeaf_Q4_CTF_2026_Certificate_Jet_Angelo.png" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="SecLeaf Q4 Operations CTF"
                    >
                      SecLeaf Q4 Operations CTF
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button 
                onClick={() => toggleSection('seminars')}
                className={`w-full flex items-center justify-between px-5 py-1.5 text-[13px] ${openSections['seminars'] ? 'text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1b1f] hover:text-[#d4d4d4]'} transition-colors`}
              >
                <span className="text-left font-medium">View Seminars</span>
                {openSections['seminars'] ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
              </button>
              {openSections['seminars'] && (
                <ul className="mt-1 mb-2 space-y-0.5">
                  <li>
                    <a 
                      href="/certs/AlteredSec-COP-FromInitialAccesstoPersistenceAbusingSyncedPassketsinAzure.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="From Initial Access to Persistence: Abusing Synced Passkeys in Azure"
                    >
                      Abusing Synced Passkeys in Azure
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/AlteredSec-COP-HackingBrowsersTheEasyWay.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Hacking Browsers The Easy Way"
                    >
                      Hacking Browsers The Easy Way
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/AlteredSec-COP-HoundMasker.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="HoundMasker: Privacy-Preserving Attack Path Analysis for BloodHound in the LLM Era"
                    >
                      HoundMasker Attack Path Analysis
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/CWL-COA-AutomatingPassiveWebApplicationReconwithn8nAIWebinar.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="Automating Passive Web Application Recon with n8n & AI"
                    >
                      Automating Passive Web Recon (n8n & AI)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/certs/MEC-Huawei-eKit.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block pl-9 pr-5 py-1.5 text-[13px] text-[#a1a1a1] hover:text-[#d4d4d4] transition-colors border-l-2 border-transparent hover:border-[#3b82f6] truncate"
                      title="MEC – Huawei eKit Technical Training"
                    >
                      MEC – Huawei eKit Technical Training
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* WRITE UPS */}
        <div className="mt-8">
          <h3 className="px-5 text-[11px] font-bold text-[#7a7a7a] mb-2 tracking-wider uppercase">
            WRITE UPS
          </h3>
          <ul className="space-y-0.5">
            <li>
              <button 
                onClick={() => toggleSection('writeups')}
                className={`w-full flex items-center justify-between px-5 py-1.5 text-[13px] ${openSections['writeups'] ? 'text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1b1f] hover:text-[#d4d4d4]'} transition-colors`}
              >
                <span className="text-left font-medium">View Write Ups</span>
                {openSections['writeups'] ? <ChevronDown size={14} className="text-[#3b82f6] shrink-0" /> : <ChevronRight size={14} className="text-[#5a5a5a] shrink-0" />}
              </button>
              {openSections['writeups'] && (
                <ul className="mt-0.5 border-l border-[#2a2b2f] ml-7 pl-3 space-y-0.5">
                  {(categoriesMap['Write Ups'] || categoriesMap['Write-ups'] || []).length > 0 ? (
                    (categoriesMap['Write Ups'] || categoriesMap['Write-ups']).map(project => {
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
                    })
                  ) : (
                    <li className="py-1 text-[12px] text-[#6a6a6a] italic">
                      No write-ups yet
                    </li>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
