/**
 * certificates.js — Cyber certification data
 * REPLACE: Update cert names, issuers, dates, credential IDs, and PDF paths.
 * Place PDF files inside /public/certs/ so they are served as static assets.
 */

export const certificates = [
  {
    id: "award-goldrush",
    title: "Goldrush Gauntlet 2026 (CTF)",
    issuer: "Cybersecurity Competition",
    issuerLogo: "/images/goldrush-logo.png",
    date: "2026-04-10",
    expiryDate: null,
    credentialId: null,
    description:
      "Successfully competed in the Goldrush Gauntlet 2026 Capture The Flag (CTF) competition, solving various hands-on challenges across cryptography, reverse engineering, web exploitation, and system forensics.",
    skills: ["Cybersecurity", "CTF", "Cryptography", "Reverse Engineering", "Web Exploitation"],
    badgeUrl: null,
    pdfUrl: "/certs/Goldrush-2026.png",
    verifyUrl: null,
    category: "Awards and Honor",
    featured: true,
    rank: "RANKED 29th",
  },
  {
    id: "award-nightfall",
    title: "Global Cyber Skills Benchmark",
    issuer: "HackTheBox",
    issuerLogo: "/images/nightfall-logo.png",
    date: "2026-05-15",
    expiryDate: null,
    credentialId: null,
    description:
      "Competed in the Global Cyber Skills Benchmark 2026 Project Nightfall CTF, demonstrating expertise in security benchmarking, defense analysis, network scanning, and vulnerability discovery.",
    skills: ["Penetration Testing", "Vulnerability Discovery", "Network Security", "Defense Analysis"],
    badgeUrl: null,
    pdfUrl: "/certs/HTB-CTF-Nightfall.pdf",
    verifyUrl: null,
    category: "Awards and Honor",
    featured: true,
    rank: "RANKED 63rd",
  },
  {
    id: "award-itlympics",
    title: "ITlympics (CTF) 2026",
    issuer: "ITlympics Competition",
    issuerLogo: "/images/itlympics-logo.png",
    date: "2026-03-25",
    expiryDate: null,
    credentialId: null,
    description:
      "Successfully competed in the ITlympics Capture The Flag (CTF) 2026 competition, working through core challenges in penetration testing, network defense, and cryptography.",
    skills: ["Cybersecurity", "CTF", "Ethical Hacking", "Cryptography", "OSINT"],
    badgeUrl: null,
    pdfUrl: "/certs/ITlympics-CTF-2026.jpg",
    verifyUrl: null,
    category: "Awards and Honor",
    featured: true,
    rank: "RANKED 2ND PLACED - SILVER",
  },
  {
    id: "award-deans-list",
    title: "Consistent Dean's Lister",
    issuer: "College of Engineering and Information Technology (CEIT)",
    issuerLogo: null,
    date: "2026-05-27",
    yearRange: "2023-2026",
    expiryDate: null,
    credentialId: null,
    description:
      "Recognized consistently as a Dean's Lister for outstanding academic performance and scholastic excellence, maintaining a prestigious Running General Weighted Average (GWA) of 1.20.",
    skills: ["Academic Excellence", "Analytical Thinking", "Technical Leadership", "Computer Science"],
    badgeUrl: null,
    pdfUrl: "/certs/DEAN-LISTER-PAGADUAN.png",
    verifyUrl: null,
    category: "Awards and Honor",
    featured: true,
    rank: "RUNNING GWA OF 1.20",
  },
]
