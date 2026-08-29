// Site content. Hardcoded here (design.md §9 #2 — no CMS/MDX for now).
// Swap the copy freely; the section components read only from these arrays.

export type SkillGroup = {
  num: string;
  label: string;
  note: string;
  items: string[];
};

export type Experience = {
  period: string;
  location: string;
  title: string;
  desc: string;
  /** Photo shown beside the text. Raw path under /public. Optional. */
  image?: string;
};

export type Certification = {
  num: string;
  year: string;
  issuer: string;
  title: string;
  blurb: string;
  tags: string[];
  /** Photo shown on the card. Omit to fall back to a neutral placeholder —
   *  use that when the scan carries data you would rather not put on display. */
  image?: string;
  /** Set for portrait scans so the whole certificate stays visible. */
  fit?: "cover" | "contain";
  /** What the card opens — the credential page, or the document itself. */
  href: string;
};

export type Project = {
  num: string;
  year: string;
  client: string;
  title: string;
  blurb: string;
  tags: string[];
  detailHref: string;
  repo: string;
};

export const skillGroups: SkillGroup[] = [
  {
    num: "01",
    label: "Technical",
    note: "Languages, frameworks and infrastructure I work in day to day.",
    items: [
      "PHP (Laravel, CodeIgniter)",
      "JavaScript (React JS, jQuery, TypeScript, Angular)",
      "Next.js",
      "HTML",
      "CSS (Tailwind CSS, Bootstrap)",
      "Framer Motion",
      "Vite",
      "RESTful API",
      "FastAPI",
      "Database Management",
      "Git",
      "Linux",
      "Docker",
      "Kubernetes",
      "Microservices",
      "Cloudflare (D1, R2)",
      "Golang",
      "Unreal Engine",
    ],
  },
  {
    num: "02",
    label: "Non-technical",
    note: "How I work when the code is only half the problem.",
    items: [
      "Effective in a team and on my own",
      "Strong communication",
      "Fast learner — picked up Python from scratch mid-internship",
      "Adaptable when the stack or the scope shifts",
      "Comfortable taking on unfamiliar work",
    ],
  },
];


export const experiences: Experience[] = [
  {
    period: "May 2026 — Aug 2026",
    location: "Jakarta",
    title: "PT Nose Herbal Indo",
    desc: "Fullstack web developer intern — a realtime social-media tracking dashboard, plus a CMS wired by API to two landing pages with media on Cloudflare R2.",
    image: "/Nose Infant AI.jpeg",
  },
  {
    period: "Jul 2025 — Apr 2026",
    location: "Depok",
    title: "PT Inovasi Inti Digital",
    desc: "Fullstack web developer intern — emergency call intake and ambulance dispatch tracking for an AGD system, and accounting modules covering the general ledger, transactions and period-end closing.",
    image: "/Inti Digital.jpeg",
  },
  {
    period: "2023 — 2025",
    location: "Bogor",
    title: "NEVTIK",
    desc: "Web developer — the school site front-end in React JS and Tailwind CSS, and the Web Development material taught in the academy sessions.",
    image: "/nevtik.jpeg",
  },
];


