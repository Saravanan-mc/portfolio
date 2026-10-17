<<<<<<< HEAD
// ==============================
// PREVENT UNWANTED AUTO-SCROLL ON RELOAD
// ==============================

// Disable browser automatic scroll restoration on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Remove anchor hash on reload so browser doesn't automatically jump down to sections
if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
}

// Reset scroll to top immediately
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
});

// ==============================
// PROJECTS DATA
// ==============================

const allProjects = [
    // 🏆 Top Projects — 4 Links
    {
        title: "MediPulse — Real-Time Emergency Medical Dispatch & Hospital Triage System",
        description: "A real-time emergency healthcare coordination platform connecting patients, ambulance drivers, and hospitals with GPS emergency SOS, live map tracking, siren alerts, and hospital triage coordination.",
        category: "Full-stack",
        tags: [
            "Node.js",
            "Express.js",
            "Socket.IO",
            "JavaScript",
            "Leaflet.js",
            "OpenStreetMap",
            "Web Audio API",
            "Web Speech API"
        ],
        imageUrl: "assets/medipulse.jpg",
        demoUrl: "https://medipulse-bice.vercel.app/",
        githubUrl: "https://github.com/Saravanan-mc/MediPulse",
        youtubeUrl: "https://youtu.be/OiDe0czkCpc",
        figmaUrl: ""
    },
    {
        title: "SecureVideoCall — Privacy-Focused Real-Time WebRTC Video Calling Platform",
        description: "A video-calling platform focused on private communication and real-time connectivity with screenshot detection, privacy mode, and live alerts for secure peer-to-peer conversations.",
        category: "Full-stack",
        tags: [
            "Node.js",
            "WebRTC",
            "Socket.IO",
            "WebSockets",
            "Real-Time",
            "Privacy",
            "Video Calling"
        ],
        imageUrl: "assets/secure_video_call.png",
        demoUrl: "https://securevideocall-1.onrender.com/",
        altDemoUrl: "https://securevideocall-u1h3.vercel.app/",
        githubUrl: "https://github.com/Saravanan-mc/SecureVideoCall",
        youtubeUrl: "https://youtu.be/DHzKb4a22s0",
        figmaUrl: ""
    },

    // 🥇 Projects — 3 Links
    {
        title: "Voice2SQL — AI-Powered Voice to SQL Interactive Learning System",
        description: "An interactive SQL learning platform that combines voice-based interaction with 3D educational experiences to make database concepts intuitive and engaging.",
        category: "Full-stack",
        tags: [
            "AI",
            "Three.js",
            "Voice Recognition",
            "NLP",
            "MySQL",
            "Web Speech API"
        ],
        imageUrl: "assets/voice2sql_ai.png",
        demoUrl: "https://sql3d.netlify.app/",
        githubUrl: "https://github.com/Saravanan-mc/3DSQLAndvoice-AI",
        youtubeUrl: "https://www.youtube.com/watch?v=OBVYPBtzKIo",
        figmaUrl: ""
    },
    {
        title: "CryptChat — Real-Time Encrypted Messaging & WebRTC Video Calling System",
        description: "A real-time communication application that combines messaging and video calling with security-focused features, SHA-256 hashing, private chat rooms, and live user tracking.",
        category: "Full-stack",
        tags: [
            "Node.js",
            "Express",
            "Socket.IO",
            "WebRTC",
            "Real-Time",
            "WebSockets",
            "SHA-256"
        ],
        imageUrl: "assets/cryptchat_secure_messaging.png",
        demoUrl: "https://chatapp-1-k7bk.onrender.com/",
        githubUrl: "https://github.com/Saravanan-mc/Secure_Real_Time_Chat-Video_Calling_System",
        youtubeUrl: "https://www.youtube.com/watch?v=qm2YDFmimRY",
        figmaUrl: ""
    },
    {
        title: "GameSpace — Interactive Web Arcade & Browser Games Collection",
        description: "A browser-based gaming and mini-application collection that brings multiple interactive experiences and lightweight tools together in one place.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "Games", "Interactive Web"],
        imageUrl: "assets/gamespace_arcade.png",
        demoUrl: "https://saravapps.neocities.org/appsapce/apps",
        githubUrl: "https://github.com/Saravanan-mc/Game-Space",
        youtubeUrl: "https://youtu.be/HBmOHeb1vQE",
        figmaUrl: ""
    },
    {
        title: "Mindful Paths — Mental Health & Wellness Web Companion",
        description: "A wellness-focused web application designed to encourage mindfulness and personal well-being through a calm, user-friendly digital experience and emotional support.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "Wellness", "Mindfulness", "AI"],
        imageUrl: "assets/mindful_paths_wellness.png",
        demoUrl: "https://wellnessl.netlify.app/",
        githubUrl: "https://github.com/Saravanan-mc/wellness",
        youtubeUrl: "https://youtu.be/5KWmtJobHoQ",
        figmaUrl: ""
    },
    {
        title: "BrowserApps — Lightweight Browser-Based Mini Application Hub",
        description: "A collection of browser-accessible mini-applications and interactive web experiences built around the Game Space project delivering instant app access without installation.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "Mini Apps", "Browser-Based"],
        imageUrl: "assets/browser_apps_hub.png",
        demoUrl: "https://saravapps.neocities.org/appsapce/apps",
        githubUrl: "https://github.com/Saravanan-mc/Game-Space",
        youtubeUrl: "https://youtu.be/HBmOHeb1vQE",
        figmaUrl: ""
    },
    {
        title: "SpringTask — Full-Stack Spring Boot & React CRUD Todo Application",
        description: "A lightweight task-management application designed to help users organize everyday tasks with full CRUD operations, REST API integration, and Spring Boot backend.",
        category: "Full-stack",
        tags: [
            "React",
            "Spring Boot",
            "Java",
            "CRUD",
            "REST API",
            "MySQL",
            "Axios"
        ],
        imageUrl: "assets/springtask_todo_app.png",
        demoUrl: "https://springboottodo-olaf.onrender.com/",
        githubUrl: "https://github.com/Saravanan-mc/SpringbootTodo",
        youtubeUrl: "https://www.youtube.com/watch?v=3jooiT8OJI8",
        figmaUrl: ""
    },
    {
        title: "Savoria — Fine Dining Luxury Restaurant Website & Booking Platform",
        description: "A modern restaurant website designed to showcase a premium dining experience through an elegant interface, GSAP animations, menus, and reservation booking.",
        category: "Frontend",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "GSAP",
            "Swiper.js",
            "Responsive Design",
            "UI/UX"
        ],
        imageUrl: "assets/savoria_dining_restaurant.png",
        demoUrl: "https://savoriaapp.netlify.app/",
        githubUrl: "https://github.com/Saravanan-mc/Savoria",
        youtubeUrl: "https://www.youtube.com/watch?v=VYMN-PbABos",
        figmaUrl: ""
    },
    {
        title: "3D Learning Space — Interactive Three.js WebGL Educational Platform",
        description: "An interactive educational project that explores presenting learning content through an immersive three-dimensional web environment with Three.js visualizations.",
        category: "Frontend",
        tags: [
            "Three.js",
            "JavaScript",
            "3D Web",
            "WebGL",
            "EdTech",
            "Visualization"
        ],
        imageUrl: "assets/3d_learning_space.png",
        demoUrl: "https://3dlearning-beta.vercel.app/",
        githubUrl: "https://github.com/Saravanan-mc/3D_Learning",
        youtubeUrl: "https://www.youtube.com/watch?v=TObT6CWbYEA",
        figmaUrl: ""
    },
    {
        title: "Ezhuthu AI Classroom — Smart Whiteboard with Gemini AI Recognition",
        description: "An AI-powered digital notebook and whiteboard application combining freehand drawing, notes organization, and Gemini AI handwriting & math recognition with offline storage.",
        category: "Full-stack",
        tags: [
            "React",
            "TypeScript",
            "Vite",
            "Gemini AI",
            "IndexedDB",
            "Lucide React",
            "EdTech"
        ],
        imageUrl: "assets/ezhuthu.jpg",
        demoUrl: "https://ezhuthuai.netlify.app/",
        githubUrl: "https://github.com/Saravanan-mc/Ezhuthu-AI-Classroom",
        youtubeUrl: "https://youtu.be/mH7uINUxJgQ",
        figmaUrl: ""
    },

    // 🥈 Projects — 2 Links
    {
        title: "Student Ecosystem — AI-Powered Student Community & Career Platform",
        description: "A student-focused web platform designed to bring student resources, campus activities, academic support, and community mentorship together in one place.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "AI", "Community", "EdTech"],
        imageUrl: "assets/student_ecosystem.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/Student-Ecosystem",
        youtubeUrl: "https://youtu.be/utbEJc1iMkQ",
        figmaUrl: ""
    },
    {
        title: "CampusFind — Real-Time Lost & Found Campus Recovery Platform",
        description: "A web application designed to help users report lost belongings and share information about found items, making it easier to reconnect people with misplaced belongings.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        imageUrl: "assets/campus_find.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/lost-and-find",
        youtubeUrl: "https://youtu.be/1peVCLX9p70",
        figmaUrl: ""
    },
    {
        title: "Horizon Heights — Complete Residential Society Management System",
        description: "A residential society management application intended to organize community operations, resident records, and maintenance workflows through a centralized web interface.",
        category: "Full-stack",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Community Management"
        ],
        imageUrl: "assets/horizon_heights.jpg",
        demoUrl: "https://completesocietysystem.netlify.app/",
        githubUrl: "https://github.com/Saravanan-mc/Complete_Horizon_Heights_Society_Management_System",
        youtubeUrl: "",
        figmaUrl: ""
    },
    {
        title: "Society Connect — Community Platform & Native Android Mobile App",
        description: "A residential community platform designed to support communication and coordination among society members, featuring a dedicated native Android mobile application.",
        category: "Mobile App",
        tags: [
            "Android",
            "Kotlin",
            "Mobile App",
            "Community",
            "Real-Time"
        ],
        imageUrl: "assets/society_connect.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/society-connect",
        youtubeUrl: "https://youtube.com/shorts/jEhE2YFsNy8?feature=share",
        figmaUrl: ""
    },
    {
        title: "EduMetrics — Student Enrollment & Fee Analytics Power BI Dashboard",
        description: "An interactive Power BI dashboard analyzing ₹68,77,500 fee revenue, 772 students, course popularity, age demographics, and peak enrollment trends using KPI cards and visual analytics.",
        category: "Analytics",
        tags: [
            "Power BI",
            "Data Analytics",
            "DAX",
            "KPI Cards",
            "Data Visualization"
        ],
        imageUrl: "assets/student_bi.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/StudentEnrollmentAndFeeAnalyticsDashboardUsingPowerBI",
        youtubeUrl: "https://youtu.be/ALK_bXQYCOU",
        figmaUrl: ""
    },
    {
        title: "Student Manager — Kotlin Native Android Student Management App",
        description: "A student management application built as a native Android project using Kotlin, focusing on organizing student-related records, academic information, and workflows.",
        category: "Mobile App",
        tags: [
            "Android",
            "Kotlin",
            "Mobile App",
            "SQLite",
            "Student Management"
        ],
        imageUrl: "assets/student_manager.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/student-manager",
        youtubeUrl: "https://youtube.com/shorts/BOjbs9M_rO4?feature=share",
        figmaUrl: ""
    },

    // 🥉 Projects — 1 Link
    {
        title: "HLMS — Hybrid Physical & Digital Library Management System",
        description: "A library management project demonstrating the digital organization, physical and virtual cataloging, and seamless borrowing tracking of library resources.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "Library"],
        imageUrl: "assets/library_management_system.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://youtu.be/fW1DDZJ7HKM",
        figmaUrl: ""
    },
    {
        title: "ShopSphere — Full-Stack E-Commerce Website with Spring Boot & JWT",
        description: "An enterprise-grade e-commerce web project demonstrating an online shopping experience with JWT authentication, cart system, and product catalog.",
        category: "Full-stack",
        tags: [
            "React",
            "Spring Boot",
            "Java",
            "JWT",
            "REST API",
            "MySQL",
            "E-Commerce"
        ],
        imageUrl: "assets/shopsphere_ecommerce.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=WF6rrAapnsc",
        figmaUrl: ""
    },
    {
        title: "WebCraft — Collection of Frontend Mini Web Development Projects",
        description: "A collection of smaller web development projects for practicing frontend programming, interactive utility tools, DOM manipulation, and modern web concepts.",
        category: "Frontend",
        tags: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Frontend",
            "Interactive Web"
        ],
        imageUrl: "assets/mini_web.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/mini-web-projects",
        youtubeUrl: "",
        figmaUrl: ""
    },

    // 🎨 UI/UX Design Projects — Figma
    {
        title: "TripEase — Travel Booking & Trip Planner Mobile App UI/UX Design",
        description: "A travel application interface design exploring travel-related screens, layouts, and user journeys enabling seamless trip planning and accommodation reservations.",
        category: "Design",
        tags: ["Figma", "Mobile UI", "UX Design", "Travel App"],
        imageUrl: "assets/tripease_travel_app.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/rgx9ZvVSPWLw2fajhP6hvk/Trip-App"
    },
    {
        title: "AutoFinder — Automotive Vehicle Discovery & Marketplace UI/UX Design",
        description: "An automotive UI/UX design focused on vehicle discovery, smart car filtering, and smooth marketplace browsing experiences.",
        category: "Design",
        tags: ["Figma", "UI/UX", "Marketplace", "Automotive"],
        imageUrl: "assets/autofinder_marketplace.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/0Slu4H9BpPfT45m6XjTLtC/AutoFinder"
    },
    {
        title: "The Golden Spoon — Fine Dining Restaurant Mobile App UI/UX Design",
        description: "A restaurant-focused UI/UX design exploring interface layouts, menu exploration, effortless table booking, and a luxurious dining-related digital experience.",
        category: "Design",
        tags: ["Figma", "Restaurant App", "Mobile UI", "Dining"],
        imageUrl: "assets/golden_spoon_restaurant.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/GvPqqL6VjWItKjR6pZdJUt/The-Golden-Spoon"
    }
];

