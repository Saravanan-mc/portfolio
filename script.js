// Projects Data
const allProjects = [
    {
        title: "Student Ecosystem for Career Growth",
        description: "An AI-powered student platform designed to support academics, career development, mentorship, and emotional wellness through smart dashboards and community engagement.",
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
        description: "A campus-based Lost & Found web application that helps students report, track, and recover missing items efficiently.",
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
        description: "A smart hybrid library system for managing books, users, and borrowing operations.",
        category: "Full-stack",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
        imageUrl: "assets/3.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "https://youtu.be/fW1DDZJ7HKM",
        figmaUrl: ""
    },
    {
        title: "Game Space",
        description: "A web-based hub for discovering, searching, and playing various games and tools through a single interface.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "Games"],
        imageUrl: "assets/4.png",
        demoUrl: "https://saravapps.neocities.org/appsapce/apps",
        githubUrl: "https://github.com/Saravanan-mc/Game-Space",
        youtubeUrl: "",
        figmaUrl: ""
    },
    {
        title: "Browser Apps",
        description: "A lightweight browser-based application that allows instant access to apps on old PCs and mobile devices.",
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
        description: "An AI-powered mental health support platform focused on emotional well-being using interactive AI-based features.",
        category: "Frontend",
        tags: ["HTML", "CSS", "JavaScript", "AI"],
        imageUrl: "assets/5.png",
        demoUrl: "",
        githubUrl: "https://github.com/Saravanan-mc/wellness",
        youtubeUrl: "https://youtu.be/5KWmtJobHoQ",
        figmaUrl: ""
    },
    {
        title: "Trip App",
        description: "A mobile travel and accommodation booking app UI designed for seamless trip planning and reservations.",
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
        description: "A modern car marketplace and dealership platform UI showcasing vehicles with a clean and user-friendly design.",
        category: "Design",
        tags: ["Figma", "UI/UX", "Marketplace"],
        imageUrl: "assets/7.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/0Slu4H9BpPfT45m6XjTLtC/AutoFinder"
    },
    {
        title: "The Golden Spoon",
        description: "An elegant restaurant mobile app UI focused on menu exploration and table booking with a premium visual experience.",
        category: "Design",
        tags: ["Figma", "Restaurant App", "Mobile UI"],
        imageUrl: "assets/8.png",
        demoUrl: "",
        githubUrl: "",
        youtubeUrl: "",
        figmaUrl: "https://www.figma.com/design/GvPqqL6VjWItKjR6pZdJUt/The-Golden-Spoon"
    }
];

