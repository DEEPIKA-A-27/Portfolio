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
      description: [
        "Developed a full-stack Study Group Finder platform.",
        "Implemented JWT authentication and role-based access control.",
        "Built secure and efficient backend REST APIs using Spring Boot.",
        "Integrated MySQL database with JPA and Hibernate for data management.",
        "Developed a modern, responsive UI using React and Tailwind CSS.",
        "Collaborated under Agile development practices, performing sprints and code reviews."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI Debugging Agent",
      featured: true,
      description: "An AI-powered full-stack application for automated code debugging, analysis, optimization, and learning powered by Llama 3.3 70B via Groq API. It helps developers locate bugs, refactor code, analyze time/space complexity, and prepare for interviews.",
      features: [
        "AI-Powered Code Analysis & instant explanations",
        "Interactive Coding Chat Assistant for real-time collaboration",
        "Automated Code Optimization & refactoring suggestions",
        "Advanced Bug Prediction & security vulnerability flagging",
        "Dynamic Flowchart Generation for structural visualization",
        "Time & Space Complexity estimation & tracking",
        "Technical Interview Preparation & coding challenge mode",
        "Generate & Export PDF Reports of detailed bug audits",
        "Multi-language programming support (Java, JS, Python, C++, SQL)"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Groq API", "JWT"],
      demoUrl: "https://github.com/DEEPIKA-A-27",
      githubUrl: "https://github.com/DEEPIKA-A-27"
    },
    {
      id: 2,
      title: "Study Group Finder & Collaboration Platform",
      featured: false,
      description: "A secure, full-stack platform designed for student peer communities to create, search, and manage study groups. Provides live announcements, group message feeds, course assignments, and robust security controls.",
      features: [
        "Course-wide enrollment & matching",
        "Dynamic peer discovery & invitations",
        "Public/private group access privacy scopes",
        "Real-time text chat feeds & file sharing",
        "Instant group announcements & notification pings",
        "JWT-based security authentication & role checking"
      ],
      techStack: ["React 18", "Tailwind CSS", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      demoUrl: "https://github.com/DEEPIKA-A-27",
      githubUrl: "https://github.com/DEEPIKA-A-27"
    },
    {
      id: 3,
      title: "Smart Healthcare Appointment Management System",
      featured: false,
      description: "An online healthcare portal enabling patients to schedule consultation slots with doctors across specializations, and allowing clinics to manage practitioner schedules.",
      features: [
        "Seamless patient appointment slot booking",
        "Dynamic status tracking (Pending, Approved, Completed)",
        "Advanced doctor search filtered by specialty & availability",
        "Secure patient/admin authentication and session handling",
        "Client and server-side data validation",
        "SQL injection prevention & password encryption using bcrypt"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
      demoUrl: "https://github.com/DEEPIKA-A-27",
      githubUrl: "https://github.com/DEEPIKA-A-27"
    },
    {
      id: 4,
      title: "EduPilot AI",
      featured: false,
      description: "An AI-powered academic dashboard and mentorship engine designed to support personalized learning paths, study schedules, and career guidance for college undergraduates.",
      features: [
        "Rich-text markdown notes management & caching",
        "Intelligent study planning & calendar scheduling",
        "Career trajectory prediction based on academic records",
        "Integrated AI Virtual Mentor bot for course help"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Python", "Transformers"],
      demoUrl: "https://github.com/DEEPIKA-A-27",
      githubUrl: "https://github.com/DEEPIKA-A-27"
    },
    {
      id: 5,
      title: "Smart Expense Tracker",
      featured: false,
      description: "A personal finance tool that tracks earnings, categorizes expenses, generates budget limits, and provides visual charts representing financial analytics.",
      features: [
        "Flexible expense categorization & merchant tagging",
        "Real-time budget restriction alerts",
        "Interactive graphical analytics dashboards",
        "User account authentication & data privacy",
        "Exportable monthly financial transaction summaries"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JavaScript"],
      demoUrl: "https://github.com/DEEPIKA-A-27",
      githubUrl: "https://github.com/DEEPIKA-A-27"
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