// ==============================
// CERTIFICATES DATA
// ==============================

const allCertificates = [
    // ==================== LEARNING & COURSES (22) ====================
    {
        id: 1,
        type: "learning",
        title: "Basics of Python",
        recipient: "Saravanan M",
        platform: "Infosys Springboard",
        instructor: "Infosys Springboard",
        date: "Jan 25, 2023",
        credential: "QR Code Verification",
        category: "Programming & Data",
        platformClass: "platform-infosys",
        platformTag: "Infosys",
        imageUrl: "assets/certificate/Learning/Basics of Python_page-0001.jpg"
    },
    {
        id: 2,
        type: "learning",
        title: "Teamwork Masterclass - Guide To Team Building & Teamwork",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Salil Dhawan",
        date: "Sept 27, 2026",
        credential: "4.5 hours (UC-b6932317-94ff-4d9c-9343-6a5d1667cf86)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Teamwork Masterclass - Guide To Team Building & Teamwork.jpg"
    },
    {
        id: 3,
        type: "learning",
        title: "Effective Communication in the Workplace",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Lecturio GmbH",
        date: "Sept 22, 2026",
        credential: "3 hours (UC-99a34d3c-e788-48f9-8342-df9919b80bf7)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Effective Communication in the Workplace.jpg"
    },
    {
        id: 4,
        type: "learning",
        title: "Master Business Writing and Editing",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Grant Hall",
        date: "Sept 25, 2026",
        credential: "3 hours (UC-a023c79b-057d-4bed-91ed-15bec326ad6b)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Master Business Writing and Editing.jpg"
    },
    {
        id: 5,
        type: "learning",
        title: "Emotional Intelligence Training: EI in the Workplace",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Ermin Dedic",
        date: "Sept 29, 2026",
        credential: "1.5 hours (UC-5c6329a0-7fc8-4087-8f04-9f054576f6d5)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Emotional Intelligence Training - EI in the Workplace.jpg"
    },
    {
        id: 6,
        type: "learning",
        title: "Master RAG: Ultimate Retrieval-Augmented Generation Course",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Sandra L. Sorel, Ligency",
        date: "Oct 7, 2026",
        credential: "5 hours (UC-456065e3-d4da-4d8c-ae53-88db742b92d7)",
        category: "AI & Generative AI",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Master RAG_Ultimate Retrieval-Augmented Generation Course.jpg"
    },
    {
        id: 7,
        type: "learning",
        title: "The Growth Mindset Blueprint: Confidence, Impact & Success",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Zubin Rashid, Career Skills Coach",
        date: "Sept 29, 2026",
        credential: "2.5 hours (UC-6b7f66f1-2f41-4de3-b52b-ba571cddebe6)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/The Growth Mindset Blueprint - Confidence, Impact, Success.jpg"
    },
    {
        id: 8,
        type: "learning",
        title: "AI Literacy Essentials: Working Responsibly with AI",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Tristan Roth",
        date: "Oct 4, 2026",
        credential: "42 mins (UC-cfdc7ffd-82bf-4bbe-80bb-99fcb6443b4f)",
        category: "AI & Generative AI",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/AI Literacy  -Working Responsibly with AI.jpg"
    },
    {
        id: 9,
        type: "learning",
        title: "Complete Data Privacy (GDPR) Fundamentals",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Moustafa Ahmed Abd El-Azim, Blink Data",
        date: "Sept 11, 2026",
        credential: "1 hour (UC-afc2fe8a-2ff8-4fa0-9f9c-4c10663ae4a3)",
        category: "Digital Marketing & Privacy",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Complete Data Privacy (GDPR) Fundamentals.jpg"
    },
    {
        id: 10,
        type: "learning",
        title: "AI for Every Employee: Understanding and Using AI",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Kurt Anderson",
        date: "Sept 14, 2026",
        credential: "1.5 hours (UC-8bc6d043-44a7-449b-a760-0f42eac14c40)",
        category: "AI & Generative AI",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/AI for Every Employee - Understanding and Using AI.jpg"
    },
    {
        id: 11,
        type: "learning",
        title: "Generative AI for Beginners: Fundamentals, Tools & Prompts",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Data Universe",
        date: "Sept 17, 2026",
        credential: "3.5 hours (UC-2ada70e7-4cc0-4af7-bf4d-633cbbc149f4)",
        category: "AI & Generative AI",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Generative AI for Beginners - Fundamentals, Tools & Prompts.jpg"
    },
    {
        id: 12,
        type: "learning",
        title: "Build Autonomous AI Agents From Scratch With Python",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Hasan Aboul Hasan",
        date: "Oct 5, 2026",
        credential: "1 hour (UC-6c83a5d4-4596-4d6b-8dc7-7c9725cd1b44)",
        category: "AI & Generative AI",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Build Autonomous AI Agents From Scratch With Python.jpg"
    },
    {
        id: 13,
        type: "learning",
        title: "Master English: Improve Your Speaking, Listening, & Writing",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Kendra Lucas",
        date: "Sept 21, 2026",
        credential: "5 hours (UC-409d6810-2d22-4a2b-a522-7d2a11e88806)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Master English - Improve Your Speaking, Listening, Writing.jpg"
    },
    {
        id: 14,
        type: "learning",
        title: "Complete Job Interviewing Skills with Real Life Examples",
        recipient: "Saravanan M",
        platform: "Udemy",
        instructor: "Imran Afzal",
        date: "Sept 28, 2026",
        credential: "3.5 hours (UC-fcdea322-1e9d-48a7-b689-31cd97c98ec9)",
        category: "Professional & Leadership",
        platformClass: "platform-udemy",
        platformTag: "Udemy",
        imageUrl: "assets/certificate/Learning/Complete Job Interviewing Skills with Real Life Examples.jpg"
    },
    {
        id: 15,
        type: "learning",
        title: "Fundamentals of digital marketing",
        recipient: "Saravanan M",
        platform: "Google Digital Garage",
        instructor: "Google",
        date: "Sept 17, 2025",
        credential: "ID: 425410056",
        category: "Digital Marketing & Privacy",
        platformClass: "platform-google",
        platformTag: "Google",
        imageUrl: "assets/certificate/Learning/Fundamentals of digital marketing _ Google_page-0001.jpg"
    },
    {
        id: 16,
        type: "learning",
        title: "SQL (Intermediate)",
        recipient: "Saravanan M",
        platform: "HackerRank",
        instructor: "HackerRank",
        date: "Sept 03, 2025",
        credential: "ID: 9CCF71B748BD",
        category: "Programming & Data",
        platformClass: "platform-hackerrank",
        platformTag: "HackerRank",
        imageUrl: "assets/certificate/Learning/sql_intermediate certificate_page-0001.jpg"
    },
    {
        id: 17,
        type: "learning",
        title: "JavaScript (Intermediate)",
        recipient: "Saravanan M",
        platform: "HackerRank",
        instructor: "HackerRank",
        date: "Jan 08, 2026",
        credential: "ID: AA4B23A659E7",
        category: "Programming & Data",
        platformClass: "platform-hackerrank",
        platformTag: "HackerRank",
        imageUrl: "assets/certificate/Learning/javascript_intermediate certificate_page-0001.jpg"
    },
    {
        id: 18,
        type: "learning",
        title: "MATLAB Onramp",
        recipient: "Saravanan M",
        platform: "MathWorks Training Services",
        instructor: "MathWorks",
        date: "Sept 07, 2024",
        credential: "Completed 100%",
        category: "Programming & Data",
        platformClass: "platform-mathworks",
        platformTag: "MathWorks",
        imageUrl: "assets/certificate/Learning/matlab_page-0001.jpg"
    },
    {
        id: 19,
        type: "learning",
        title: "SQL (Basic)",
        recipient: "Saravanan M",
        platform: "HackerRank",
        instructor: "HackerRank",
        date: "Sept 03, 2025",
        credential: "ID: AC6282AFB54A",
        category: "Programming & Data",
        platformClass: "platform-hackerrank",
        platformTag: "HackerRank",
        imageUrl: "assets/certificate/Learning/sql_basic certificate_page-0001.jpg"
    },
    {
        id: 20,
        type: "learning",
        title: "SQL (Advanced)",
        recipient: "Saravanan M",
        platform: "HackerRank",
        instructor: "HackerRank",
        date: "Sept 03, 2025",
        credential: "ID: F42ED3A12A2E",
        category: "Programming & Data",
        platformClass: "platform-hackerrank",
        platformTag: "HackerRank",
        imageUrl: "assets/certificate/Learning/sql_advanced certificate_page-0001.jpg"
    },
    {
        id: 21,
        type: "learning",
        title: "Java (Basic)",
        recipient: "Saravanan M",
        platform: "HackerRank",
        instructor: "HackerRank",
        date: "Jan 08, 2026",
        credential: "ID: 782EDE10D395",
        category: "Programming & Data",
        platformClass: "platform-hackerrank",
        platformTag: "HackerRank",
        imageUrl: "assets/certificate/Learning/java_basic certificate_page-0001.jpg"
    },
    {
        id: 22,
        type: "learning",
        title: "Create Your First Python Program From UST",
        recipient: "Saravanan M",
        platform: "Coursera (Authorized by UST)",
        instructor: "Amit Yadav (UST / Coursera Project Network)",
        date: "Aug 28, 2023",
        credential: "ID: 3GU8N79PR5Y8",
        category: "Programming & Data",
        platformClass: "platform-coursera",
        platformTag: "Coursera",
        imageUrl: "assets/certificate/Learning/Create Your First Python Program From UST_page-0001.jpg"
    },

    // ==================== EVENTS & HACKATHONS (39) ====================
    {
        id: 23,
        type: "events",
        title: "National Seminar on Metaverse Applications in Healthcare",
        recipient: "Saravanan M",
        platform: "Bannari Amman Institute of Technology",
        instructor: "Dept. of EEE (sponsored by DBT)",
        date: "Feb 01–02, 2024",
        credential: "Participation (Cert ID: A0624NS096)",
        category: "Conferences & Papers",
        platformClass: "platform-bit",
        platformTag: "BIT",
        imageUrl: "assets/certificate/Events/metavers_Seminar.jpg"
    },
    {
        id: 24,
        type: "events",
        title: "EY Techathon 4.0 (Round 1: Executive Summary Submission)",
        recipient: "Saravanan M",
        platform: "Unstop / EY (Ernst & Young)",
        instructor: "EY Techathon 4.0",
        date: "Event Edition: 4.0",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-ey",
        platformTag: "EY",
        imageUrl: "assets/certificate/Events/ey 4.0.jpg"
    },
    {
        id: 25,
        type: "events",
        title: "Prometeo'26 – Ideathon",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/IDEATHAN.jpg"
    },
    {
        id: 26,
        type: "events",
        title: "EY Techathon (Round 2: Detailed Presentation Submission)",
        recipient: "Saravanan M",
        platform: "Unstop / EY (Ernst & Young)",
        instructor: "EY Techathon",
        date: "Event Edition",
        credential: "Certificate of Appreciation (Team: kira)",
        category: "Hackathons & Ideathons",
        platformClass: "platform-ey",
        platformTag: "EY",
        imageUrl: "assets/certificate/Events/EY ROUND 2.jpg"
    },
    {
        id: 27,
        type: "events",
        title: "EY Techathon 6.0 (Round 1: Executive Summary Submission)",
        recipient: "Saravanan M",
        platform: "Unstop / EY (Ernst & Young)",
        instructor: "EY Techathon 6.0",
        date: "Event Edition: 6.0",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-ey",
        platformTag: "EY",
        imageUrl: "assets/certificate/Events/EY 6 ROUND 1.jpg"
    },
    {
        id: 28,
        type: "events",
        title: "eDC's Startup Clinic 4.0",
        recipient: "Saravanan M",
        platform: "IIT Delhi (eDC)",
        instructor: "Unstop / IIT Delhi",
        date: "Event Edition: 4.0",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-iit",
        platformTag: "IIT Delhi",
        imageUrl: "assets/certificate/Events/EDC.jpg"
    },
    {
        id: 29,
        type: "events",
        title: "Group Discussion",
        recipient: "Saravanan M",
        platform: "IETE Student Forum (ISF), BIT",
        instructor: "Dept. of ECE, Bannari Amman Institute of Technology",
        date: "May 20, 2023",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-bit",
        platformTag: "BIT ECE",
        imageUrl: "assets/certificate/Events/IETE_page-0001(1).jpg"
    },
    {
        id: 30,
        type: "events",
        title: "TATA Crucible Campus Quiz 2024",
        recipient: "Saravanan M",
        platform: "Tata Group",
        instructor: "Unstop / Tata Group",
        date: "2024",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-tata",
        platformTag: "Tata",
        imageUrl: "assets/certificate/Events/COM QUIZ.jpg"
    },
    {
        id: 31,
        type: "events",
        title: "Chingari Aptos hAIckathon",
        recipient: "Saravanan M",
        platform: "Chingari & Aptos",
        instructor: "Unstop / Chingari & Aptos",
        date: "Event Edition",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-unstop",
        platformTag: "Chingari",
        imageUrl: "assets/certificate/Events/Chingari Aptos hAIckathon.jpg"
    },
    {
        id: 32,
        type: "events",
        title: "EY Techathon 5.0 (Round 1: Executive Summary Submission)",
        recipient: "Saravanan M",
        platform: "Unstop / EY (Ernst & Young)",
        instructor: "EY Techathon 5.0",
        date: "Event Edition: 5.0",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-ey",
        platformTag: "EY",
        imageUrl: "assets/certificate/Events/EY5.0.jpg"
    },
    {
        id: 33,
        type: "events",
        title: "Weekly Coding Challenge (Challenge 56)",
        recipient: "Saravanan M",
        platform: "Unstop",
        instructor: "Unstop Weekly Coding",
        date: "Event Edition",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-unstop",
        platformTag: "Unstop",
        imageUrl: "assets/certificate/Events/CH56.jpg"
    },
    {
        id: 34,
        type: "events",
        title: "Tata Crucible Campus Quiz 2023",
        recipient: "Saravanan M",
        platform: "Tata Group",
        instructor: "Unstop / Tata Group",
        date: "2023",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-tata",
        platformTag: "Tata",
        imageUrl: "assets/certificate/Events/TATA event.jpg"
    },
    {
        id: 35,
        type: "events",
        title: "Google Coding Competitions – Farewell Round B",
        recipient: "Saravanan M (Handle: SONU12!)",
        platform: "Google",
        instructor: "Google Coding Competitions",
        date: "2023",
        credential: "Rank: 753rd place",
        category: "Competitions & Quizzes",
        platformClass: "platform-google",
        platformTag: "Google",
        imageUrl: "assets/certificate/Events/code jam_page-0001.jpg"
    },
    {
        id: 36,
        type: "events",
        title: "Prometeo'26 – Robowars",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/ROBOWARS.jpg"
    },
    {
        id: 37,
        type: "events",
        title: "Prometeo'26 – Drone Cargo Challenge",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/DRONE.jpg"
    },
    {
        id: 38,
        type: "events",
        title: "Prometeo'26 – Line Follower Bot Competition",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/LINE FOLLOW.jpg"
    },
    {
        id: 39,
        type: "events",
        title: "K Hacks 3.0",
        recipient: "Saravanan M",
        platform: "Anna University (AU), Chennai",
        instructor: "Unstop / Anna University",
        date: "Event Edition: 3.0",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-conference",
        platformTag: "Anna Univ",
        imageUrl: "assets/certificate/Events/K HACKS.jpg"
    },
    {
        id: 40,
        type: "events",
        title: "Flipkart GRiD 6.0 – Robotics Challenge (Level 1: MCQ Test)",
        recipient: "Saravanan M",
        platform: "Flipkart",
        instructor: "Unstop / Flipkart",
        date: "Event Edition: 6.0",
        credential: "Participation",
        category: "Robotics & Tech Events",
        platformClass: "platform-flipkart",
        platformTag: "Flipkart",
        imageUrl: "assets/certificate/Events/GIRD LEVEL 1.jpg"
    },
    {
        id: 41,
        type: "events",
        title: "Capture the Flag (CTF) – Offline Round",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Event Edition",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/FLAG.jpg"
    },
    {
        id: 42,
        type: "events",
        title: "Prometeo'26 – Boat Racing",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/BOAT RACING.jpg"
    },
    {
        id: 43,
        type: "events",
        title: "Prometeo'26 – Pick and Place",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/PICK AND PLACE.jpg"
    },
    {
        id: 44,
        type: "events",
        title: "Prometeo'26 – Robo Soccer",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/ROBO SOCCER.jpg"
    },
    {
        id: 45,
        type: "events",
        title: "Prometeo'26 – RC Electric Racing",
        recipient: "Saravanan M",
        platform: "IIT Jodhpur",
        instructor: "Unstop / IIT Jodhpur",
        date: "Prometeo'26",
        credential: "Participation (Team: 419295-L8XGBG)",
        category: "Robotics & Tech Events",
        platformClass: "platform-iit",
        platformTag: "IIT Jodhpur",
        imageUrl: "assets/certificate/Events/RC RACE.jpg"
    },
    {
        id: 46,
        type: "events",
        title: "Flipkart GRiD 5.0 – Information Security Challenge (Level 1 Quiz)",
        recipient: "Saravanan M",
        platform: "Flipkart",
        instructor: "Unstop / Flipkart",
        date: "2023",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-flipkart",
        platformTag: "Flipkart",
        imageUrl: "assets/certificate/Events/FLIPKART FIRD.jpg"
    },
    {
        id: 47,
        type: "events",
        title: "Tata Steel TomorrowLAB 2023 (Student Track)",
        recipient: "Saravanan M",
        platform: "Tata Steel",
        instructor: "Unstop / Tata Steel",
        date: "2023",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-tata",
        platformTag: "Tata Steel",
        imageUrl: "assets/certificate/Events/Tata steel.jpg"
    },
    {
        id: 48,
        type: "events",
        title: "Mini Marathon",
        recipient: "Saravanan M",
        platform: "Rotary Club of Sathy & Rotaract Club of BIT",
        instructor: "Rotary & Rotaract Club",
        date: "2023–2024",
        credential: "Participation",
        category: "Extracurricular & Others",
        platformClass: "platform-bit",
        platformTag: "Rotary",
        imageUrl: "assets/certificate/Events/MARATHON.jpg"
    },
    {
        id: 49,
        type: "events",
        title: "Project Competition-2023",
        recipient: "Saravanan M",
        platform: "Bannari Amman Institute of Technology",
        instructor: "Special Labs, BIT",
        date: "June 09, 2023",
        credential: 'Presented project: "A Bluetooth Remote Car"',
        category: "Robotics & Tech Events",
        platformClass: "platform-bit",
        platformTag: "BIT Labs",
        imageUrl: "assets/certificate/Events/INNOVATION.jpg"
    },
    {
        id: 50,
        type: "events",
        title: "HACKSAGON 2026 (Ideation Phase)",
        recipient: "Saravanan M",
        platform: "ABV-IIITM IEEE Student Branch",
        instructor: "AESS, IEEE MP Section, EPS",
        date: "2026",
        credential: "Participation",
        category: "Hackathons & Ideathons",
        platformClass: "platform-conference",
        platformTag: "IEEE",
        imageUrl: "assets/certificate/Events/HACK 2026.jpg"
    },
    {
        id: 51,
        type: "events",
        title: 'National Conference on "Intelligent Decision Support System..."',
        recipient: "Saravanan M",
        platform: "Hindusthan Institute of Technology",
        instructor: "Dept. of ECE (sponsored by DBT)",
        date: "Feb 09–10, 2023",
        credential: 'Presented Paper: "Alzheimer Disease Prediction Using CNN"',
        category: "Conferences & Papers",
        platformClass: "platform-conference",
        platformTag: "Conference",
        imageUrl: "assets/certificate/Events/HINDUSTHAN_CNN_PAPER.jpg"
    },
    {
        id: 52,
        type: "events",
        title: "NAALAIYA KALAM'24",
        recipient: "Saravanan M",
        platform: "Bannari Amman Institute of Technology",
        instructor: "Makkal Sinthanai Peravai, BIT",
        date: "2024",
        credential: "Participation",
        category: "Extracurricular & Others",
        platformClass: "platform-bit",
        platformTag: "BIT",
        imageUrl: "assets/certificate/Events/Nalaiya Kalam_page-0001.jpg"
    },
    {
        id: 53,
        type: "events",
        title: 'International Seminar on "Sustainable Development & Green Business Models"',
        recipient: "Saravanan M",
        platform: "ASET College & Institute of Rail Transport",
        instructor: "ASET College with IRT, New Delhi",
        date: "Jan 31, 2023",
        credential: 'Presented Paper: "Sustainable HRM"',
        category: "Conferences & Papers",
        platformClass: "platform-conference",
        platformTag: "Seminar",
        imageUrl: "assets/certificate/Events/ASET_PAPER.jpg"
    },
    {
        id: 54,
        type: "events",
        title: "Lumos Innovate-A-Thon",
        recipient: "Saravanan M",
        platform: "LumosLabs",
        instructor: "LumosLabs Web3",
        date: "Event Edition",
        credential: "Participation (Web3 Ideas)",
        category: "Hackathons & Ideathons",
        platformClass: "platform-unstop",
        platformTag: "LumosLabs",
        imageUrl: "assets/certificate/Events/Lumos_page-0001.jpg"
    },
    {
        id: 55,
        type: "events",
        title: "SREC UTSAVA'26 – Caddathon",
        recipient: "Saravanan M",
        platform: "Sri Ramakrishna Engineering College (SREC)",
        instructor: "SREC UTSAVA'26, Coimbatore",
        date: "Jan 30–31, 2026",
        credential: "Participation",
        category: "Robotics & Tech Events",
        platformClass: "platform-conference",
        platformTag: "SREC",
        imageUrl: "assets/certificate/Events/cad.jpg"
    },
    {
        id: 56,
        type: "events",
        title: "International Conference on Current Trends in MCCT 2023",
        recipient: "Saravanan M",
        platform: "SIMATS Engineering, Chennai",
        instructor: "SIMATS Engineering",
        date: "Oct 11, 2023",
        credential: 'Presented Paper: "Quantum Machine Learning"',
        category: "Conferences & Papers",
        platformClass: "platform-conference",
        platformTag: "Conference",
        imageUrl: "assets/certificate/Events/savitha college_page-0001.jpg"
    },
    {
        id: 57,
        type: "events",
        title: "RBI@90 Nationwide Online Quiz 2024",
        recipient: "Saravanan M",
        platform: "Reserve Bank of India (FIDD)",
        instructor: "RBI Nationwide Quiz",
        date: "September 2024",
        credential: "Participation",
        category: "Competitions & Quizzes",
        platformClass: "platform-tata",
        platformTag: "RBI",
        imageUrl: "assets/certificate/Events/RBI_Quiz_page-0001.jpg"
    },
    {
        id: 58,
        type: "events",
        title: "SREC UTSAVA'26 – Sensor Logic Building",
        recipient: "Saravanan M",
        platform: "Sri Ramakrishna Engineering College (SREC)",
        instructor: "SREC UTSAVA'26, Coimbatore",
        date: "Jan 30–31, 2026",
        credential: "Participation",
        category: "Robotics & Tech Events",
        platformClass: "platform-conference",
        platformTag: "SREC",
        imageUrl: "assets/certificate/Events/Sensor logic.jpg"
    },
    {
        id: 59,
        type: "events",
        title: "Hack The Mountains 4.0",
        recipient: "Saravanan M",
        platform: "MLH (Major League Hacking) / Sudan's Technocrats",
        instructor: "Sudan's Technocrats Foundation",
        date: "Oct 28–29, 2023",
        credential: "Hacker Award (Cert ID: 82b8ad78-d65d-4328-a62a-9a1f07208d4b)",
        category: "Hackathons & Ideathons",
        platformClass: "platform-mlh",
        platformTag: "MLH Award",
        imageUrl: "assets/certificate/Events/montainHackthan_page-0001.jpg"
    },
    {
        id: 60,
        type: "events",
        title: "International Conference on Computational Intelligence (ICCI-2025)",
        recipient: "Saravanan M",
        platform: "K. Ramakrishnan College of Engineering & VEI Technologies",
        instructor: "Trichy & VEI Technologies",
        date: "March 21–22, 2025",
        credential: 'Presented Paper: "Hybrid Library System: Physical And Virtual Integration (HLMS)"',
        category: "Conferences & Papers",
        platformClass: "platform-conference",
        platformTag: "ICCI-2025",
        imageUrl: "assets/certificate/Events/Ramakrishnan_page-0001.jpg"
    },
    {
        id: 61,
        type: "events",
        title: "SREC UTSAVA'26 – Project Expo (1st Place Winner)",
        recipient: "Saravanan M",
        platform: "Sri Ramakrishna Engineering College (SREC)",
        instructor: "National Level Techno-Cultural Fest SREC UTSAVA'26",
        date: "Jan 30–31, 2026",
        credential: "1st Place Winner – Project Expo (Certificate of Appreciation)",
        category: "Robotics & Tech Events",
        platformClass: "platform-conference",
        platformTag: "SREC Winner",
        imageUrl: "assets/certificate/Events/PROJECT EXPO DI WINNING.jpeg"
    }
];

