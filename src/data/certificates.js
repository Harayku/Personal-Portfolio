/**
 * certificates.js — Cyber certification data
 * REPLACE: Update cert names, issuers, dates, credential IDs, and PDF paths.
 * Place PDF files inside /public/certs/ so they are served as static assets.
 */

export const certificates = [
  {
    id: "cert-1",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    issuerLogo: "/images/cisco-logo.png",  // REPLACE: add logo to /public/images/
    date: "2025-08-15",                     // REPLACE: your actual date
    expiryDate: "2028-08-15",
    credentialId: "CSCO-XXXXXXXX",          // REPLACE: your credential ID
    description:
      "Validates skills to install, configure, operate, and troubleshoot medium-size routed and switched networks including implementation and verification of connections to remote sites via a WAN.",
    skills: ["Routing & Switching", "VLANs", "OSPF", "ACL", "NAT", "WAN"],
    badgeUrl: "/images/ccna-badge.png",     // REPLACE: Credly badge or similar
    pdfUrl: "/certs/ccna-certificate.pdf",  // REPLACE: your certificate PDF
    verifyUrl: "https://www.credly.com/badges/REPLACE", // REPLACE
    category: "Cyber Certificates",
    featured: true,
  },
  {
    id: "cert-2",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    issuerLogo: "/images/comptia-logo.png",
    date: "2025-03-20",
    expiryDate: "2028-03-20",
    credentialId: "COMP001-XXXXXXXX",
    description:
      "Industry-standard certification covering core security functions including threat management, cryptography, identity management, network security, and risk mitigation.",
    skills: ["Threat Detection", "Cryptography", "PKI", "Incident Response", "Compliance"],
    badgeUrl: "/images/secplus-badge.png",
    pdfUrl: "/certs/secplus-certificate.pdf",
    verifyUrl: "https://www.credly.com/badges/REPLACE",
    category: "Cyber Certificates",
    featured: true,
  },
  {
    id: "cert-3",
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    issuerLogo: "/images/google-logo.png",
    date: "2024-11-10",
    expiryDate: null,                       // No expiry for this cert
    credentialId: "COURSERA-XXXXXXXX",
    description:
      "5-course program covering technical support fundamentals, networking, operating systems, system administration, and IT security — designed by Google engineers.",
    skills: ["Technical Support", "Linux", "Networking", "Active Directory", "Security"],
    badgeUrl: "/images/google-it-badge.png",
    pdfUrl: "/certs/google-it-certificate.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/REPLACE",
    category: "Cyber Certificates",
    featured: false,
  },
]
