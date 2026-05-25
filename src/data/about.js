/**
 * about.js — Personal info for the About page
 * REPLACE: Everything marked with a REPLACE comment.
 */

export const about = {
  // REPLACE: Your full name
  name: "Your Name",

  // REPLACE: One-line tagline shown in the hero
  tagline: "IT Student · Network Enthusiast · Game Developer",

  // REPLACE: Your avatar/profile photo — place in /public/images/
  avatar: "/images/avatar.jpg",

  // REPLACE: 2–3 short paragraphs about yourself
  bio: [
    "I'm a Bachelor of Science in Information Technology student passionate about computer networking, cybersecurity, and interactive software. My work spans from configuring enterprise Cisco topologies to building 3-D educational games in Unity.",
    "I believe technology should be both functional and engaging — which is why I blend strong technical foundations with creative multimedia skills. Whether it's designing a secure VLAN scheme or crafting an animated game trailer, I bring the same attention to detail.",
    "Currently seeking opportunities in network administration, IT support, or software development where I can apply my skills and keep learning.",
  ],

  // REPLACE: Your real location
  location: "Manila, Philippines",

  // REPLACE: Your professional email
  email: "your.email@example.com",

  // REPLACE: Your GitHub username
  github: "https://github.com/YOURUSERNAME",

  // REPLACE: Your LinkedIn URL
  linkedin: "https://linkedin.com/in/YOURUSERNAME",

  // REPLACE: Twitter/X, optional — set to null to hide
  twitter: null,

  // REPLACE: Your CV/resume PDF — place in /public/
  resumeUrl: "/resume.pdf",

  skills: [
    // Group your skills; add/remove groups as needed
    {
      group: "Networking",
      items: ["Cisco IOS", "VLANs / Trunking", "OSPF / RIP", "STP / RSTP", "Packet Tracer", "pfSense"],
    },
    {
      group: "Programming",
      items: ["C#", "JavaScript", "Python", "HTML / CSS", "React", "Node.js"],
    },
    {
      group: "Cybersecurity",
      items: ["Network Hardening", "ACLs / Firewall Rules", "Wireshark", "Nmap", "Suricata IDS"],
    },
    {
      group: "Tools & Platforms",
      items: ["Unity 3D", "Git / GitHub", "Figma", "DaVinci Resolve", "Linux", "VS Code"],
    },
  ],

  education: [
    {
      school: "Your University Name", // REPLACE
      degree: "Bachelor of Science in Information Technology",
      years: "2022 – Present",        // REPLACE
      gpa: "Your GPA",                // REPLACE or remove
    },
  ],
}
