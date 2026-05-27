/**
 * projects.js — Sample project data
 * REPLACE: Update titles, descriptions, links, and tags with your real projects.
 * Image paths should point to files inside /public/images/ or use external URLs.
 */

export const projects = [
  // ─── PROGRAMMING ──────────────────────────────────────────────────────────
  {
    id: "prog-dormitory",
    category: "Programming",
    title: "The Secret of Old Dormitory",
    description:
      "Visual Novel Game built with Unity. Implemented a custom JSON-based dialogue system to efficiently manage and load text data and player choices within Unity.",
    longDescription:
      "A visual novel game built with Unity. Developed a custom JSON-based dialogue system to handle complex branching narratives, load text data efficiently, and seamlessly manage player choices.",
    tags: ["Unity", "C#", "Game Dev", "Visual Novel", "JSON"],
    image: "/images/secretofdormitory.png",
    demoUrl: "https://psalmuelle.itch.io/the-secret-of-the-old-dormitory",
    githubUrl: null,
    featured: true,
  },
  {
    id: "prog-pathogenesis",
    category: "Programming",
    title: "Pathogenesis: End of Revelation",
    description:
      "Retro horror adventure game featuring shooter mechanics built with Unity. Designed and developed a top-down retro horror game, seamlessly integrating active shooter mechanics with a virology-themed narrative.",
    longDescription:
      "A top-down retro horror game built with Unity. The game features active shooter mechanics seamlessly integrated into a virology-themed narrative, offering a thrilling adventure experience.",
    tags: ["Unity", "C#", "Game Dev", "Horror", "Shooter"],
    image: "/images/pathogenesis.png",
    demoUrl: "https://harayku.itch.io/pathogenesis-end-of-revelation",
    githubUrl: null,
    featured: true,
  },
  {
    id: "prog-1",
    category: "Programming",
    title: "Packet Chase",
    description:
      "A 3-D educational game built in Unity where players learn computer networking concepts by physically connecting network cables and configuring switches, routers, and VLANs in an interactive sandbox environment.",
    longDescription:
      "Packet Chase is a capstone project designed to make networking education engaging. Players walk through a virtual office, crimp Ethernet cables, configure managed switches via a simulated CLI, and watch packets travel across the network in real time.",
    tags: ["Unity", "C#", "Game Dev", "Networking", "Scriptable Objects"],
    image: "/images/packet-chase.png", // REPLACE: add your screenshot to /public/images/
    demoUrl: "#",                        // REPLACE: live demo link
    githubUrl: "https://github.com/YOURUSERNAME/packet-chase", // REPLACE
    featured: true,
  },
  {
    id: "prog-2",
    category: "Programming",
    title: "Portfolio Website",
    description:
      "This very site — a responsive personal portfolio built with React, React Router, and Tailwind CSS, featuring dark mode, animated hero, project grid with category filters, and a functional contact form.",
    longDescription:
      "Built as a showcase of modern front-end skills. Implements lazy-loaded routes, a reusable component library, glassmorphism design, and a Netlify serverless function for form handling.",
    tags: ["React", "Tailwind CSS", "Vite", "React Router", "Serverless"],
    image: "/images/portfolio.png",
    demoUrl: "#",
    githubUrl: "https://github.com/YOURUSERNAME/portfolio", // REPLACE
    featured: true,
  },
  {
    id: "prog-3",
    category: "Programming",
    title: "Network Topology Visualizer",
    description:
      "A web-based tool that renders live network topology diagrams from JSON config files, color-coding device states and traffic flows using D3.js and WebSockets.",
    longDescription:
      "Reads Cisco-style device configs and produces interactive SVG graphs. Supports drag-and-drop node rearrangement, hover tooltips with interface stats, and export to PNG/SVG.",
    tags: ["JavaScript", "D3.js", "WebSocket", "Node.js", "Express"],
    image: "/images/topology.png",
    demoUrl: "#",
    githubUrl: "https://github.com/YOURUSERNAME/network-visualizer", // REPLACE
    featured: false,
  },

  // ─── NETWORKING ───────────────────────────────────────────────────────────
  {
    id: "net-1",
    category: "Networking",
    title: "Enterprise VLAN Lab",
    description:
      "A Packet Tracer lab simulating a 3-tier enterprise network with inter-VLAN routing, spanning tree, HSRP failover, and DHCP relay across multiple sites.",
    longDescription:
      "Covers trunk port configuration, VLAN pruning, rapid PVST+, HSRP active/standby pairs, and ACL-based security policies. All devices are documented with running configs.",
    tags: ["Cisco IOS", "Packet Tracer", "VLAN", "HSRP", "STP"],
    image: "/images/vlan-lab.png",
    demoUrl: "#",  // REPLACE: link to .pkt file or video walkthrough
    githubUrl: "https://github.com/YOURUSERNAME/vlan-lab", // REPLACE
    featured: true,
  },
  {
    id: "net-2",
    category: "Networking",
    title: "Home Lab: pfSense + Proxmox",
    description:
      "A physical home-lab stack running Proxmox VE with pfSense VM as the perimeter firewall, segmented VLANs for IoT / work / guest networks, and WireGuard VPN.",
    longDescription:
      "Covers Proxmox cluster setup, pfSense firewall rules, VLAN tagging via managed switch, Suricata IDS, and automated backups to NAS. Network diagram and config files included.",
    tags: ["Proxmox", "pfSense", "WireGuard", "Suricata", "Home Lab"],
    image: "/images/homelab.png",
    demoUrl: "#",
    githubUrl: "https://github.com/YOURUSERNAME/homelab-docs", // REPLACE
    featured: false,
  },

  // ─── MULTIMEDIA ───────────────────────────────────────────────────────────
  {
    id: "mm-1",
    category: "Multimedia",
    title: "Packet Chase — Game Trailer",
    description:
      "Cinematic trailer for the Packet Chase educational game. Shot in-engine using Unity Cinemachine, edited in DaVinci Resolve with motion graphics and SFX.",
    longDescription:
      "Showcases gameplay mechanics, cable-crimping sequences, and switch configuration UI. Color-graded to a neon-noir aesthetic. Runtime: 1m 30s.",
    tags: ["DaVinci Resolve", "Unity Cinemachine", "Motion Graphics", "SFX"],
    image: "/images/trailer.png",
    demoUrl: "https://youtu.be/REPLACE_WITH_YOUR_LINK", // REPLACE
    githubUrl: null,
    featured: true,
  },
  {
    id: "mm-2",
    category: "Multimedia",
    title: "UI/UX Case Study — Networking App",
    description:
      "End-to-end UX case study for a mobile app that helps home users diagnose and fix common network issues with step-by-step guided flows.",
    longDescription:
      "Includes user research, competitive analysis, wireframes in Figma, high-fidelity prototypes, and usability-test findings. Focused on accessibility (WCAG AA).",
    tags: ["Figma", "UX Research", "Prototyping", "WCAG", "Mobile"],
    image: "/images/ux-case.png",
    demoUrl: "https://www.figma.com/REPLACE", // REPLACE: Figma prototype link
    githubUrl: null,
    featured: false,
  },
  {
    id: "qa-1",
    category: "Quality Assurance",
    title: "Quality Assurance Project Template",
    description:
      "A template for a Quality Assurance project. Update this description with details about your manual/automated testing, test cases, or QA processes.",
    longDescription:
      "A more detailed explanation of your Quality Assurance methodologies, testing frameworks used, bug tracking processes, and the impact of your QA efforts.",
    tags: ["QA", "Testing", "Manual Testing"],
    image: "/images/qa-placeholder.png",
    demoUrl: "#",
    githubUrl: null,
    featured: false,
  },
]

export const categories = ["All", "Programming", "Networking", "Cyber Certificates", "Multimedia", "Quality Assurance"]
