import { Mail, MapPin, MessageSquare } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/SocialIcons"
import ContactForm from "../components/ContactForm"
import { contact } from "../data/contact"
import { about } from "../data/about"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: contact.displayEmail,
    href: `mailto:${contact.displayEmail}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contact.location,
    href: null,
  },
]

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <MessageSquare size={16} aria-hidden="true" />
            Contact
          </div>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-sub">
            Have a project, question, or just want to connect? Fill out the form and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: info panel */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Contact information">
            {/* Contact name card */}
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-2">
                Contacting
              </p>
              {/* REPLACE: Your name is pulled from data/contact.js → contactName */}
              <h2 className="text-2xl font-extrabold text-white mb-1">{contact.contactName}</h2>
              <p className="text-slate-400 text-sm">{about.tagline}</p>
            </div>

            {/* Details */}
            <div className="glass rounded-2xl p-6 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 shrink-0">
                    <Icon size={16} className="text-sky-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-300 hover:text-sky-400 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Find Me Online
              </p>
              <div className="flex flex-col gap-3">
                {contact.socials.github && (
                  <a
                    href={contact.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    aria-label="GitHub profile"
                  >
                    <GithubIcon size={18} className="group-hover:text-sky-400 transition-colors" />
                    <span className="text-sm">GitHub</span>
                  </a>
                )}
                {contact.socials.linkedin && (
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon size={18} className="group-hover:text-sky-400 transition-colors" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
                {contact.socials.twitter && (
                  <a
                    href={contact.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    aria-label="Twitter / X profile"
                  >
                    <TwitterIcon size={18} className="group-hover:text-sky-400 transition-colors" />
                    <span className="text-sm">Twitter / X</span>
                  </a>
                )}
              </div>
            </div>

            {/* Response time note */}
            <p className="text-xs text-slate-600 text-center">
              ⏱ Typical response time: within 24–48 hours
            </p>
          </aside>

          {/* Right: form */}
          <div className="lg:col-span-3 glass rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
