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
    id: "prog-tqg",
    category: "Programming",
    title: "TQG Merchandising Product Management System",
    description:
      "Web Application built with Vanilla PHP, HTML, and CSS. Developed a complete Vanilla PHP CRUD system allowing seamless, real-time modifications to the product database.",
    longDescription:
      "A complete Product Management System built with Vanilla PHP, HTML, and CSS. The application features a robust CRUD system that allows seamless and real-time modifications to the product database, ensuring efficient inventory tracking.",
    tags: ["PHP", "HTML", "CSS", "CRUD", "Web App"],
    image: "/images/TQG-Merchandise.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Harayku/TQG-Merhandise",
    featured: true,
  },
  {
    id: "prog-survey",
    category: "Programming",
    title: "Satisfaction Survey System",
    description:
      "A professional feedback system built with Laravel, Filament, and React, supporting complex data collection (Rating, Text, Checkbox) with a secure, isolated data architecture.",
    longDescription:
      "Designed and developed a comprehensive feedback collection platform. Leveraged Laravel for a robust backend API, React for a dynamic frontend user interface, and Filament for an elegant admin dashboard. Features a secure, isolated data architecture to protect sensitive survey responses and supports complex data inputs (ratings, texts, checkboxes) with built-in validation.",
    tags: ["Laravel", "Filament", "React", "PHP", "Feedback System"],
    image: "/images/survey-system.png",
    demoUrl: "https://valenzuela-satisfaction-survey-main-plae88.laravel.cloud/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "prog-library",
    category: "Programming",
    title: "CEIT Library Management & QR Code Logging System",
    description:
      "Full-stack web application utilizing Laravel, PHP, JavaScript, and SQL. Features a centralized system for logging academic and research papers via QR code scanning and a web-based administrative dashboard for real-time statistics.",
    longDescription:
      "A comprehensive, full-stack library management solution built with Laravel, PHP, JavaScript, and SQL. The system streamlines the logging of academic and research papers using integrated QR code scanning. It also boasts an advanced administrative dashboard displaying live statistics and detailed usage analytics to enhance resource monitoring.",
    tags: ["Laravel", "PHP", "JavaScript", "SQL", "QR Code", "Full-Stack"],
    image: "/images/ceit-library.png",
    demoUrl: "https://ceit-library-main-cru0ty.laravel.cloud/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "prog-packet-flipper",
    category: "Programming",
    title: "Packet Flipper - 3D Educational Networking Game (CAPSTONE)",
    description:
      "A standalone PC sandbox game built with Unity and C#. Developed 3D mechanics to simulate packet flow, VLAN configurations, and CIDR concepts to serve as an interactive learning tool for IT students.",
    longDescription:
      "Packet Flipper is a 3D educational networking game designed as a Capstone project. It serves as an interactive learning tool for IT students by simulating real-world networking concepts in a physical 3D environment. Players can experience packet flows, configure VLANs, and apply CIDR concepts in an engaging PC sandbox experience.",
    tags: ["Unity", "C#", "Game Dev", "Networking", "3D Sandbox", "VLAN", "CIDR"],
    image: "/images/packet-flipper.png",
    demoUrl: "https://packetflipper-portal.vercel.app/login",
    githubUrl: null,
    featured: true,
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
    title: "Packet Flipper — Game Trailer",
    description:
      "Cinematic trailer for the Packet Flipper 3D educational game. Shot in-engine using Unity Cinemachine, edited in DaVinci Resolve with motion graphics and SFX.",
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
    id: "qa-task-buddy",
    category: "Quality Assurance",
    title: "Task-Buddy QA & Testing",
    description:
      "Conducted comprehensive Quality Assurance and testing for the Task-Buddy web application. Performed manual functional, integration, and cross-browser testing to ensure smooth and reliable task management workflows.",
    longDescription:
      "Conducted thorough end-to-end Quality Assurance testing on the Task-Buddy frontend application. Formulated clear test cases, executed manual regressions, performed black-box functional validation on core UI components, and analyzed cross-device responsiveness to guarantee a seamless user experience.",
    tags: ["Quality Assurance", "Manual Testing", "UI/UX Testing", "Functional Testing", "Cross-Browser"],
    image: "/images/task-buddy.png",
    demoUrl: "https://task-buddy-frontend.vercel.app/",
    githubUrl: null,
    featured: true,
  },
]

export const categories = ["All", "Programming", "Networking", "Cyber Certificates", "Multimedia", "Quality Assurance"]
