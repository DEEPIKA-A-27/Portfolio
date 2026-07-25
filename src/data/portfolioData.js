export const portfolioData = {
  personalDetails: {
    name: "DEEPIKA A",
    title: "Full Stack Java Developer | AI Enthusiast | Software Engineer",
    email: "skadeepika@gmail.com",
    github: "https://github.com/DEEPIKA-A-27",
    linkedin: "https://linkedin.com/in/deepika-a-209704331",
    education: {
      degree: "B.Tech Information Technology",
      college: "V.S.B Engineering College",
      cgpa: "8.12"
    },
    location: "Dindigul, Tamil Nadu, India",
    resumeUrl: "#" // Placeholder or trigger download
  },

  about: {
    summary: "I am a passionate Information Technology student specializing in Full Stack Development and Artificial Intelligence. I enjoy building scalable web applications, AI-powered solutions, and solving real-world problems using Java, Spring Boot, React, and modern web technologies.",
    stats: [
      { id: "projects", label: "Projects Completed", value: "8+", number: 8 },
      { id: "leetcode", label: "LeetCode Solved", value: "100+", number: 100 },
      { id: "tech", label: "Technologies Mastered", value: "5+", number: 5 },
      { id: "certs", label: "Certifications", value: "10+", number: 10 },
      { id: "badges", label: "Badges Earned", value: "15+", number: 15 },
      { id: "internship", label: "Internships", value: "3", number: 3 }
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["Java","Python"]
    },
    {
      category: "Frontend WebTechnologies",
      items: ["React", "Tailwind CSS", "Bootstrap", "Vite","HTML","Javascript"]
    },
    {
      category: "Backend WebTechnologies",
      items: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Database",
      items: ["MySQL","MongoDB"]
    },
    {
      category: "AI",
      items: ["Groq API", "Prompt Engineering", "Llama 3", "Generative AI"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
    }
  ],

  experience: [
    {
      company: "Infosys Springboard",
      role: "Full Stack Development Intern",
      period: "Sep 2025 - Nov 2025",
      techTags: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "JWT", "REST APIs"],
      description: [
        "Developed a full-stack Study Group Finder platform.",
        "Implemented JWT authentication and role-based access control.",
        "Built secure and efficient backend REST APIs using Spring Boot.",
        "Integrated MySQL database with JPA and Hibernate for data management.",
        "Developed a modern, responsive UI using React and Tailwind CSS.",
        "Collaborated under Agile development practices, performing sprints and code reviews."
      ]
    },
    {
      company: "Brainery Spot Technology",
      role: "Full Stack Web Development Intern",
      period: "1 Month",
      techTags: ["HTML", "CSS", "JavaScript", "Node.js", "REST APIs", "MySQL"],
      description: [
        "Built and deployed full-stack web applications using modern technologies.",
        "Developed responsive frontend interfaces with HTML, CSS, and JavaScript.",
        "Designed and integrated RESTful backend APIs.",
        "Worked with databases for data storage and retrieval.",
        "Gained hands-on experience in end-to-end web application development."
      ]
    },
    {
      company: "Appin Technology",
      role: "Full Stack Web Development Intern",
      period: "1 Month",
      techTags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "REST APIs"],
      description: [
        "Developed full-stack web solutions as part of the internship program.",
        "Implemented frontend features using HTML, CSS, JavaScript frameworks.",
        "Created and consumed RESTful APIs for backend communication.",
        "Collaborated with the development team on real-world client projects.",
        "Strengthened understanding of the complete software development lifecycle."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI Debugging Agent",
      featured: true,
      description: "An AI-powered full-stack web application for automated code debugging, analysis, optimization, and learning — powered by Groq LLM (Llama 3.3 70B). Supports 10 programming languages and 10 UI languages with a live deployed demo.",
      features: [
        "AI Code Analysis — syntax errors, logical bugs, and security flaws",
        "AI Chat Assistant with 7 modes: Chat, Explain, Test Cases, Optimize, Complexity, Bug Predict, Interview",
        "10 Programming Languages — Java, Python, C++, JS, C#, TypeScript, Go, Rust, Swift, Kotlin",
        "Code Translation — convert code between any 2 languages",
        "Flowchart Generator — visual flowchart from code structure",
        "Debug History — searchable and filterable analysis history",
        "PDF Reports — download full analysis as PDF",
        "Dashboard with stats, charts, and recent activity",
        "Dark / Light Theme & User Settings"
      ],
      techStack: ["React 18", "Vite", "Tailwind CSS", "Monaco Editor", "Node.js", "Express.js", "MySQL", "Groq API", "JWT"],
      demoUrl: "https://debugging-agent.vercel.app",
      githubUrl: "https://github.com/DEEPIKA-A-27/DebuggingAgent"
    },
    {
      id: 2,
      title: "Study Group Finder & Collaboration Platform",
      featured: false,
      description: "A modern full-stack platform for students to connect with peers in the same courses, form study groups, and collaborate using built-in communication and productivity tools.",
      features: [
        "JWT-based login/registration with password hashing via Spring Security",
        "Email-based password reset and session management",
        "Full user profile management with avatar upload and academic details",
        "Course browsing, enrollment, and peer tracking",
        "Create and manage public/private study groups with member approvals",
        "Real-time chat, group messaging, and direct messaging",
        "Calendar scheduling with email/push event reminders",
        "Group calendar integration and study session planner"
      ],
      techStack: ["React 18", "Vite", "Tailwind CSS", "Spring Boot 3", "Spring Security", "JWT", "MySQL", "Gmail SMTP"],
      demoUrl: "https://github.com/DEEPIKA-A-27/Study-Group-Finder",
      githubUrl: "https://github.com/DEEPIKA-A-27/Study-Group-Finder"
    },
    {
      id: 3,
      title: "Smart Healthcare Appointment Management System",
      featured: false,
      description: "A full-stack web application for managing healthcare appointments, enabling patients to register, browse doctors by specialization, book slots, and track appointment status.",
      features: [
        "Patient registration and JWT-based authentication",
        "Doctor management with specialization and qualification details",
        "Appointment booking with date, time, and symptoms input",
        "Dynamic status tracking — Pending, Approved, Completed, Cancelled",
        "Doctor search and filter by specialization",
        "Password hashing with bcrypt and SQL injection prevention",
        "RESTful API with full CRUD for patients, doctors, and appointments",
        "Responsive frontend with vanilla HTML, CSS, and JavaScript"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
      demoUrl: "https://github.com/DEEPIKA-A-27/smart-healthcare-appointment-system",
      githubUrl: "https://github.com/DEEPIKA-A-27/smart-healthcare-appointment-system"
    },
    {
      id: 4,
      title: "EduPilot AI",
      featured: false,
      description: "An AI-powered educational platform helping students manage study notes, plan sessions, predict career paths, and get real-time academic guidance through an AI assistant.",
      features: [
        "Dashboard with overview of user activities and progress",
        "Notes management — create, edit, and organize study notes",
        "Study Planner — schedule and track study sessions",
        "Career Predictor — AI-driven recommendations based on interests and skills",
        "AI Assistant — chat interface for academic help and queries",
        "User profile with full edit capabilities and academic details",
        "Python AI services with Transformers for intelligent predictions",
        "MySQL-backed persistence with Node.js and Express REST APIs"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Python", "Transformers"],
      demoUrl: "https://github.com/DEEPIKA-A-27/EduPilot-AI",
      githubUrl: "https://github.com/DEEPIKA-A-27/EduPilot-AI"
    },
    {
      id: 5,
      title: "Smart Expense Tracker",
      featured: false,
      description: "A personal finance tool that tracks earnings and expenses, categorizes spending, sets budget limits, and displays interactive financial analytics charts.",
      features: [
        "Flexible expense categorization and merchant tagging",
        "Real-time budget restriction alerts",
        "Interactive graphical analytics dashboards",
        "User authentication and data privacy",
        "Exportable monthly financial transaction summaries",
        "Full-stack with Java backend and JavaScript frontend"
      ],
      techStack: ["JavaScript", "HTML", "CSS", "Java", "Node.js", "MySQL"],
      demoUrl: "https://github.com/DEEPIKA-A-27/smart-expense-tracker",
      githubUrl: "https://github.com/DEEPIKA-A-27/smart-expense-tracker"
    },
    {
      id: 6,
      title: "Guess the Number Game",
      featured: false,
      description: "A console-based Java game where the program randomly selects a number between 1 and 100. The player guesses until they get it right, with high/low hints after each attempt.",
      features: [
        "Random number generation between 1 and 100",
        "Interactive console input with real-time hints",
        "High / Low feedback after every guess",
        "Tracks and displays total number of attempts",
        "Clean Java OOP design, no external dependencies"
      ],
      techStack: ["Java"],
      demoUrl: "https://github.com/DEEPIKA-A-27/GuessGame-",
      githubUrl: "https://github.com/DEEPIKA-A-27/GuessGame-"
    },
    
    {
      id: 7,
      title: "Portfolio Website",
      featured: false,
      description: "This very portfolio — a modern, editorial-style React application with a vertical sidebar navigation, violet-themed design, animated sections, and full dark/light mode support.",
      features: [
        "Editorial sidebar navigation with section spy scroll tracking",
        "Animated Hero with typewriter role cycling and floating stat badges",
        "Interactive Skills tab panel with per-category color coding",
        "Filterable Projects grid with expandable feature lists",
        "Animated About section with spring-physics number counters",
        "Certifications with marquee issuer strip and hover accents",
        "Contact form with validation and confetti on submit",
        "Full dark / light theme toggle with localStorage persistence"
      ],
      techStack: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Lucide React"],
      demoUrl: "https://github.com/DEEPIKA-A-27/Portfolio",
      githubUrl: "https://github.com/DEEPIKA-A-27/Portfolio"
    }
  ],

  certifications: [
    { title: "Data Science for Engineers", issuer: "NPTEL (Elite Certificate)", date: "2024" },
    { title: "Programming in Java", issuer: "NPTEL (Elite Certificate)", date: "2024" },
    { title: "Java Foundation Certification", issuer: "Infosys Springboard", date: "2025" },
    { title: "Agentforce Service Superbadge", issuer: "Salesforce Trailhead", date: "2025" },
    { title: "Educate Graduate Certifications", issuer: "AWS (Amazon Web Services)", date: "2024" },
    { title: "Network Academy Certifications", issuer: "Cisco", date: "2024" },
    { title: "Generative AI Fluency", issuer: "NASSCOM", date: "2025" }
  ],

  achievements: [
    { title: "Projects Built", value: "8+", subtext: "Full-stack & AI applications" },
    { title: "Academic Stat", value: "8.12", subtext: "Cumulative CGPA at V.S.B" },
    { title: "Coding Skills", value: "100+", subtext: "Data structure challenges solved" },
    { title: "Certifications", value: "10+", subtext: "Professional certificates earned" },
    { title: "Badges", value: "15+", subtext: "Trailhead, AWS & platform badges" }
  ]
};
