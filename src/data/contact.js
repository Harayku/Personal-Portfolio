/**
 * contact.js — Contact page configuration
 * REPLACE: Update contactName, email, and social handles.
 */

export const contact = {
  // REPLACE: The public-facing name shown on the contact page
  contactName: "Your Name",

  // REPLACE: The email address displayed (not necessarily the receiving address)
  displayEmail: "your.email@example.com",

  // REPLACE: Location shown below the email
  location: "Manila, Philippines",

  // Social links shown on the contact page (set to null to hide)
  socials: {
    github: "https://github.com/YOURUSERNAME",      // REPLACE
    linkedin: "https://linkedin.com/in/YOURUSERNAME", // REPLACE
    twitter: null,                                   // REPLACE or keep null
  },

  // API endpoint for the contact form POST request
  // REPLACE: Update this to your Netlify / Vercel function URL
  // e.g., "/.netlify/functions/contact" for Netlify
  //        "/api/contact" for Vercel
  apiEndpoint: "/api/contact",
}
