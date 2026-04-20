const portfolioData = {
  profile: {
    name: 'Kavitha R',
    role: 'AI & Full-Stack Developer',
    tagline: 'Crafting Digital Masterpieces',
    summary:
      'AI and Full-Stack Developer with MERN stack and FastAPI expertise, building scalable AI-driven applications with strong API design and end-to-end product ownership.',
    location: 'Tamil Nadu, India',
    yearsExperience: '2+ Years',
    projectsDelivered: '8+ Projects',
    resumeUrl: '/Kavitha_resume.pdf',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/kavi-05' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kavitha-r-617426a/' },
      { label: 'Email', href: 'mailto:kavitharajan005@gmail.com' },
    ],
    careerObjective:
      'Seeking to build innovative, high-performance software by combining full-stack engineering with practical AI integrations including LLM, STT, and TTS systems.',
    education: [
      {
        degree: 'B.Tech Information Technology',
        institution: 'Karpagam College of Engineering',
        duration: 'Nov 2022 - Mar 2026',
        score: 'CGPA: 8.15',
      },
      {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Vijayalakshmi Matric. Hr Sec School',
        duration: 'Jun 2021 - Mar 2022',
        score: 'Percentage: 81.03%',
      },
      {
        degree: 'Secondary School Leaving Certificate (SSLC)',
        institution: 'Vijayalakshmi Matric. Hr Sec School',
        duration: 'Jun 2019 - Mar 2020',
        score: 'Percentage: 79.03%',
      },
    ],
    certifications: [
      'Object Oriented Programming in Java with Data Structures - AICTE (Feb 2023)',
      'Java - IIT Spoken Tutorial (May 2024)',
      'Introduction to Machine Learning - NPTEL (Jul 2024 - Oct 2024)',
    ],
    achievements: [
      'Consistently maintained 8.0+ CGPA while managing internships and project delivery.',
      'Recognized for building end-to-end AI-integrated applications at Prayag.ai.',
      'Improved API response time by 30% and supported 99% uptime in production services.',
    ],
  },
  navigation: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
  experiences: [
    {
      id: 1,
      title: 'AI Developer Intern',
      company: 'Prayag.ai',
      duration: 'Jun 2025 - Present',
      techStack: ['FastAPI', 'LLM', 'Deepgram STT', 'TTS APIs', 'Twilio', 'LiveKit SIP'],
      highlights: [
        'Developing a conversational Business Development Agent by integrating LLM workflows with speech-to-text and text-to-speech services.',
        'Engineered end-to-end call handling by connecting Twilio and LiveKit SIP trunks for real-time inbound and outbound calls.',
        'Built backend orchestration flows in FastAPI for reliable conversation state management and AI response delivery.',
      ],
    },
    {
      id: 2,
      title: 'MERN Developer',
      company: 'Freelance Marketplace Project',
      duration: 'Jan 2025 - Apr 2025',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      highlights: [
        'Developed role-based dashboards connecting freelancers and clients for smoother task and profile management.',
        'Enabled secure login via username or email with JWT-based authentication and authorization.',
        'Created and optimized REST APIs, improving server response time by 30%.',
        'Maintained stable API behavior with reliability near 99% uptime for client data services.',
      ],
    },
  ],
  skillGroups: [
    {
      name: 'Languages',
      items: ['C', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Frameworks & Libraries',
      items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Bootstrap'],
    },
    {
      name: 'AI & Voice Integrations',
      items: ['LLM Integration', 'Deepgram STT', 'TTS APIs', 'Twilio', 'LiveKit SIP'],
    },
    {
      name: 'Databases',
      items: ['MongoDB', 'SQL', 'Postgres'],
    },
    {
      name: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Eclipse'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Freelance Marketplace',
      role: 'Full-Stack Developer',
      period: 'Jan 2025 - Apr 2025',
      description:
        'A MERN-based platform connecting freelancers and clients through role-based workflows and secure identity controls.',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      highlights: [
        'Built role-specific dashboards for clients and freelancers to improve workflow clarity.',
        'Implemented authentication using username/email + JWT token strategy.',
        'Optimized API performance and improved response speed by around 30%.',
      ],
      liveUrl: '#',
      sourceUrl: 'https://github.com/kavi-05',
    },
    {
      id: 2,
      title: 'React Vite Book Store',
      role: 'MERN Developer',
      period: 'May 2024 - Jul 2024',
      description:
        'A full-stack book inventory application designed for efficient CRUD workflows with responsive frontend behavior.',
      stack: ['React Vite', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Engineered complete CRUD operations for book management.',
        'Integrated MongoDB for scalable data persistence and updates.',
        'Optimized backend endpoints to reduce latency and improve fetch speed.',
      ],
      liveUrl: '#',
      sourceUrl: 'https://github.com/kavi-05',
    },
    {
      id: 3,
      title: 'Conversational Business Development Agent',
      role: 'AI Developer Intern Project',
      period: 'Jun 2025 - Present',
      description:
        'An AI voice agent solution that handles real-time business calls using LLM orchestration and telephony integrations.',
      stack: ['FastAPI', 'LLM', 'Deepgram STT', 'TTS APIs', 'Twilio', 'LiveKit SIP'],
      highlights: [
        'Connected real-time inbound and outbound calls through SIP infrastructure.',
        'Integrated speech recognition and voice synthesis for natural voice interactions.',
        'Implemented robust AI workflow handling for conversation continuity.',
      ],
      liveUrl: '#',
      sourceUrl: 'https://github.com/kavi-05',
    },
  ],
  contact: {
    email: 'kavitharajan005@gmail.com',
    phone: '+91 95782 38016',
    location: 'Tamil Nadu, India',
    linkedin: 'https://www.linkedin.com/in/kavitha-r-617426a/',
    github: 'https://github.com/kavi-05',
  },
}

export default portfolioData
