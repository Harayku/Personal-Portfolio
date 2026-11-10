import { MapPin, GraduationCap, FileText, ExternalLink, Mail, Award } from "lucide-react"
import { about } from "../data/about"
import { certificates } from "../data/certificates"

export default function Home() {

  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    try {
      const [year, month, day] = dateStr.split("-").map(Number)
      const date = new Date(year, month - 1, day)
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    } catch {
      return dateStr
    }
  }

  const certList = certificates.filter(cert => cert.category === "Certificate")

  return (
    <main className="min-h-screen font-sans pb-24 animate-fade-in" style={{ animationDuration: "0.6s" }}>
      <div className="max-w-4xl mx-auto">

        {/* HERO HEADER */}
        <div className="flex flex-col mb-16 items-start">
          {/* Info */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white tracking-tight">
                {about.name}
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

            <h2 className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 flex flex-wrap items-center gap-2">
              {about.tagline.split(' · ').map((part, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  {part}
                  {i < arr.length - 1 && <span className="text-slate-300 dark:text-slate-600 font-light">\</span>}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* ABOUT TEXT */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">whoami?</h2>
          <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] sm:text-base mb-8">
            {about.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Let's Connect */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Let's Connect:</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px]">
                <span className="font-bold text-slate-900 dark:text-white w-28">Github:</span>
                <a href={about.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">{about.github.replace('https://', '')} <ExternalLink size={14} /></a>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <span className="font-bold text-slate-900 dark:text-white w-28">Linkedin:</span>
                <a href={about.linkedin} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">{about.linkedin.replace('https://www.', '')} <ExternalLink size={14} /></a>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <span className="font-bold text-slate-900 dark:text-white w-28">TryHackMe:</span>
                <a href="https://tryhackme.com/p/Harayku" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">tryhackme.com/p/Harayku <ExternalLink size={14} /></a>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <span className="font-bold text-slate-900 dark:text-white w-28">Hack The Box:</span>
                <a href="https://profile.hackthebox.com/profile/019c361f-5b9c-7002-ad3e-fe0e4b0e9c65" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">app.hackthebox.com/profile/Harayku <ExternalLink size={14} /></a>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <span className="font-bold text-slate-900 dark:text-white w-28">Email:</span>
                <a href={`mailto:${about.email}`} className="text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">{about.email} <Mail size={14} /></a>
              </div>
            </div>
          </div>

          {/* Certificate Preview */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <FileText size={18} className="text-blue-500" />
              Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certList.map((cert) => {
                const imageSrc = cert.badgeUrl || (cert.pdfUrl && (cert.pdfUrl.endsWith('.png') || cert.pdfUrl.endsWith('.jpg')) ? cert.pdfUrl : null)

                return (
                  <div
                    key={cert.id}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors"
                  >
                    <a
                      href={cert.pdfUrl || cert.verifyUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center relative group cursor-pointer"
                      title={cert.title}
                    >
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={`${cert.title} preview`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-500/10 text-blue-500 group-hover:scale-105 transition-transform duration-500">
                          <Award size={26} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink size={14} className="text-white drop-shadow-md" />
                      </div>
                    </a>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1" title={cert.title}>
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        {cert.issuer} {cert.date ? `• Completed ${formatDate(cert.date)}` : ""}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        {cert.pdfUrl && (
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-wider transition-colors"
                          >
                            {cert.pdfUrl.endsWith('.pdf') ? 'View PDF >' : 'View File >'}
                          </a>
                        )}
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider transition-colors"
                          >
                            Verify Online &gt;
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <hr className="border-slate-100 dark:border-slate-800/60 mb-16" />

        {/* TECH STACK */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Tech Stack</h2>
          </div>

          <div className="space-y-8">
            {about.skills.map((skillGroup) => (
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

      </div>
    </main>
  )
}