// ==============================
// APPLICATION STATE
// ==============================

const AppState = {
    currentCategory: "All",
    projectView: "grid",
    swiperInstance: null,
    scrollObserver: null,
    progressCheckInterval: null,
    isMobileMenuOpen: false,

    // Certificates state
    certViewMode: "carousel", // "carousel" or "grid"
    eventsSwiperInstance: null,
    learningSwiperInstance: null,
    currentCertType: "all",
    currentCertCategory: "All",
    certSearchQuery: "",
    activeModalCertIndex: 0,
    filteredCertificates: [...allCertificates]
};

// ==============================
// DOM ELEMENT CACHE
// ==============================

const DOM = {
    get mainHeader() { return document.getElementById("main-header"); },
    get navScrollProgress() { return document.getElementById("nav-scroll-progress"); },
    get projectsWrapper() { return document.getElementById("projects-wrapper"); },
    get projectsGridWrapper() { return document.getElementById("projects-grid-wrapper"); },
    get projectsCarouselView() { return document.getElementById("projects-carousel-view"); },
    get projectsGridView() { return document.getElementById("projects-grid-view"); },
    get filterContainer() { return document.getElementById("project-filter-buttons"); },
    get projectsCountNumber() { return document.getElementById("projects-count-number"); },
    get projectsTotalCount() { return document.getElementById("projects-total-count"); },
    get viewCarouselBtn() { return document.getElementById("view-carousel-btn"); },
    get viewGridBtn() { return document.getElementById("view-grid-btn"); },
    get typedText() { return document.getElementById("typed-text"); },
    get mobileMenuPanel() { return document.getElementById("mobile-menu-panel"); },
    get mobileMenuOverlay() { return document.getElementById("mobile-menu-overlay"); },
    get themeButtons() { return document.querySelectorAll(".theme-btn"); },
    get animatedElements() { return document.querySelectorAll('.skill-card, .bento-item, .timeline-item, .certificate-card'); },
    get progressBars() { return document.querySelectorAll('.progress-fill'); },
    get swiperContainer() { return document.querySelector(".swiper-container"); },
    get mobileNavLinks() { return document.querySelectorAll(".mobile-nav-links a"); },

    // Certificates DOM elements
    get certDualCarouselView() { return document.getElementById("cert-dual-carousel-view"); },
    get certGridView() { return document.getElementById("cert-grid-view"); },
    get certViewCarouselBtn() { return document.getElementById("cert-view-carousel-btn"); },
    get certViewGridBtn() { return document.getElementById("cert-view-grid-btn"); },
    get certBackToCarouselBtn() { return document.getElementById("cert-back-to-carousel-btn"); },
    get eventsSwiperWrapper() { return document.getElementById("events-swiper-wrapper"); },
    get learningSwiperWrapper() { return document.getElementById("learning-swiper-wrapper"); },
    get eventsSlideCounter() { return document.getElementById("events-slide-counter"); },
    get learningSlideCounter() { return document.getElementById("learning-slide-counter"); },
    get certGridTitle() { return document.getElementById("cert-grid-title"); },
    get certGridCountText() { return document.getElementById("cert-grid-count-text"); },
    get certGridBadge() { return document.getElementById("cert-grid-badge"); },
    get certificatesGridWrapper() { return document.getElementById("certificates-grid-wrapper"); },
    get certificateFilterContainer() { return document.getElementById("certificate-filter-buttons"); },
    get certificateSearchInput() { return document.getElementById("certificate-search-input"); },
    get certificatesCount() { return document.getElementById("certificates-count"); },
    get certModal() { return document.getElementById("certificate-modal"); },
    get certModalClose() { return document.getElementById("cert-modal-close"); },
    get certModalBackdrop() { return document.getElementById("cert-modal-backdrop"); },
    get certModalImg() { return document.getElementById("cert-modal-img"); },
    get certModalTitle() { return document.getElementById("cert-modal-title"); },
    get certModalRecipient() { return document.getElementById("cert-modal-recipient"); },
    get certModalInstructor() { return document.getElementById("cert-modal-instructor"); },
    get certModalDate() { return document.getElementById("cert-modal-date"); },
    get certModalCredential() { return document.getElementById("cert-modal-credential"); },
    get certModalPlatform() { return document.getElementById("cert-modal-platform"); },
    get certModalCategory() { return document.getElementById("cert-modal-category"); },
    get certModalDownload() { return document.getElementById("cert-modal-download"); },
    get certPrevBtn() { return document.getElementById("cert-prev-btn"); },
    get certNextBtn() { return document.getElementById("cert-next-btn"); }
};