// Render Projects Function
function renderProjects(projectsArray) {
    const wrapper = document.getElementById("projects-wrapper");
   wrapper.innerHTML = projectsArray.length === 0 ?
        `<div class="swiper-slide"><div class="glass-card project-card"><div class="project-content"><p>No projects found in this category.</p></div></div></div>` :
        projectsArray.map(project => `
            <div class="swiper-slide">
                <div class="glass-card project-card">
                    <div class="project-image-placeholder" style="background-image: url('${project.imageUrl}');">
                        <i class=""></i>
                    </div>
                    <div class="project-content">
                        <div>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                        </div>
                        <div class="project-bottom">
                            <div class="project-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
                            <p><strong>Links</strong>
                            <div class="project-links">
                                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
                                ${project.youtubeUrl ? `<a href="${project.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="YouTube Demo"><i class="fab fa-youtube"></i></a>` : ''}
                                ${project.figmaUrl ? `<a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Figma"><i class="fab fa-figma"></i></a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
}

// Swiper Initialization
let swiperInstance = null;
function initializeSwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }
    
    const slides = document.querySelectorAll("#projects-wrapper .swiper-slide");
    if (slides.length === 0) return;
    
    swiperInstance = new Swiper(".swiper-container", {
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
            type: 'bullets'  // Ensure bullets type
        },
        slidesPerView: 1.1,
        spaceBetween: 16,
        breakpoints: {
            480: { 
                slidesPerView: 1.2,
                spaceBetween: 16
            },
            640: { 
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            768: { 
                slidesPerView: 2.2,
                spaceBetween: 24
            },
            1024: { 
                slidesPerView: 3.2,
                spaceBetween: 24
            }
        },
        // Custom navigation for bottom buttons
        navigation: {
            nextEl: '.swiper-button-next-bottom',
            prevEl: '.swiper-button-prev-bottom',
        },
        // Update bottom pagination text
        on: {
            init: function() {
                updateBottomPagination(this);
            },
            slideChange: function() {
                updateBottomPagination(this);
            },
            // Also update after loop creation
            afterInit: function() {
                updateBottomPagination(this);
            }
        }
    });
    
    // Function to update bottom pagination text
    function updateBottomPagination(swiper) {
        const paginationBottom = document.querySelector('.swiper-pagination-bottom');
        if (paginationBottom) {
            // Get the real number of unique slides
            let totalSlides = 0;
            let uniqueSlides = 0;
            
            // Count only unique slides (excluding duplicates in loop mode)
            swiper.slides.forEach((slide, index) => {
                const isClone = slide.classList.contains('swiper-slide-duplicate');
                if (!isClone) {
                    uniqueSlides++;
                }
                totalSlides++;
            });
            
            // In loop mode, subtract the duplicate slides
            const realTotal = swiper.params.loop ? uniqueSlides : totalSlides;
            
            // Get current real index (1-based)
            const current = swiper.params.loop ? 
                swiper.realIndex + 1 : 
                swiper.activeIndex + 1;
            
            paginationBottom.textContent = `${current} / ${realTotal}`;
        }
    }
}
// Filter Handler
function handleFilter(category) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });
    
    const filtered = category === "All" ? allProjects : allProjects.filter(p => p.category === category);
    renderProjects(filtered);
    initializeSwiper();
}

// Theme Toggle Function
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Update icons
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
}

// Mobile Menu Functions
function openMobileMenu() {
    document.getElementById("mobile-menu-panel").classList.add("active");
    document.getElementById("mobile-menu-overlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    document.getElementById("mobile-menu-panel").classList.remove("active");
    document.getElementById("mobile-menu-overlay").classList.remove("active");
    document.body.style.overflow = "";
}

  const text = `Hi, I'm Saravanan M — a tech enthusiast, web developer, and problem solver who builds fast, accessible, and visually engaging websites using modern JavaScript frameworks and thoughtful UI design. I love turning ideas into interactive digital experiences.`;

    const speed = 35; // typing speed in ms
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    window.addEventListener("load", typeText);
    
// Scroll Animation Observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .bento-item, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Animate progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animate')) {
            bar.classList.add('animate');
        }
    });
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    // Load Theme
    const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    document.querySelectorAll(".theme-btn i").forEach(icon => {
        icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
    
    // Projects Setup
    const filterContainer = document.getElementById("project-filter-buttons");
    const categories = ["All", ...new Set(allProjects.map(p => p.category))];
    
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = cat.replace("-", " ");
        btn.dataset.category = cat;
        btn.addEventListener("click", () => handleFilter(cat));
        filterContainer.appendChild(btn);
    });
    
    handleFilter("All");
    
    // Theme Toggles
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.addEventListener("click", toggleTheme);
    });
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    
    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener("click", closeMobileMenu);
    
    document.querySelectorAll(".mobile-nav-links a").forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });
    
    // Initialize Scroll Animations
    initScrollAnimations();
    
    // AOS Init
    if (typeof AOS !== "undefined") {
        AOS.init({ 
            offset: 100, 
            duration: 1000, 
            easing: "ease-out-cubic", 
            once: true 
        });
    }
    
    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }
        });
    });
    
    // Progress bars animation on scroll
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check
    
    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll(
            '.btn, .skill-card, .project-card, .contact-item, ' +
            '.hero-socials a, .contact-socials a, .social-icon'
        );
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });
    }
});





