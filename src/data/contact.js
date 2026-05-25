/**
 * contact.js — Contact page configuration
 * REPLACE: Update contactName, email, and social handles.
 */

export const contact = {
  // REPLACE: The public-facing name shown on the contact page
  contactName: "Jet Angelo Pagaduan",

  // REPLACE: The email address displayed (not necessarily the receiving address)
  displayEmail: "[EMAIL_ADDRESS]",

  // REPLACE: Location shown below the email
  location: "Valenzuela City, Philippines",

  // Social links shown on the contact page (set to null to hide)
  socials: {
    github: "https://github.com/Harayku",      // REPLACE
    linkedin: "https://www.linkedin.com/in/jetpagaduan/", // REPLACE
    twitter: null,                                   // REPLACE or keep null
  },

  // API endpoint for the contact form POST request
  // REPLACE: Update this to your Netlify / Vercel function URL
  // e.g., "/.netlify/functions/contact" for Netlify
  //        "/api/contact" for Vercel
  apiEndpoint: "/api/contact",
}
