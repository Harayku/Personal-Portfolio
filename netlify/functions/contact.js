/**
 * Netlify Serverless Function — Contact Form Handler
 * File: netlify/functions/contact.js
 *
 * HOW TO USE:
 *   1. npm install @sendgrid/mail   (or use nodemailer + SMTP)
 *   2. Set SENDGRID_API_KEY in Netlify environment variables
 *   3. REPLACE: to/from email addresses below
 *   4. Update src/data/contact.js → apiEndpoint: "/.netlify/functions/contact"
 *
 * Deploy: push to GitHub → connect to Netlify → auto-deploys
 *
 * Vercel Alternative:
 *   Create /api/contact.js instead and export default handler(req, res)
 *   See comments at the bottom of this file.
 */

// Uncomment and install: npm install @sendgrid/mail
// const sgMail = require("@sendgrid/mail")

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: "Invalid JSON" }
  }

  const { name, email, subject, message } = body

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "All required fields must be provided." }),
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email address." }),
    }
  }

  // ── SendGrid example ──────────────────────────────────────────────────────
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // await sgMail.send({
  //   to:      "your.email@example.com",  // REPLACE: receiving address
  //   from:    "noreply@yourdomain.com",  // REPLACE: verified SendGrid sender
  //   replyTo: email,
  //   subject: `[Portfolio Contact] ${subject}`,
  //   text:    `From: ${name} <${email}>\n\n${message}`,
  //   html:    `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
  //             <p><strong>Subject:</strong> ${subject}</p>
  //             <hr/>
  //             <p>${message.replace(/\n/g, "<br/>")}</p>`,
  // })
  // ──────────────────────────────────────────────────────────────────────────

  // PLACEHOLDER: Log to console until you wire up an email service
  console.log("Contact form submission:", { name, email, subject, message })

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true, message: "Message received!" }),
  }
}

/* ============================================================
   VERCEL ALTERNATIVE — create this file as /api/contact.js
   ============================================================

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed")

  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message)
    return res.status(400).json({ error: "Missing required fields." })

  // Wire up email service here (SendGrid, Resend, Nodemailer, etc.)
  console.log("Contact form:", { name, email, subject, message })

  return res.status(200).json({ success: true })
}

   REPLACE: Update contact.js → apiEndpoint: "/api/contact" for Vercel.
   ============================================================ */
