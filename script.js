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