// ==============================
// UTILITY FUNCTIONS
// ==============================

const Utils = {
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ==============================
// THEME MANAGEMENT
// ==============================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update all theme toggle icons
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        if (newTheme === "dark") {
            icon.className = "fas fa-moon";
        } else {
            icon.className = "fas fa-sun";
        }
    });

    // Optional: Add a smooth transition effect
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
    setTimeout(() => {
        document.body.style.transition = "";
    }, 300);
}

function loadTheme() {
    // Check for saved theme preference
    let savedTheme = localStorage.getItem("theme");

    // If no saved preference, check system preference
    if (!savedTheme) {
        savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    // Apply the theme
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Update theme button icons
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        if (savedTheme === "dark") {
            icon.className = "fas fa-moon";
        } else {
            icon.className = "fas fa-sun";
        }
    });
}

// ==============================
// PROJECT CARD RENDERING
// ==============================

function renderTags(tags = []) {
    if (!tags.length) return '';
    return tags
        .map(tag => `<span class="tag">${Utils.escapeHtml(tag)}</span>`)
        .join("");
}

function renderProjectLink(url, iconClass, title, typeClass = "") {
    if (!url) return '';
    return `
        <a 
            href="${Utils.escapeHtml(url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link ${typeClass}"
            title="${Utils.escapeHtml(title)}"
            aria-label="${Utils.escapeHtml(title)}"
        >
            <i class="${iconClass}"></i>
        </a>
    `;
}

function createProjectCard(project, isGrid = false) {
    const {
        title = "Untitled Project",
        description = "No description available.",
        category = "",
        imageUrl = "",
        tags = [],
        demoUrl,
        altDemoUrl,
        githubUrl,
        youtubeUrl,
        figmaUrl
    } = project;

    const bgImage = imageUrl ? `url('${imageUrl.replace(/'/g, "\\'")}')` : 'none';
    const primaryUrl = demoUrl || githubUrl || youtubeUrl || altDemoUrl || '';

    // Calculate ranking based on links count
    const availableLinks = [demoUrl, altDemoUrl, githubUrl, youtubeUrl, figmaUrl].filter(Boolean).length;
    let rankPillHtml = '';
    if (availableLinks >= 4) {
        rankPillHtml = `<span class="project-rank-pill rank-top" title="Top Ranked Project — 4 Verified Links"><i class="fas fa-trophy"></i> Top Project</span>`;
    } else if (availableLinks === 3) {
        rankPillHtml = `<span class="project-rank-pill rank-featured" title="Featured Project — 3 Verified Links"><i class="fas fa-star"></i> Featured</span>`;
    }

    const categoryBadgeHtml = category ? `<span class="project-badge project-category-badge"><i class="fas fa-folder"></i> ${Utils.escapeHtml(category)}</span>` : '';

    const cardInnerHtml = `
        <article class="glass-card project-card" itemscope itemtype="https://schema.org/SoftwareApplication">
            <meta itemprop="name" content="${Utils.escapeHtml(title)}">
            <meta itemprop="applicationCategory" content="${Utils.escapeHtml(category)}">
            <meta itemprop="operatingSystem" content="Web, Cross-platform">
            <meta itemprop="author" content="Saravanan M">
            <div 
                class="project-image-placeholder"
                style="background-image: ${bgImage}"
                role="img"
                aria-label="${Utils.escapeHtml(title)} - Engineering Project by Saravanan M"
            >
                <div class="project-card-header-pills">
                    ${rankPillHtml}
                    ${categoryBadgeHtml}
                </div>
                ${primaryUrl ? `
                <a href="${Utils.escapeHtml(primaryUrl)}" target="_blank" rel="noopener noreferrer" class="project-hover-overlay" tabindex="-1" aria-hidden="true">
                    <span><i class="fas fa-external-link-alt"></i> View Project</span>
                </a>` : ''}
                <img src="${Utils.escapeHtml(imageUrl)}" alt="${Utils.escapeHtml(title)} - Web Development Project by Saravanan M" loading="lazy" itemprop="image" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; pointer-events: none;">
            </div>
            <div class="project-content">
                <div class="project-top">
                    <h3 itemprop="name">${Utils.escapeHtml(title)}</h3>
                    <p itemprop="description">${Utils.escapeHtml(description)}</p>
                </div>
                <div class="project-bottom">
                    <div class="project-tags">
                        ${renderTags(tags)}
                    </div>
                    <div class="project-links">
                        ${renderProjectLink(demoUrl, "fas fa-globe", "Live Demo", "link-demo")}
                        ${renderProjectLink(altDemoUrl, "fas fa-external-link-alt", "Alternative Demo", "link-alt")}
                        ${renderProjectLink(githubUrl, "fab fa-github", "GitHub Repository", "link-github")}
                        ${renderProjectLink(youtubeUrl, "fab fa-youtube", "YouTube Video Demo", "link-youtube")}
                        ${renderProjectLink(figmaUrl, "fab fa-figma", "Figma Design Prototype", "link-figma")}
                    </div>
                </div>
            </div>
        </article>
    `;

    if (isGrid) {
        return `<div class="project-grid-col">${cardInnerHtml}</div>`;
    }
    return `<div class="swiper-slide">${cardInnerHtml}</div>`;
}

function renderProjects(projectsArray = []) {
    const swiperWrapper = DOM.projectsWrapper;
    const gridWrapper = DOM.projectsGridWrapper;

    if (!projectsArray.length) {
        const emptyStateHtml = `
            <div class="glass-card project-card empty-project">
                <div class="project-content" style="align-items: center; justify-content: center; min-height: 200px; text-align: center;">
                    <i class="fas fa-folder-open" style="font-size: 2.2rem; color: var(--accent-color); margin-bottom: 12px; opacity: 0.7;"></i>
                    <p style="font-size: 1rem; color: var(--text-secondary);">No projects found in this category.</p>
                </div>
            </div>
        `;
        if (swiperWrapper) {
            swiperWrapper.innerHTML = `<div class="swiper-slide">${emptyStateHtml}</div>`;
        }
        if (gridWrapper) {
            gridWrapper.innerHTML = `<div class="project-grid-col" style="grid-column: 1 / -1;">${emptyStateHtml}</div>`;
        }
        return;
    }

    if (swiperWrapper) {
        swiperWrapper.innerHTML = projectsArray.map(p => createProjectCard(p, false)).join("");
    }
    if (gridWrapper) {
        gridWrapper.innerHTML = projectsArray.map(p => createProjectCard(p, true)).join("");
    }
}

// ==============================
// SWIPER INITIALIZATION
// ==============================