export const certifications: Certification[] = [
  {
    num: "01",
    year: "2024",
    issuer: "Adinusa",
    title: "Linux System Administration",
    blurb:
      "Server administration, permissions, services and troubleshooting on Linux — the base under every deploy I own.",
    tags: ["Linux", "Bash", "systemd"],
    image: "/certificate.jpg",
    href: "https://adinusa.id/course/publisher/show/396d119c-278c-48c9-ae3e-5cb21819dd0e",
  },
  {
    num: "02",
    year: "2025",
    issuer: "Adinusa",
    title: "Docker Fundamental",
    blurb:
      "Containerising apps — images, volumes and service networking — until a rerun no longer depends on my machine.",
    tags: ["Docker", "Compose", "Registry"],
    image: "/Docker.png",
    href: "https://adinusa.id/course/publisher/show/e1f88cc0-7703-4ddd-81ae-91371a78e221",
  },
  {
    num: "03",
    year: "2025",
    issuer: "Adinusa",
    title: "Automation with Ansible",
    blurb:
      "Repeatable server provisioning and configuration through playbooks — a server becomes code, not memory.",
    tags: ["Ansible", "Playbook", "Idempotency"],
    image: "/certificate.png",
    href: "https://adinusa.id/course/publisher/show/c2023c63-9b56-45e9-b435-85df35bbf95b",
  },
  {
    num: "04",
    year: "2024",
    issuer: "Red Hat",
    title: "Application Development I: Programming in Java EE",
    blurb:
      "Red Hat course AD183 — building and deploying Java EE applications on an enterprise application server.",
    tags: ["Java EE", "Red Hat", "AD183"],
    image: "/java Certification.png",
    href: "/Certificate of Attendance (AD183-7.0).pdf",
  },
  {
    num: "05",
    year: "2024",
    issuer: "Digital Talent Scholarship — Kominfo",
    title: "Basic Cyber Security untuk Siswa SMA/Sederajat",
    blurb:
      "Thematic Academy, 12 training hours — incident reporting, UU ITE and UU PDP, and the policy side of keeping systems safe.",
    tags: ["Cyber Security", "UU PDP", "Thematic Academy"],
    image: "/Komdigi Certif.png",
    href: "/Sertifikat_NADINE AMBRIANI KHOIRUNISSA_Basic Cyber Security untuk Siswa SMA_Sederajat.pdf",
  },
  {
    num: "06",
    year: "2025",
    issuer: "Cisco Networking Academy",
    title: "Introduction to Modern AI",
    blurb:
      "How modern AI systems are built and where they break — the vocabulary behind the tools everyone now ships with.",
    tags: ["AI", "Cisco", "Networking Academy"],
    image: "/CNA intro AI.png",
    href: "/Introduction_to_Modern_AI_certificate_ambrianirunissa-gmail-com_6f9e0426-a5b3-4ef2-89ca-c4fa4f7b7657.pdf",
  },
  {
    num: "07",
    year: "2025",
    issuer: "Telkom DigiUp",
    title: "Digital Officer With AI",
    blurb:
      "Telkom DigiUp certification programme — applying artificial intelligence to day-to-day digital operations. Graded Certified.",
    tags: ["AI", "Telkom DigiUp", "Certified"],
    image: "/Digiup Certif.png",
    href: "/3bc2d01e-16b7-4725-b04e-c7dab8e0f4e9.pdf",
  },
  {
    num: "08",
    year: "2023",
    issuer: "Politeknik IDN",
    title: "Mahasiswa IDN Mengajar — UI/UX Design",
    blurb:
      "UI/UX design training run by Politeknik IDN — building mockups, and colour wheel theory behind choosing a palette.",
    tags: ["UI/UX", "Mockup", "Colour theory"],
    image: "/Certification IDN.jpeg",
    href: "/Certification IDN.jpeg",
  },
  {
    num: "09",
    year: "2026",
    issuer: "BNSP — LSP SMKN 1 Cibinong",
    title: "Sertifikat Kompetensi — Jaringan Komputer",
    blurb:
      "National competency certification: KKNI Level III for Information Systems, Networks and Applications. Issued April 2026, valid three years.",
    tags: ["Computer Network", "KKNI Level III", "BNSP"],
    // No preview: the scan shows the certificate and registration numbers.
    // Drop a logo at /bnsp-logo.png and set `image` to it to show one.
    href: "/BNSP CERTIFICATION.pdf",
  },
];


export const projects: Project[] = [
  {
    num: "01",
    year: "2025",
    client: "SMKN 1 Cibinong",
    title: "AstroLens",
    blurb:
      "Built a full-stack library management web application for SMKN 1 Cibinong, digitizing the entire school library operation from book cataloging, borrowing/return circulation, member administration, to automated reporting.",
    tags: ["Laravel", "MySQL", "Tailwind", "JWT Auth", "PostgreSQL", "API Integration"],
    detailHref: "#",
    repo: "https://github.com/ambrianidin",
  },
  {
    num: "02",
    year: "2026",
    client: "-",
    title: "Portofolio Website",
    blurb:
      "Personal portfolio site with scroll-driven animations and a pinned project showcase the page you're looking at right now.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    detailHref: "#",
    repo: "https://github.com/ambrianidin/my-portofolio",
  }
];

export const contact = {
  email: "nadambriani@gmail.com",
  linkedin: "https://linkedin.com/in/dinebriani/",
  github: "https://github.com/ambrianidin",
};
