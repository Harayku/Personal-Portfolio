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
    demoUrl: "https://drive.google.com/file/d/1TnbMZI2H9BTpfP7t6IZMRhA6u8KO7umm/view",
    githubUrl: null,
    featured: true,
  },
  // ─── NETWORKING ───────────────────────────────────────────────────────────
  {
    id: "net-floor-proposal",
    category: "Networking",
    title: "Office Floor Plan Network Design Proposal",
    description:
      "A comprehensive network infrastructure proposal design for a multi-floor office office building, incorporating cabling routes, active device placements, and budget sheets.",
    longDescription:
      "This design proposal covers the full structural network design for a modern corporate office. It incorporates precise floor layouts with structural cabling runs, active switch/router distribution hubs, wireless AP placement map, subnetting schemes, and an itemized hardware budget sheet.",
    tags: ["Network Design", "Cabling Layout", "IP Subnetting", "Hardware Budget"],
    image: "/images/floor-plan.png",
    demoUrl: "/floor-plan.pdf",
    githubUrl: null,
    featured: true,
  },
  {
    id: "net-vm-mapping",
    category: "Networking",
    title: "Network & PC Mapping using Virtual Machines",
    description:
      "Simulated and configured complex local network topologies using Virtual Machines (VMs) to perform accurate network discovery, IP routing configurations, and security validations.",
    longDescription:
      "Designed and constructed virtualized network topologies to simulate secure corporate networks. Set up multiple operating systems (Windows Server, Linux, Windows Client) inside a hypervisor, mapped the virtual network infrastructure, configured static/dynamic routing, and validated end-to-end connection flow. Includes a full video walkthrough demonstrating connectivity mapping and configuration steps.",
    tags: ["Virtual Machines", "Network Mapping", "VMware / VirtualBox", "Routing", "PC Discovery"],
    image: "/images/Pc-mapping.png",
    demoUrl: "https://drive.google.com/file/d/1AnMSGJoBm0Al-PFpOf9f8pXyRkUCl7KI/view?usp=drive_link",
    githubUrl: null,
    featured: true,
  },
  {
    id: "net-kali-vm",
    category: "Networking",
    title: "Kali Linux Penetration Testing & Virtual Networking Lab",
    description:
      "Configured and deployed a secure virtual environment to run Kali Linux, performing network penetration testing, vulnerability assessments, and traffic analysis.",
    longDescription:
      "Designed and implemented a virtualized security sandbox using VMware/VirtualBox to host a Kali Linux environment. Established isolated host-only networks to safely perform penetration testing, vulnerability assessments, and traffic analysis using tools like Nmap, Wireshark, and Metasploit. Configured firewalls, analyzed packet captures, and documented network vulnerabilities to validate defense-in-depth methodologies.",
    tags: ["Kali Linux", "Virtual Machines", "Penetration Testing", "Network Security", "Wireshark", "Nmap"],
    image: "/images/kaliVM.png",
    demoUrl: "#",
    githubUrl: null,
    featured: true,
  },
  // ─── MULTIMEDIA ───────────────────────────────────────────────────────────
  {
    id: "mm-hollowknight",
    category: "Multimedia",
    title: "Hollow Knight Fan Art Graphic Design",
    description:
      "A 2d pixel digital art and graphic design composition inspired by the Hollow Knight universe, utilizing creative image manipulation and color composition.",
    longDescription:
      "A highly stylized visual composite illustrating key figures and environmental themes from Hollow Knight. Focused on precise background blending, high-contrast glow filters, atmospheric lighting, and digital illustration touch-ups to capture the unique essence of the game.",
    tags: ["Graphic Design", "Pixel Art", "Compositing", "Visual Editing"],
    image: "/images/Hollowknight001.png",
    demoUrl: "/images/Hollowknight001.png",
    githubUrl: null,
    featured: true,
  },
  {
    id: "mm-tralelo",
    category: "Multimedia",
    title: "Creative Poster Design Artwork",
    description:
      "A modern layout poster concept combining custom graphics into an eye-catching visual composition.",
    longDescription:
      "A promotional poster study exploring contemporary typographic rules, grid-based layouts, and advanced texture overlays. Developed to represent professional visual media standards and aesthetic print/digital composition.",
    tags: ["Poster Design", "Typography Layout", "Visual Composition", "Color Blending"],
    image: "/images/tralelo.jpg",
    demoUrl: "/images/tralelo.jpg",
    githubUrl: null,
    featured: true,
  },
  {
    id: "mm-rotoscope-1",
    category: "Multimedia",
    title: "Rotoscope Animation Project I",
    description:
      "A frame-by-frame rotoscope animation capturing realistic human movement translated into custom artistic styling.",
    longDescription:
      "An animation project utilizing rotoscoping techniques to trace over live-action video footage. Focused on motion tracking, fluid frame transitions, line art consistency, and custom color grading to produce a stylized artistic animation.",
    tags: ["Rotoscope", "Animation", "2D Art", "Video Editing"],
    image: "/images/Rotoscope1.png",
    demoUrl: "https://drive.google.com/file/d/1Nx-jasXYwX0FaZzdozZG8tS8UsQqlxNI/view?usp=drive_link",
    githubUrl: null,
    featured: true,
  },
  {
    id: "mm-rotoscope-2",
    category: "Multimedia",
    title: "Rotoscope Animation Project II",
    description:
      "A stylized frame-by-frame animation showcasing expressive character movement and visual compositing.",
    longDescription:
      "The second installment of the rotoscope animation series, exploring abstract artistic layers, dynamic lighting effects, and clean hand-drawn strokes overlaid on captured video flows.",
    tags: ["Rotoscope", "Animation", "Digital Art", "Video Editing"],
    image: "/images/Rotoscope2.png",
    demoUrl: "https://drive.google.com/file/d/17kHSCKKrhOB9KCr2sq83wQE1oMTo3rFD/view?usp=drive_link",
    githubUrl: null,
    featured: true,
  },
  {
    id: "mm-alert",
    category: "Multimedia",
    title: "Alert Graphic Composition",
    description:
      "A creative graphic artwork blending custom lighting, textures, and illustration filters into an atmospheric composition.",
    longDescription:
      "An advanced digital compositing piece exploring contrast, lighting, and illustration textures. Focused on detailed color balancing, texturing layers, and layout styling to build an engaging visual poster asset.",
    tags: ["Graphic Design", "Digital Compositing", "Illustration", "Visual Art"],
    image: "/images/Alert.jpg",
    demoUrl: "/images/Alert.jpg",
    githubUrl: null,
    featured: true,
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

export const categories = ["Programming", "Networking", "Multimedia", "Quality Assurance", "Certificate", "Awards and Honor"]