function updateBottomPagination(swiper) {
    const paginationBottom = document.querySelector('.swiper-pagination-bottom');
    if (!paginationBottom) return;

    let uniqueSlides = 0;
    swiper.slides.forEach(slide => {
        if (!slide.classList.contains('swiper-slide-duplicate')) {
            uniqueSlides++;
        }
    });

    const realTotal = swiper.params.loop ? uniqueSlides : swiper.slides.length;
    const current = swiper.params.loop ? (swiper.realIndex != null ? swiper.realIndex + 1 : 1) : swiper.activeIndex + 1;

    paginationBottom.innerHTML = `<span class="current-slide-num">${String(current).padStart(2, '0')}</span> <span class="slide-divider">/</span> <span class="total-slide-num">${String(realTotal).padStart(2, '0')}</span>`;
}

function initializeSwiper() {
    if (typeof Swiper === "undefined") {
        window.addEventListener('load', () => initializeSwiper(), { once: true });
        setTimeout(() => {
            if (typeof Swiper !== "undefined" && !AppState.swiperInstance) {
                initializeSwiper();
            }
        }, 200);
        return;
    }

    const swiperContainer = document.querySelector(".swiper-container");
    if (!swiperContainer) return;

    if (AppState.swiperInstance) {
        try {
            AppState.swiperInstance.destroy(true, true);
        } catch (e) {
            console.warn("Error destroying previous swiper instance:", e);
        }
        AppState.swiperInstance = null;
    }

    const slides = swiperContainer.querySelectorAll(".swiper-slide");
    if (!slides || slides.length === 0) return;

    const hasEnoughSlides = slides.length > 3;

    AppState.swiperInstance = new Swiper(".swiper-container", {
        loop: hasEnoughSlides,
        effect: "slide",
        grabCursor: true,
        centeredSlides: false,
        speed: 650,
        resistance: true,
        resistanceRatio: 0.85,
        touchRatio: 1.0,
        touchAngle: 45,
        threshold: 5,
        watchSlidesProgress: true,
        preventClicks: true,
        preventClicksPropagation: false,
        slideToClickedSlide: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        autoplay: hasEnoughSlides ? {
            delay: 3800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        } : false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        slidesPerView: 1.15,
        spaceBetween: 22,
        breakpoints: {
            480: {
                slidesPerView: 1.25,
                spaceBetween: 22,
            },
            640: {
                slidesPerView: 1.75,
                spaceBetween: 22,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2.85,
                spaceBetween: 24,
            },
            1280: {
                slidesPerView: 3.15,
                spaceBetween: 28,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next-bottom',
            prevEl: '.swiper-button-prev-bottom',
        },
        on: {
            init: function () { updateBottomPagination(this); },
            slideChange: function () { updateBottomPagination(this); },
            afterInit: function () { updateBottomPagination(this); }
        }
    });
}

// ==============================
// FILTER HANDLER
// ==============================

function handleFilter(category) {
    AppState.currentCategory = category;

    document.querySelectorAll(".filter-btn").forEach(btn => {
        const isActive = btn.dataset.category === category;
        btn.classList.toggle("active", isActive);
        if (isActive) {
            btn.setAttribute("aria-pressed", "true");
        } else {
            btn.setAttribute("aria-pressed", "false");
        }
    });

    const filtered = category === "All"
        ? [...allProjects]
        : allProjects.filter(p => p.category === category);

    // Update live project counts
    const countNumberEl = DOM.projectsCountNumber;
    if (countNumberEl) {
        countNumberEl.textContent = filtered.length;
    }
    const totalCountEl = DOM.projectsTotalCount;
    if (totalCountEl) {
        totalCountEl.textContent = allProjects.length;
    }

    renderProjects(filtered);

    if (AppState.projectView === "carousel") {
        initializeSwiper();
    }
}

// ==============================
// VIEW SWITCHER (CAROUSEL / NORMAL GRID)
// ==============================

function setProjectView(viewMode) {
    AppState.projectView = viewMode;
    try {
        localStorage.setItem("portfolio_project_view", viewMode);
    } catch (e) {
        // Storage access may be restricted in private mode
    }

    const carouselView = DOM.projectsCarouselView;
    const gridView = DOM.projectsGridView;
    const carouselBtn = DOM.viewCarouselBtn;
    const gridBtn = DOM.viewGridBtn;

    if (viewMode === "grid") {
        if (carouselView) carouselView.style.display = "none";
        if (gridView) gridView.style.display = "block";
        if (carouselBtn) {
            carouselBtn.classList.remove("active");
            carouselBtn.setAttribute("aria-pressed", "false");
        }
        if (gridBtn) {
            gridBtn.classList.add("active");
            gridBtn.setAttribute("aria-pressed", "true");
        }
        // Pause Swiper autoplay while user is viewing the grid
        if (AppState.swiperInstance && AppState.swiperInstance.autoplay) {
            AppState.swiperInstance.autoplay.stop();
        }
    } else {
        if (carouselView) carouselView.style.display = "block";
        if (gridView) gridView.style.display = "none";
        if (carouselBtn) {
            carouselBtn.classList.add("active");
            carouselBtn.setAttribute("aria-pressed", "true");
        }
        if (gridBtn) {
            gridBtn.classList.remove("active");
            gridBtn.setAttribute("aria-pressed", "false");
        }
        // Resume or initialize Swiper
        if (AppState.swiperInstance) {
            AppState.swiperInstance.update();
            if (AppState.swiperInstance.autoplay) {
                AppState.swiperInstance.autoplay.start();
            }
        } else {
            initializeSwiper();
        }
    }
}

function initViewSwitcher() {
    const carouselBtn = DOM.viewCarouselBtn;
    const gridBtn = DOM.viewGridBtn;

    if (carouselBtn) {
        carouselBtn.addEventListener("click", () => setProjectView("carousel"));
    }
    if (gridBtn) {
        gridBtn.addEventListener("click", () => setProjectView("grid"));
    }

    let defaultView = "grid";
    try {
        const savedView = localStorage.getItem("portfolio_project_view");
        if (savedView === "grid" || savedView === "carousel") {
            defaultView = savedView;
        }
    } catch (e) { }
    setProjectView(defaultView);
}

// ==============================
// TYPING ANIMATION
// ==============================

function typeText() {
    const text = `Hi, I'm Saravanan M — a tech enthusiast, web developer, and problem solver who builds fast, accessible, and visually engaging websites using modern JavaScript frameworks and thoughtful UI design. I love turning ideas into interactive digital experiences.`;
    const speed = 35;
    let index = 0;
    const element = DOM.typedText;

    if (!element) return;

    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ==============================
// SCROLL ANIMATIONS
// ==============================

function initScrollAnimations() {
    if (AppState.scrollObserver) {
        AppState.scrollObserver.disconnect();
    }

    const elements = DOM.animatedElements;

    AppState.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                AppState.scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
        AppState.scrollObserver.observe(el);
    });
}

function animateProgressBars() {
    const progressBars = DOM.progressBars;

    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !bar.classList.contains('animated')) {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            bar.classList.add('animated');

            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 50);
        }
    });
}

// ==============================
// MOBILE MENU
// ==============================

function openMobileMenu() {
    const panel = DOM.mobileMenuPanel;
    const overlay = DOM.mobileMenuOverlay;

    if (panel && overlay) {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        AppState.isMobileMenuOpen = true;
    }
}

function closeMobileMenu() {
    const panel = DOM.mobileMenuPanel;
    const overlay = DOM.mobileMenuOverlay;

    if (panel && overlay) {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        AppState.isMobileMenuOpen = false;
    }
}

// ==============================
// SMOOTH SCROLLING
// ==============================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#" || href === "") return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// ==============================
// TOUCH FEEDBACK FOR MOBILE
// ==============================

function initTouchFeedback() {
    if (!('ontouchstart' in window)) return;

    const touchElements = document.querySelectorAll(
        '.btn, .skill-card, .project-card, .contact-item, ' +
        '.hero-socials a, .contact-socials a, .social-icon, .filter-btn'
    );

    touchElements.forEach(element => {
        element.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.97)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });

        element.addEventListener('touchend', function () {
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 100);
        });

        element.addEventListener('touchcancel', function () {
            this.style.transform = '';
            this.style.transition = '';
        });
    });
}

// ==============================
// FILTER BUTTONS CREATION
// ==============================

function createFilterButtons() {
    const container = DOM.filterContainer;
    if (!container) return;

    const categories = ["All", ...new Set(allProjects.map(p => p.category))];

    container.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = cat.replace("-", " ");
        btn.dataset.category = cat;
        btn.setAttribute("aria-pressed", cat === "All" ? "true" : "false");
        btn.addEventListener("click", () => handleFilter(cat));
        container.appendChild(btn);
    });
}

// ==============================
// AOS INITIALIZATION
// ==============================

function initAOS() {
    if (typeof AOS !== "undefined") {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            mirror: false
        });
    }
}

// ==============================
// RESIZE HANDLER
// ==============================

function initResizeHandler() {
    const handleResize = Utils.debounce(() => {
        if (AppState.swiperInstance) {
            AppState.swiperInstance.update();
        }
        animateProgressBars();
    }, 200);

    window.addEventListener('resize', handleResize);
}

// ==============================
// SCROLL HANDLER & SCROLLSPY
// ==============================

function updateNavOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Sticky header scrolled elevation state
    const header = DOM.mainHeader || document.getElementById("main-header");
    if (header) {
        if (scrollY > 30) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }

    // 2. Real-time scroll reading progress indicator
    const progressBar = DOM.navScrollProgress || document.getElementById("nav-scroll-progress");
    if (progressBar && docHeight > 0) {
        const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        progressBar.style.width = `${progressPercent}%`;
    }

    // 3. ScrollSpy: active navigation link highlighting
    const sections = document.querySelectorAll("section[id]");
    let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    if (currentSectionId) {
        document.querySelectorAll(".nav-links a, .mobile-nav-links a").forEach(link => {
            const href = link.getAttribute("href");
            const isActive = href === `#${currentSectionId}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }
}

function initScrollHandler() {
    const handleScroll = Utils.throttle(() => {
        animateProgressBars();
        updateNavOnScroll();
    }, 40);

    window.addEventListener('scroll', handleScroll, { passive: true });
    animateProgressBars();
    updateNavOnScroll();
}

// ==============================
// MOBILE MENU LINK HANDLER
// ==============================

function initMobileMenuLinks() {
    DOM.mobileNavLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });
}

// ==============================
// CERTIFICATES FUNCTIONS
// ==============================

function createCertificateCard(cert, index, isSlide = false) {
    const {
        id,
        title = "Certificate",
        platform = "Online Platform",
        instructor = "",
        date = "",
        credential = "",
        category = "",
        platformClass = "platform-udemy",
        platformTag = "",
        imageUrl = "",
        type = "events"
    } = cert;

    const badgeLabel = platformTag || (platform ? platform.split(" ")[0] : "Credential");
    const isEvent = type === "events";
    const typeLabel = isEvent ? "Event / Hackathon" : "Course / Learning";
    const typeIcon = isEvent ? "fas fa-trophy" : "fas fa-graduation-cap";

    const cardHtml = `
        <article class="certificate-card ${isEvent ? 'card-event' : 'card-learning'}" data-cert-id="${id}" data-index="${index}" itemscope itemtype="https://schema.org/EducationalOccupationalCredential">
            <meta itemprop="credentialCategory" content="${Utils.escapeHtml(category)}">
            <div class="cert-thumbnail-wrapper" onclick="openCertModalById(${id})" role="button" tabindex="0" aria-label="View Certificate: ${Utils.escapeHtml(title)} issued by ${Utils.escapeHtml(platform)}">
                <div class="cert-tag-badges">
                    <span class="cert-badge-platform ${platformClass}">${Utils.escapeHtml(badgeLabel)}</span>
                    <span class="cert-badge-category">${Utils.escapeHtml(category)}</span>
                </div>
                <img src="${Utils.escapeHtml(imageUrl)}" alt="${Utils.escapeHtml(title)} - Certificate of Achievement awarded to Saravanan M by ${Utils.escapeHtml(platform)}" loading="lazy" itemprop="image">
                <div class="cert-thumb-overlay">
                    <span><i class="fas fa-search-plus"></i> View Certificate</span>
                </div>
            </div>
            <div class="cert-card-body">
                <div class="cert-card-type-indicator">
                    <i class="${typeIcon}"></i>
                    <span>${typeLabel}</span>
                </div>
                <h3 class="cert-card-title" itemprop="name" title="${Utils.escapeHtml(title)}">${Utils.escapeHtml(title)}</h3>
                <div class="cert-card-info-row">
                    <i class="fas fa-university"></i>
                    <span><strong>${isEvent ? 'Organizer:' : 'Issuer:'}</strong> <span itemprop="recognizedBy">${Utils.escapeHtml(platform)}</span></span>
                </div>
                ${instructor ? `
                <div class="cert-card-info-row">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span><strong>${isEvent ? 'Details:' : 'Instructor:'}</strong> ${Utils.escapeHtml(instructor)}</span>
                </div>` : ''}
                <div class="cert-card-info-row">
                    <i class="fas fa-fingerprint"></i>
                    <span><strong>Achievement:</strong> <span itemprop="description">${Utils.escapeHtml(credential)}</span></span>
                </div>
                <div class="cert-card-footer">
                    <span class="cert-meta-date">
                        <i class="far fa-calendar-alt"></i> ${Utils.escapeHtml(date)}
                    </span>
                    <button type="button" class="cert-action-btn" onclick="openCertModalById(${id})" aria-label="View credential details for ${Utils.escapeHtml(title)}">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </article>
    `;

    if (isSlide) {
        return `<div class="swiper-slide">${cardHtml}</div>`;
    }
    return cardHtml;
}

function renderDualCarousels() {
    const eventsWrapper = DOM.eventsSwiperWrapper;
    const learningWrapper = DOM.learningSwiperWrapper;

    const eventsCerts = allCertificates.filter(c => c.type === "events");
    const learningCerts = allCertificates.filter(c => c.type === "learning");

    if (eventsWrapper) {
        eventsWrapper.innerHTML = eventsCerts.map((c, i) => createCertificateCard(c, i, true)).join("");
    }
    if (learningWrapper) {
        learningWrapper.innerHTML = learningCerts.map((c, i) => createCertificateCard(c, i, true)).join("");
    }
    setTimeout(init3DCardTilt, 60);
}

function updateEventsCounter(swiper) {
    const counterEl = DOM.eventsSlideCounter;
    if (!counterEl) return;
    const total = allCertificates.filter(c => c.type === "events").length;
    const current = (typeof swiper.realIndex === 'number' ? swiper.realIndex + 1 : 1);
    counterEl.textContent = `${current} / ${total}`;
}

function updateLearningCounter(swiper) {
    const counterEl = DOM.learningSlideCounter;
    if (!counterEl) return;
    const total = allCertificates.filter(c => c.type === "learning").length;
    const current = (typeof swiper.realIndex === 'number' ? swiper.realIndex + 1 : 1);
    counterEl.textContent = `${current} / ${total}`;
}

function initDualSwipers() {
    if (typeof Swiper === "undefined") {
        setTimeout(initDualSwipers, 200);
        return;
    }

    if (AppState.eventsSwiperInstance) {
        try { AppState.eventsSwiperInstance.destroy(true, true); } catch (e) { }
        AppState.eventsSwiperInstance = null;
    }
    if (AppState.learningSwiperInstance) {
        try { AppState.learningSwiperInstance.destroy(true, true); } catch (e) { }
        AppState.learningSwiperInstance = null;
    }

    // Events Swiper (Left column Flat Smooth Carousel)
    const eventSlides = document.querySelectorAll("#events-swiper-wrapper .swiper-slide");
    if (eventSlides.length > 0) {
        AppState.eventsSwiperInstance = new Swiper("#events-swiper", {
            loop: eventSlides.length > 2,
            effect: "slide",
            grabCursor: true,
            centeredSlides: false,
            speed: 600,
            resistance: true,
            resistanceRatio: 0.85,
            touchRatio: 1.0,
            threshold: 5,
            watchSlidesProgress: true,
            autoplay: {
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".cert-next-events",
                prevEl: ".cert-prev-events",
            },
            pagination: {
                el: ".events-swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            slidesPerView: 1,
            spaceBetween: 14,
            breakpoints: {
                640: { slidesPerView: 1.05, spaceBetween: 16 },
                1024: { slidesPerView: 1, spaceBetween: 16 },
                1280: { slidesPerView: 1.05, spaceBetween: 18 }
            },
            on: {
                init: function () { updateEventsCounter(this); },
                slideChange: function () { updateEventsCounter(this); }
            }
        });
    }

    // Learning Swiper (Right column Flat Smooth Carousel)
    const learningSlides = document.querySelectorAll("#learning-swiper-wrapper .swiper-slide");
    if (learningSlides.length > 0) {
        AppState.learningSwiperInstance = new Swiper("#learning-swiper", {
            loop: learningSlides.length > 2,
            effect: "slide",
            grabCursor: true,
            centeredSlides: false,
            speed: 600,
            resistance: true,
            resistanceRatio: 0.85,
            touchRatio: 1.0,
            threshold: 5,
            watchSlidesProgress: true,
            autoplay: {
                delay: 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".cert-next-learning",
                prevEl: ".cert-prev-learning",
            },
            pagination: {
                el: ".learning-swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            slidesPerView: 1,
            spaceBetween: 14,
            breakpoints: {
                640: { slidesPerView: 1.05, spaceBetween: 16 },
                1024: { slidesPerView: 1, spaceBetween: 16 },
                1280: { slidesPerView: 1.05, spaceBetween: 18 }
            },
            on: {
                init: function () { updateLearningCounter(this); },
                slideChange: function () { updateLearningCounter(this); }
            }
        });
    }
}

function renderCertificatesGrid() {
    const gridWrapper = DOM.certificatesGridWrapper;
    const titleEl = DOM.certGridTitle;
    const countEl = DOM.certGridCountText;
    const badgeEl = DOM.certGridBadge;
    if (!gridWrapper) return;

    let filtered = [...allCertificates];

    if (AppState.currentCertType === "events") {
        filtered = filtered.filter(c => c.type === "events");
    } else if (AppState.currentCertType === "learning") {
        filtered = filtered.filter(c => c.type === "learning");
    }

    if (AppState.currentCertCategory && AppState.currentCertCategory !== "All") {
        filtered = filtered.filter(c => c.category === AppState.currentCertCategory);
    }

    if (AppState.certSearchQuery && AppState.certSearchQuery.trim()) {
        const q = AppState.certSearchQuery.toLowerCase().trim();
        filtered = filtered.filter(c =>
            c.title.toLowerCase().includes(q) ||
            c.platform.toLowerCase().includes(q) ||
            c.instructor.toLowerCase().includes(q) ||
            c.credential.toLowerCase().includes(q) ||
            c.category.toLowerCase().includes(q) ||
            c.date.toLowerCase().includes(q) ||
            (c.platformTag && c.platformTag.toLowerCase().includes(q))
        );
    }

    AppState.filteredCertificates = filtered;

    // Header title and count text
    let bannerTitle = "All Certificates";
    if (AppState.currentCertType === "events") {
        bannerTitle = "Events & Hackathons";
    } else if (AppState.currentCertType === "learning") {
        bannerTitle = "Courses & Learning";
    } else if (AppState.currentCertCategory !== "All") {
        bannerTitle = AppState.currentCertCategory;
    }

    if (AppState.certSearchQuery && AppState.certSearchQuery.trim()) {
        bannerTitle += ` (Filtered: "${AppState.certSearchQuery}")`;
    }

    if (titleEl) {
        titleEl.textContent = `${bannerTitle} (${filtered.length})`;
    }
    if (countEl) {
        countEl.textContent = `Showing ${filtered.length} of ${allCertificates.length} verified certificates`;
    }
    if (badgeEl) {
        badgeEl.innerHTML = `<i class="fas fa-th"></i> Top Grid View`;
    }

    if (!filtered.length) {
        gridWrapper.innerHTML = `
            <div class="glass-card" style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; border-radius: 20px;">
                <i class="fas fa-certificate" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 14px; opacity: 0.6;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 8px;">No certificates found</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem;">Try adjusting your category filter, clearing your search query, or returning to the dual carousels view.</p>
                <button type="button" class="btn" style="margin-top: 18px;" onclick="showCertCarouselView()">
                    <i class="fas fa-columns"></i> Return to Dual Carousels
                </button>
            </div>
        `;
        return;
    }

    gridWrapper.innerHTML = filtered.map((c, i) => createCertificateCard(c, i, false)).join("");
    setTimeout(init3DCardTilt, 60);
}

function showCertGridView(filterOpt = {}) {
    AppState.certViewMode = "grid";

    // Pause Swiper autoplays while user browses the top grid
    if (AppState.eventsSwiperInstance && AppState.eventsSwiperInstance.autoplay) {
        AppState.eventsSwiperInstance.autoplay.stop();
    }
    if (AppState.learningSwiperInstance && AppState.learningSwiperInstance.autoplay) {
        AppState.learningSwiperInstance.autoplay.stop();
    }

    if (DOM.certDualCarouselView) DOM.certDualCarouselView.style.display = "none";
    if (DOM.certGridView) DOM.certGridView.style.display = "block";

    if (DOM.certViewCarouselBtn) {
        DOM.certViewCarouselBtn.classList.remove("active");
        DOM.certViewCarouselBtn.setAttribute("aria-selected", "false");
    }
    if (DOM.certViewGridBtn) {
        DOM.certViewGridBtn.classList.add("active");
        DOM.certViewGridBtn.setAttribute("aria-selected", "true");
    }

    if (filterOpt.category !== undefined) {
        AppState.currentCertCategory = filterOpt.category;
    }
    if (filterOpt.type !== undefined) {
        AppState.currentCertType = filterOpt.type;
    } else if (filterOpt.category !== undefined && filterOpt.category !== "All") {
        AppState.currentCertType = "all";
    }

    // Update active state on filter buttons
    document.querySelectorAll(".cert-filter-btn").forEach(btn => {
        const isActive = (btn.dataset.category === AppState.currentCertCategory);
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderCertificatesGrid();
}

function showCertCarouselView() {
    AppState.certViewMode = "carousel";

    if (DOM.certDualCarouselView) DOM.certDualCarouselView.style.display = "grid";
    if (DOM.certGridView) DOM.certGridView.style.display = "none";

    if (DOM.certViewCarouselBtn) {
        DOM.certViewCarouselBtn.classList.add("active");
        DOM.certViewCarouselBtn.setAttribute("aria-selected", "true");
    }
    if (DOM.certViewGridBtn) {
        DOM.certViewGridBtn.classList.remove("active");
        DOM.certViewGridBtn.setAttribute("aria-selected", "false");
    }

    // Resume or update swipers
    if (AppState.eventsSwiperInstance) {
        AppState.eventsSwiperInstance.update();
        if (AppState.eventsSwiperInstance.autoplay) {
            AppState.eventsSwiperInstance.autoplay.start();
        }
    }
    if (AppState.learningSwiperInstance) {
        AppState.learningSwiperInstance.update();
        if (AppState.learningSwiperInstance.autoplay) {
            AppState.learningSwiperInstance.autoplay.start();
        }
    }
}

function selectCategoryToGrid(category) {
    AppState.currentCertCategory = category;
    AppState.currentCertType = "all";
    showCertGridView({ category });

    const gridBanner = document.querySelector(".cert-grid-header-banner");
    if (gridBanner) {
        gridBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function createCertFilterButtons() {
    const container = DOM.certificateFilterContainer;
    if (!container) return;

    const categories = ["All", ...new Set(allCertificates.map(c => c.category))];
    container.innerHTML = "";

    categories.forEach(cat => {
        const count = cat === "All" ? allCertificates.length : allCertificates.filter(c => c.category === cat).length;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `cert-filter-btn ${cat === AppState.currentCertCategory ? 'active' : ''}`;
        btn.dataset.category = cat;
        btn.setAttribute("aria-pressed", cat === AppState.currentCertCategory ? "true" : "false");
        btn.innerHTML = `${Utils.escapeHtml(cat)} <span class="cert-filter-count">${count}</span>`;
        btn.addEventListener("click", () => {
            selectCategoryToGrid(cat);
        });
        container.appendChild(btn);
    });
}

function openCertModalById(certId) {
    const certIndexInAll = allCertificates.findIndex(c => c.id === certId);
    if (certIndexInAll === -1) return;

    let currentList = (AppState.filteredCertificates && AppState.filteredCertificates.length)
        ? AppState.filteredCertificates
        : allCertificates;

    let indexInCurrentList = currentList.findIndex(c => c.id === certId);
    if (indexInCurrentList === -1) {
        currentList = allCertificates;
        indexInCurrentList = certIndexInAll;
        AppState.filteredCertificates = allCertificates;
    }

    AppState.activeModalCertIndex = indexInCurrentList;
    const cert = currentList[indexInCurrentList];

    const modal = DOM.certModal;
    if (!modal) return;

    if (DOM.certModalImg) DOM.certModalImg.src = cert.imageUrl;
    if (DOM.certModalTitle) DOM.certModalTitle.textContent = cert.title;
    if (DOM.certModalRecipient) DOM.certModalRecipient.textContent = cert.recipient || "Saravanan M";
    if (DOM.certModalInstructor) {
        DOM.certModalInstructor.textContent = `${cert.platform}${cert.instructor ? ` (${cert.instructor})` : ''}`;
    }
    if (DOM.certModalDate) DOM.certModalDate.textContent = cert.date;
    if (DOM.certModalCredential) DOM.certModalCredential.textContent = cert.credential;
    if (DOM.certModalPlatform) {
        DOM.certModalPlatform.className = `cert-modal-badge ${cert.platformClass}`;
        DOM.certModalPlatform.textContent = cert.platformTag || cert.platform;
    }
    if (DOM.certModalCategory) DOM.certModalCategory.textContent = cert.category;
    if (DOM.certModalDownload) DOM.certModalDownload.href = cert.imageUrl;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeCertModal() {
    const modal = DOM.certModal;
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function navigateCertModal(direction) {
    const certs = (AppState.filteredCertificates && AppState.filteredCertificates.length)
        ? AppState.filteredCertificates
        : allCertificates;
    if (!certs || !certs.length) return;

    let nextIndex = AppState.activeModalCertIndex + direction;
    if (nextIndex < 0) nextIndex = certs.length - 1;
    if (nextIndex >= certs.length) nextIndex = 0;

    openCertModalById(certs[nextIndex].id);
}

function initCertificates() {
    // 1. Render dual carousels (Events on left, Learning on right)
    renderDualCarousels();
    initDualSwipers();

    // 2. Build category filter chips
    createCertFilterButtons();

    // 3. View Switcher Mode Buttons (Dual Carousels vs Top Grid)
    if (DOM.certViewCarouselBtn) {
        DOM.certViewCarouselBtn.addEventListener("click", () => {
            showCertCarouselView();
        });
    }
    if (DOM.certViewGridBtn) {
        DOM.certViewGridBtn.addEventListener("click", () => {
            showCertGridView({ category: AppState.currentCertCategory || "All" });
        });
    }
    if (DOM.certBackToCarouselBtn) {
        DOM.certBackToCarouselBtn.addEventListener("click", () => {
            showCertCarouselView();
        });
    }

    // 4. "View Grid" Buttons on individual column headers (Events vs Learning)
    document.querySelectorAll(".cert-col-expand-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const type = btn.dataset.type; // 'events' or 'learning'
            AppState.currentCertCategory = "All";
            showCertGridView({ type, category: "All" });
            const gridBanner = document.querySelector(".cert-grid-header-banner");
            if (gridBanner) {
                gridBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });

    // 5. Live Search Input (Auto-converts to top grid view to display results)
    const searchInput = DOM.certificateSearchInput;
    if (searchInput) {
        searchInput.addEventListener("input", Utils.debounce((e) => {
            AppState.certSearchQuery = e.target.value;
            if (AppState.certSearchQuery.trim()) {
                showCertGridView();
            } else if (AppState.certViewMode === "grid") {
                renderCertificatesGrid();
            }
        }, 200));
    }

    // 6. Certificate Lightbox Modal Listeners
    const modalClose = DOM.certModalClose;
    const modalBackdrop = DOM.certModalBackdrop;
    const prevBtn = DOM.certPrevBtn;
    const nextBtn = DOM.certNextBtn;

    if (modalClose) modalClose.addEventListener("click", closeCertModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeCertModal);
    if (prevBtn) prevBtn.addEventListener("click", () => navigateCertModal(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => navigateCertModal(1));

    document.addEventListener("keydown", (e) => {
        const modal = DOM.certModal;
        if (!modal || !modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            closeCertModal();
        } else if (e.key === "ArrowLeft") {
            navigateCertModal(-1);
        } else if (e.key === "ArrowRight") {
            navigateCertModal(1);
        }
    });
}

// ==============================
// PARALLAX SCROLLING & 3D CARD TILT
// ==============================

function initParallaxScrolling() {
    let ticking = false;
    const heroImage = document.querySelector('.hero-image');
    const heroStatus = document.querySelector('.hero-status-pill');
    const heroTitle = document.querySelector('#home h1');
    const blobs = document.querySelectorAll('.blob');
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    const sectionHeaders = document.querySelectorAll('.section-header');

    function updateParallax() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        // Background living blobs parallax motion
        blobs.forEach((blob, idx) => {
            const speed = (idx + 1) * 0.09;
            blob.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
        });

        // Hero components gentle depth parallax (visible near top)
        if (scrolled < 950) {
            if (heroImage) {
                heroImage.style.transform = `translate3d(0, ${scrolled * 0.16}px, 0) scale(${Math.max(0.92, 1 - scrolled * 0.0003)})`;
            }
            if (heroStatus) {
                heroStatus.style.transform = `translate3d(0, ${scrolled * 0.22}px, 0)`;
            }
            if (heroTitle) {
                heroTitle.style.transform = `translate3d(0, ${scrolled * 0.1}px, 0)`;
            }
        }

        // Floating parallax glowing shapes across sections
        parallaxShapes.forEach((shape) => {
            const speed = parseFloat(shape.dataset.speed || "0.1");
            const parent = shape.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yOffset = (window.innerHeight - rect.top) * speed;
                shape.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
            }
        });

        // Section headers gentle floating depth
        sectionHeaders.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (rect.top - window.innerHeight / 2) * 0.035;
                header.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

function init3DCardTilt() {
    if (window.matchMedia("(hover: none)").matches) return; // Skip on touch devices

    const cards = document.querySelectorAll('.certificate-card, .project-card, .bento-item, .timeline-item');
    cards.forEach(card => {
        // Do not apply mousemove 3D tilt on carousel cards to guarantee 100% smooth, flat sliding
        if (card.closest('.swiper-container') || card.closest('.cert-swiper') || card.closest('.swiper')) return;
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = "true";

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px) scale3d(1.015, 1.015, 1.015)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ==============================
// MAIN INITIALIZATION
// ==============================

function initializeApp() {
    // Ensure viewport starts at top on initial application mount
    window.scrollTo(0, 0);

    // Load theme first
    loadTheme();

    // Initialize certificates
    initCertificates();

    // Create filter buttons
    createFilterButtons();

    // Initialize layout view switcher (Carousel vs Normal Grid)
    initViewSwitcher();

    // Initial render
    handleFilter("All");

    // Start typing animation
    typeText();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize Parallax Scrolling & 3D Tilt
    initParallaxScrolling();
    init3DCardTilt();

    // Initialize AOS
    initAOS();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize progress bar animations
    initScrollHandler();

    // Initialize touch feedback
    initTouchFeedback();

    // Initialize resize handler
    initResizeHandler();

    // Initialize mobile menu links
    initMobileMenuLinks();

    // Theme toggle event listeners
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.removeEventListener("click", toggleTheme);
        btn.addEventListener("click", toggleTheme);
    });

    // Mobile menu event listeners
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuOverlay = DOM.mobileMenuOverlay;

    if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener("click", openMobileMenu);
        mobileMenuBtn.addEventListener("click", openMobileMenu);
    }
    if (mobileMenuClose) {
        mobileMenuClose.removeEventListener("click", closeMobileMenu);
        mobileMenuClose.addEventListener("click", closeMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.removeEventListener("click", closeMobileMenu);
        mobileMenuOverlay.addEventListener("click", closeMobileMenu);
    }
}

// ==============================
// START THE APPLICATION
// ==============================

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}

// Guarantee viewport stays at top after images and vendor scripts complete loading
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 60);
});

// ==============================
// EXPORT FOR DEBUGGING (OPTIONAL)
// ==============================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allProjects, initializeApp, toggleTheme };
}
=======
// ==============================
// PROJECTS DATA
// ==============================

const allProjects = [
    {
        title: "Unified Student Webpage",
        description: "All-in-one student success platform combining academics, career development, mentorship, and mental wellness with AI-powered smart dashboards.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "AI", "EdTech"],
        imageUrl: "assets/1.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/Student-Ecosystem-for-Career-Growth-AI-Powered-Student-Platform-",
        youtubeUrl: "https://youtu.be/utbEJc1iMkQ",
        figmaUrl: ""
    },
    {
        title: "Lost & Found Website",
        description: "Campus-wide item recovery solution enabling students to report, track, and reclaim lost belongings with real-time status updates.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        imageUrl: "assets/2.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/lost-and-find",
        youtubeUrl: "https://youtu.be/1peVCLX9p70",
        figmaUrl: ""
    },
    {
        title: "Hybrid Library Management System",
        description: "Intelligent library automation platform for seamless book cataloging, user management, and borrowing operations tracking.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
        imageUrl: "assets/3.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://youtu.be/fW1DDZJ7HKM",
        figmaUrl: ""
    },
    {
        title: "Full Stack E-Commerce Website",
        description: "Enterprise-grade e-commerce solution with JWT authentication, product management, cart system, and secure REST API integration.",
        category: "Full-stack",
        tags: [
            "React",
            "Spring Boot",
            "Java",
            "JWT",
            "REST API",
            "MySQL",
            "E-Commerce"
        ],
        imageUrl: "assets/e1.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=WF6rrAapnsc",
        figmaUrl: ""
    },
    {
        title: "Secure Real-Time Chat & Video Calling System",
        description: "Privacy-first communication platform featuring encrypted messaging, private chat rooms, and peer-to-peer audio/video calls with live user tracking.",
        category: "Full-stack",
        tags: [
            "Node.js",
            "Express",
            "Socket.IO",
            "WebRTC",
            "Real-Time",
            "WebSockets",
            "Video Calling"
        ],
        imageUrl: "assets/cv1.png",
        demoUrl: "https://chatapp-1-k7bk.onrender.com/",
        githubUrl: "https://github.com/Saravanan-mc/Secure_Real_Time_Chat-Video_Calling_System",
        youtubeUrl: "https://www.youtube.com/watch?v=qm2YDFmimRY",
        figmaUrl: ""
    },
    {
        title: "Secure Privacy-Focused Video Calling App",
        description: "Advanced video communication with screenshot detection, privacy mode, real-time alerts, and watermark protection for secure conversations.",
        category: "Full-stack",
        tags: [
            "Node.js",
            "WebRTC",
            "Socket.IO",
            "WebSockets",
            "Real-Time",
            "Privacy",
            "Video Calling"
        ],
        imageUrl: "assets/sv1.png",
        demoUrl: "https://securevideocall-1.onrender.com/",
        githubUrl: "https://github.com/Saravanan-mc/SecureVideoCall",
        youtubeUrl: "https://youtu.be/DHzKb4a22s0",
        figmaUrl: ""
    },
    {
        title: "Simple Todo App",
        description: "Full-stack task management solution with complete CRUD operations, REST API integration, and seamless MySQL database connectivity.",
        category: "Full-stack",
        tags: [
            "React",
            "Spring Boot",
            "Java",
            "CRUD",
            "REST API",
            "MySQL",
            "Axios"
        ],
        imageUrl: "assets/t1.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=3jooiT8OJI8",
        figmaUrl: ""
    },
    {
        title: "Game Space",
        description: "Curated gaming hub offering instant access to diverse games and interactive tools through a unified web interface.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "Games"],
        imageUrl: "assets/4.png",
        demoUrl: "https://saravapps.neocities.org/appsapce/apps",
        githubUrl: "https://github.com/Saravanan-mc/Game-Space",
        youtubeUrl: "",
        figmaUrl: ""
    },
    {
        title: "Voice2SQL – AI Powered Voice to SQL Learning System",
        description: "Revolutionary AI learning tool converting voice commands to SQL queries with 3D visualization, intelligent tutoring, and real-time query explanations.",
        category: "Full-stack",
        tags: [
            "AI",
            "Spring Boot",
            "Java",
            "Three.js",
            "Voice Recognition",
            "NLP",
            "MySQL",
            "Web Speech API"
        ],
        imageUrl: "assets/d5.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=OBVYPBtzKIo",
        figmaUrl: ""
    },
    {
        title: "Browser Apps",
        description: "Lightweight browser-based application hub delivering instant app access for legacy PCs and mobile devices without installation.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        imageUrl: "assets/4a.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://youtu.be/HBmOHeb1vQE",
        figmaUrl: ""
    },
    {
        title: "Mindful Paths",
        description: "AI-powered mental wellness companion offering emotional support and interactive features for better mental health management.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "AI"],
        imageUrl: "assets/5.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/wellness",
        youtubeUrl: "https://youtu.be/5KWmtJobHoQ",
        figmaUrl: ""
    },
    {
        title: "Restaurant Website – Anabayan Enitha",
        description: "Elegant modern restaurant website with GSAP animations, chatbot assistant, interactive menus, and seamless reservation booking system.",
        category: "Frontend",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "GSAP",
            "Swiper.js",
            "Responsive Design",
            "UI/UX"
        ],
        imageUrl: "assets/r1.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=VYMN-PbABos",
        figmaUrl: ""
    },
    {
        title: "3D Learning Space",
        description: "Immersive AI-powered educational platform with Three.js featuring interactive programming visualizations and physics simulations.",
        category: "Frontend",
        tags: [
            "Three.js",
            "JavaScript",
            "3D Web",
            "WebGL",
            "EdTech",
            "Visualization",
            "TailwindCSS"
        ],
        imageUrl: "assets/d1.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=TObT6CWbYEA",
        figmaUrl: ""
    },
     {
        title: "Trip App",
        description: "Elegant travel booking app UI design enabling seamless trip planning and accommodation reservations with intuitive navigation.",
        category: "Design",
        tags: ["Figma", "Mobile UI", "UX Design"],
        imageUrl: "assets/6.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/rgx9ZvVSPWLw2fajhP6hvk/Trip-App"
    },
    {
        title: "AutoFinder",
        description: "Modern car marketplace platform UI showcasing vehicles with clean aesthetics and user-friendly browsing experience.",
        category: "Design",
        tags: ["Figma", "UI/UX", "Marketplace"],
        imageUrl: "assets/8.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/0Slu4H9BpPfT45m6XjTLtC/AutoFinder"
    },
    {
        title: "The Golden Spoon",
        description: "Premium restaurant mobile app UI design focused on menu exploration and effortless table booking experiences.",
        category: "Design",
        tags: ["Figma", "Restaurant App", "Mobile UI"],
        imageUrl: "assets/7.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/GvPqqL6VjWItKjR6pZdJUt/The-Golden-Spoon"
    }
];

// ==============================
// APPLICATION STATE
// ==============================

const AppState = {
    currentCategory: "All",
    swiperInstance: null,
    scrollObserver: null,
    progressCheckInterval: null,
    isMobileMenuOpen: false
};

// ==============================
// DOM ELEMENT CACHE
// ==============================

const DOM = {
    get projectsWrapper() { return document.getElementById("projects-wrapper"); },
    get filterContainer() { return document.getElementById("project-filter-buttons"); },
    get typedText() { return document.getElementById("typed-text"); },
    get mobileMenuPanel() { return document.getElementById("mobile-menu-panel"); },
    get mobileMenuOverlay() { return document.getElementById("mobile-menu-overlay"); },
    get themeButtons() { return document.querySelectorAll(".theme-btn"); },
    get animatedElements() { return document.querySelectorAll('.skill-card, .bento-item, .timeline-item'); },
    get progressBars() { return document.querySelectorAll('.progress-fill'); },
    get swiperContainer() { return document.querySelector(".swiper-container"); },
    get mobileNavLinks() { return document.querySelectorAll(".mobile-nav-links a"); }
};

// ==============================
// UTILITY FUNCTIONS
// ==============================

const Utils = {
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ==============================
// THEME MANAGEMENT
// ==============================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    // Apply new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Update all theme toggle icons
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        if (newTheme === "dark") {
            icon.className = "fas fa-moon";
        } else {
            icon.className = "fas fa-sun";
        }
    });
    
    // Optional: Add a smooth transition effect
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
    setTimeout(() => {
        document.body.style.transition = "";
    }, 300);
}

function loadTheme() {
    // Check for saved theme preference
    let savedTheme = localStorage.getItem("theme");
    
    // If no saved preference, check system preference
    if (!savedTheme) {
        savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    
    // Apply the theme
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    // Update theme button icons
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        if (savedTheme === "dark") {
            icon.className = "fas fa-moon";
        } else {
            icon.className = "fas fa-sun";
        }
    });
}

// ==============================
// PROJECT CARD RENDERING
// ==============================

function renderTags(tags = []) {
    if (!tags.length) return '';
    return tags
        .map(tag => `<span class="tag">${Utils.escapeHtml(tag)}</span>`)
        .join("");
}

function renderProjectLink(url, iconClass, title) {
    if (!url) return '';
    return `
        <a 
            href="${Utils.escapeHtml(url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
            title="${Utils.escapeHtml(title)}"
            aria-label="${Utils.escapeHtml(title)}"
        >
            <i class="${iconClass}"></i>
        </a>
    `;
}

function createProjectCard(project) {
    const {
        title = "Untitled Project",
        description = "No description available.",
        imageUrl = "",
        tags = [],
        demoUrl,
        githubUrl,
        youtubeUrl,
        figmaUrl
    } = project;

    const bgImage = imageUrl ? `url('${imageUrl.replace(/'/g, "\\'")}')` : 'none';

    return `
        <div class="swiper-slide">
            <article class="glass-card project-card">
                <div 
                    class="project-image-placeholder"
                    style="background-image: ${bgImage}"
                    role="img"
                    aria-label="${Utils.escapeHtml(title)}"
                ></div>
                <div class="project-content">
                    <div class="project-top">
                        <h3>${Utils.escapeHtml(title)}</h3>
                        <p>${Utils.escapeHtml(description)}</p>
                    </div>
                    <div class="project-bottom">
                        <div class="project-tags">
                            ${renderTags(tags)}
                        </div>
                        <div class="project-links">
                            ${renderProjectLink(demoUrl, "fas fa-external-link-alt", "Live Demo")}
                            ${renderProjectLink(githubUrl, "fab fa-github", "GitHub")}
                            ${renderProjectLink(youtubeUrl, "fab fa-youtube", "YouTube")}
                            ${renderProjectLink(figmaUrl, "fab fa-figma", "Figma")}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    `;
}

function renderProjects(projectsArray = []) {
    const wrapper = DOM.projectsWrapper;
    if (!wrapper) return;

    if (!projectsArray.length) {
        wrapper.innerHTML = `
            <div class="swiper-slide">
                <div class="glass-card project-card empty-project">
                    <div class="project-content">
                        <p>No projects found in this category.</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    wrapper.innerHTML = projectsArray.map(createProjectCard).join("");
}

// ==============================
// SWIPER INITIALIZATION
// ==============================

function updateBottomPagination(swiper) {
    const paginationBottom = document.querySelector('.swiper-pagination-bottom');
    if (!paginationBottom) return;

    let uniqueSlides = 0;
    swiper.slides.forEach(slide => {
        if (!slide.classList.contains('swiper-slide-duplicate')) {
            uniqueSlides++;
        }
    });

    const realTotal = swiper.params.loop ? uniqueSlides : swiper.slides.length;
    const current = swiper.params.loop ? swiper.realIndex + 1 : swiper.activeIndex + 1;

    paginationBottom.textContent = `${current} / ${realTotal}`;
}

function initializeSwiper() {
    if (AppState.swiperInstance) {
        AppState.swiperInstance.destroy(true, true);
        AppState.swiperInstance = null;
    }

    const slides = document.querySelectorAll("#projects-wrapper .swiper-slide");
    if (slides.length === 0) return;

    AppState.swiperInstance = new Swiper(".swiper-container", {
        loop: true,
        grabCursor: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets'
        },
        slidesPerView: 1.1,
        spaceBetween: 16,
        breakpoints: {
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 }
        },
        navigation: {
            nextEl: '.swiper-button-next-bottom',
            prevEl: '.swiper-button-prev-bottom',
        },
        on: {
            init: function() { updateBottomPagination(this); },
            slideChange: function() { updateBottomPagination(this); },
            afterInit: function() { updateBottomPagination(this); }
        }
    });
}

// ==============================
// FILTER HANDLER
// ==============================

function handleFilter(category) {
    AppState.currentCategory = category;
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        const isActive = btn.dataset.category === category;
        btn.classList.toggle("active", isActive);
        if (isActive) {
            btn.setAttribute("aria-pressed", "true");
        } else {
            btn.setAttribute("aria-pressed", "false");
        }
    });

    const filtered = category === "All" 
        ? [...allProjects] 
        : allProjects.filter(p => p.category === category);
    
    renderProjects(filtered);
    initializeSwiper();
}

// ==============================
// TYPING ANIMATION
// ==============================

function typeText() {
    const text = `Hi, I'm Saravanan M — a tech enthusiast, web developer, and problem solver who builds fast, accessible, and visually engaging websites using modern JavaScript frameworks and thoughtful UI design. I love turning ideas into interactive digital experiences.`;
    const speed = 35;
    let index = 0;
    const element = DOM.typedText;
    
    if (!element) return;
    
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==============================
// SCROLL ANIMATIONS
// ==============================

function initScrollAnimations() {
    if (AppState.scrollObserver) {
        AppState.scrollObserver.disconnect();
    }

    const elements = DOM.animatedElements;
    
    AppState.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                AppState.scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
        AppState.scrollObserver.observe(el);
    });
}

function animateProgressBars() {
    const progressBars = DOM.progressBars;
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            bar.classList.add('animated');
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 50);
        }
    });
}

