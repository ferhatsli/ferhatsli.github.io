// Language translations
const translations = {
    en: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        'about-title': 'About Me',
        'about-desc': 'I am a final year Software Engineering student at İstinye University. I am a software developer specialized in WordPress and iOS development.',
        'skills-title': 'Skills',
        'experience-title': 'Experience',
        position: 'WordPress Developer & iOS Developer',
        'projects-title': 'Projects',
        'projects-coming-soon': 'Coming soon...',
        role: 'WordPress Developer & iOS Developer'
    },
    tr: {
        about: 'Hakkımda',
        skills: 'Yetenekler',
        experience: 'Deneyim',
        projects: 'Projeler',
        'about-title': 'Hakkımda',
        'about-desc': 'İstinye Üniversitesi\'nde Yazılım Mühendisliği son sınıf öğrencisiyim. WordPress ve iOS geliştirme konularında uzmanlaşmış bir yazılım geliştiriciyim.',
        'skills-title': 'Yetenekler',
        'experience-title': 'Deneyim',
        position: 'WordPress Geliştirici & iOS Geliştirici',
        'projects-title': 'Projeler',
        'project-desc': 'Modern ve duyarlı kişisel website',
        role: 'WordPress Geliştirici & iOS Geliştirici'
    }
};

let currentLang = 'tr';

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Language toggle
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(section);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
    }
});

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});
