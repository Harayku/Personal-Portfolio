import { useState } from "react"
import { Send, CheckCircle, AlertCircle, Loader2, User } from "lucide-react"
import { contact } from "../data/contact"

const INITIAL = { name: "", email: "", subject: "", message: "", contactName: "" }

function validate(fields) {
  const errors = {}
  if (!fields.name.trim())          errors.name    = "Your name is required."
  if (!fields.email.trim())         errors.email   = "Your email is required."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                    errors.email   = "Please enter a valid email address."
  if (!fields.subject.trim())       errors.subject = "Subject is required."
  if (!fields.message.trim())       errors.message = "Message cannot be empty."
  else if (fields.message.trim().length < 10)
                                    errors.message = "Message must be at least 10 characters."
  return errors
}

/**
 * ContactForm — validated contact form with success/error feedback
 * Submits to contact.apiEndpoint via POST (JSON).
 * REPLACE: Update contact.js → apiEndpoint to your real serverless function URL.
 */
export default function ContactForm() {
  const [fields,   setFields]   = useState(INITIAL)
  const [errors,   setErrors]   = useState({})
  const [status,   setStatus]   = useState("idle") // idle | sending | success | error
  const [apiError, setApiError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      // Move focus to first error
      const firstErrorId = Object.keys(validationErrors)[0]
      document.getElementById(firstErrorId)?.focus()
      return
    }

    setStatus("sending")
    setApiError("")

    try {
      const res = await fetch(contact.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })

      if (!res.ok) throw new Error(`Server responded with ${res.status}`)
      setStatus("success")
      setFields(INITIAL)
    } catch (err) {
      console.error("Contact form submission error:", err)
      setStatus("error")
      setApiError("Failed to send message. Please try again or email me directly.")
    }
  }

  const isSending = status === "sending"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Success banner */}
      {status === "success" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
        >
          <CheckCircle size={20} className="shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">Message sent!</p>
            <p className="text-sm opacity-80">I'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}

      {/* Error banner */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
        >
          <AlertCircle size={20} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm">{apiError}</p>
        </div>
      )}

      {/* Contact Name (visible field) — REPLACE: explain or rename as needed */}
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Contacting
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" aria-hidden="true">
            <User size={16} />
          </span>
          <input
            id="contactName"
            name="contactName"
            type="text"
            value={fields.contactName}
            onChange={handleChange}
            placeholder={contact.contactName} // Shows your name as placeholder
            className="input-field pl-9 text-sm"
            aria-describedby="contactName-hint"
          />
        </div>
        <p id="contactName-hint" className="text-xs text-slate-500 mt-1">
          {/* REPLACE: remove or update this hint */}
          Optional — who are you reaching out to?
        </p>
      </div>

      {/* Two columns: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Your Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`input-field text-sm ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : ""}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Email Address <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`input-field text-sm ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : ""}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Subject <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={fields.subject}
          onChange={handleChange}
          placeholder="Project Inquiry / Collaboration / etc."
          required
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`input-field text-sm ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : ""}`}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Message <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello…"
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-count"}
          className={`input-field text-sm resize-none ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : ""}`}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message}
          </p>
        ) : (
          <p id="message-count" className="text-xs text-slate-500 mt-1 text-right">
            {fields.message.length} characters
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        aria-label="Send message"
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        {isSending ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