// ==============================
// MOBILE MENU
// ==============================

function openMobileMenu() {
    const panel = DOM.mobileMenuPanel;
    const overlay = DOM.mobileMenuOverlay;
    
    if (panel && overlay) {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        AppState.isMobileMenuOpen = true;
    }
}

function closeMobileMenu() {
    const panel = DOM.mobileMenuPanel;
    const overlay = DOM.mobileMenuOverlay;
    
    if (panel && overlay) {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        AppState.isMobileMenuOpen = false;
    }
}

// ==============================
// SMOOTH SCROLLING
// ==============================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href === "#" || href === "") return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// ==============================
// TOUCH FEEDBACK FOR MOBILE
// ==============================

function initTouchFeedback() {
    if (!('ontouchstart' in window)) return;
    
    const touchElements = document.querySelectorAll(
        '.btn, .skill-card, .project-card, .contact-item, ' +
        '.hero-socials a, .contact-socials a, .social-icon, .filter-btn'
    );
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 100);
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.transition = '';
        });
    });
}

// ==============================
// FILTER BUTTONS CREATION
// ==============================

function createFilterButtons() {
    const container = DOM.filterContainer;
    if (!container) return;
    
    const categories = ["All", ...new Set(allProjects.map(p => p.category))];
    
    container.innerHTML = '';
    
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = cat.replace("-", " ");
        btn.dataset.category = cat;
        btn.setAttribute("aria-pressed", cat === "All" ? "true" : "false");
        btn.addEventListener("click", () => handleFilter(cat));
        container.appendChild(btn);
    });
}

