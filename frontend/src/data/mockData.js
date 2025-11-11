export const portfolioData = {
  personal: {
    name: "TEJA CHALIKANTI",
    title: "Software Engineer",
    tagline: "Building scalable systems and AI-powered solutions",
    email: "chalikantiteja@gmail.com",
    phone: "+1 716-228-9739",
    linkedin: "https://linkedin.com/in/teja-chalikanti",
    github: "https://github.com/tejachalikanti",
    about: "Software Engineer with expertise in full-stack development, AI/ML integration, and cloud infrastructure. Currently pursuing Master's in Computer Science at University at Buffalo. Experienced in building scalable backend systems, intelligent applications, and optimizing performance for enterprise solutions."
  },
  
  experience: [
    {
      id: 1,
      company: "PM Accelerator (Trulmate.ai)",
      role: "Software Engineer Intern",
      location: "Miami, Florida",
      duration: "June 2025 – August 2025",
      techStack: ["Python", "FastAPI", "Firebase", "LangChain", "OpenAI", "Firestore", "React", "Whisper", "Google Cloud"],
      highlights: [
        "Designed and implemented secure authentication system with Firebase supporting multiple social providers",
        "Developed core travel services including SOS detection, weather API, and calendar sync features",
        "Built AI assistant using LangChain + OpenAI with conversation memory in Firestore",
        "Delivered multi-modal features: Text-to-Speech, Speech-to-Text, image translation, and currency conversion"
      ]
    },
    {
      id: 2,
      company: "Doctorite.ai",
      role: "Software Engineer",
      location: "Hyderabad, India",
      duration: "January 2024 – July 2024",
      techStack: ["Python", "FastAPI", "PostgreSQL", "BigQuery", "S3", "Twilio", "React", "HIPAA Compliance"],
      highlights: [
        "Reduced support needs by implementing Client Portal with scheduling and secure S3-backed assessments",
        "Built AI session assistant logging Q&A to BigQuery with context preservation",
        "Increased provider capacity by 12% through automated SOAP/progress notes",
        "Developed HIPAA-compliant telehealth features with Twilio"
      ]
    },
    {
      id: 3,
      company: "Valuelabs",
      role: "Software Engineer Specialist",
      location: "Hyderabad, India",
      duration: "November 2022 – November 2023",
      techStack: ["AWS", "EC2", "EMR", "Lambda", "SQS", "S3", "Spark", "Python", "SQL"],
      highlights: [
        "Built ETL pipelines with EC2, EMR, Lambda, and SQS, reducing S3 costs by 30%",
        "Optimized Spark performance on EMR through AQE and data skew handling",
        "Improved chat performance, cutting p95 response time from 3.4s to 1.2s",
        "Increased CSAT by 9% and lowered session drop-offs by 21%"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "AI-Powered Job Application Assistant",
      description: "Comprehensive platform that helps job seekers optimize their applications using AI-driven insights. Features resume analysis, job description matching, and personalized answer generation.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "LangChain", "OpenAI"],
      highlights: [
        "Backend architecture with FastAPI and PostgreSQL deployed on Render",
        "React frontend with resume scoring dashboards and profile management",
        "AI agents for resume parsing and personalized answer generation"
      ],
      github: "https://github.com/tejachalikanti/ai-job-assistant",
      demo: null
    },
    {
      id: 2,
      title: "AI Personal Companion",
      description: "Privacy-first AI companion that processes documents and voice memos locally. Enables secure RAG-based query answering without sending data to external servers.",
      technologies: ["FastAPI", "LangChain", "Ollama", "Whisper", "ChromaDB", "React"],
      highlights: [
        "Local LLM integration with Ollama for privacy-first processing",
        "Whisper integration for speech-to-text conversion",
        "ChromaDB vector search for intelligent document querying"
      ],
      github: "https://github.com/tejachalikanti/ai-companion",
      demo: null
    }
  ],
  
  skills: {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL", "HTML/CSS"],
    "Backend & APIs": ["FastAPI", "Flask", "REST", "JWT/OAuth2", "Firebase Auth", "WebSockets"],
    "Frontend & UI": ["React", "Redux", "Tailwind CSS"],
    "Databases & Storage": ["PostgreSQL", "MongoDB", "Firestore", "ChromaDB", "Redis"],
    "Cloud & DevOps": ["AWS", "GCP", "Firebase", "Render", "Docker", "CI/CD", "GitHub Actions"],
    "AI/LLM": ["LangChain", "OpenAI", "Ollama", "Whisper", "RAG"],
    "CS Fundamentals": ["Data Structures", "Algorithms", "OOP", "Design Patterns"]
  },
  
  education: [
    {
      id: 1,
      institution: "University at Buffalo - SUNY",
      degree: "Master's in Computer Science",
      location: "Buffalo, NY",
      duration: "August 2024 - December 2025",
      gpa: "3.6/4.0"
    },
    {
      id: 2,
      institution: "Guru Nanak Institutions Technical Campus",
      degree: "Bachelor of Technology in Computer Science",
      location: "Hyderabad, India",
      duration: "August 2019 - July 2023",
      gpa: "9.01/10.0"
    }
  ]
};