// ==============================
// AOS INITIALIZATION
// ==============================

function initAOS() {
    if (typeof AOS !== "undefined") {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            mirror: false
        });
    }
}

// ==============================
// RESIZE HANDLER
// ==============================

function initResizeHandler() {
    const handleResize = Utils.debounce(() => {
        if (AppState.swiperInstance) {
            AppState.swiperInstance.update();
        }
        animateProgressBars();
    }, 200);
    
    window.addEventListener('resize', handleResize);
}

// ==============================
// SCROLL HANDLER
// ==============================

function initScrollHandler() {
    const handleScroll = Utils.throttle(() => {
        animateProgressBars();
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    animateProgressBars();
}

// ==============================
// MOBILE MENU LINK HANDLER
// ==============================

function initMobileMenuLinks() {
    DOM.mobileNavLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });
}

// ==============================
// MAIN INITIALIZATION
// ==============================

function initializeApp() {
    // Load theme first
    loadTheme();
    
    // Create filter buttons
    createFilterButtons();
    
    // Initial render
    handleFilter("All");
    
    // Start typing animation
    typeText();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize AOS
    initAOS();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize progress bar animations
    initScrollHandler();
    
    // Initialize touch feedback
    initTouchFeedback();
    
    // Initialize resize handler
    initResizeHandler();
    
    // Initialize mobile menu links
    initMobileMenuLinks();
    
    // Theme toggle event listeners
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.removeEventListener("click", toggleTheme);
        btn.addEventListener("click", toggleTheme);
    });
    
    // Mobile menu event listeners
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuOverlay = DOM.mobileMenuOverlay;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener("click", openMobileMenu);
        mobileMenuBtn.addEventListener("click", openMobileMenu);
    }
    if (mobileMenuClose) {
        mobileMenuClose.removeEventListener("click", closeMobileMenu);
        mobileMenuClose.addEventListener("click", closeMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.removeEventListener("click", closeMobileMenu);
        mobileMenuOverlay.addEventListener("click", closeMobileMenu);
    }
}

// ==============================
// START THE APPLICATION
// ==============================

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}

// ==============================
// EXPORT FOR DEBUGGING (OPTIONAL)
// ==============================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allProjects, initializeApp, toggleTheme };
}
>>>>>>> ae27306c7705c4d810c2af75fcccff53d6104757
