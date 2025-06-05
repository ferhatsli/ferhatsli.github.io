// Language translations
const translations = {
    en: {
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
        'skills-title': 'Technical Skills',
        'experience-title': 'Experience',
        'projects-title': 'Projects',
        'contact-title': 'Contact',
        'phone-label': 'Phone',
        'email-label': 'Email',
        'projects-coming-soon': 'Coming soon...',
        role: 'Software Engineer',
        
        // Experience Section
        'flalingo-title': 'Software Engineer Intern',
        'flalingo-company': 'Flalingo',
        'flalingo-date': '02/2025 - 04/2025 | Remote',
        'flalingo-desc': '<ul><li>Developed features for AI-powered exercise platform using React, Laravel, and Python</li><li>Implemented transcript analysis for automated exercise generation, enhancing user engagement</li><li>Contributed to full-cycle product development from MVP to platform integration</li></ul>',
        
        'netvar-title': 'Mobile Developer Intern',
        'netvar-company': 'Netvar Elektronik',
        'netvar-date': '08/2024 - 10/2024 | Istanbul',
        'netvar-desc': '<ul><li>Built a cross-platform movie discovery app using React Native and TypeScript</li><li>Integrated Supabase for authentication and data management</li><li>Designed infinite scrolling, dark mode, and seamless navigation features</li></ul>',
        
        'freelance-title': 'Software Developer',
        'freelance-company': 'Freelance',
        'freelance-date': '2021 - 2024 | Remote',
        'freelance-desc': '<ul><li>Delivered web and mobile apps using React Native, Swift, React.js, TypeScript, and WordPress</li><li>Translated client needs into functional and user-friendly solutions</li><li>Handled all client communication, improving interpersonal and negotiation skills</li><li>Took initiative under tight deadlines, strengthening problem-solving and time management</li></ul>',
        
        'dede-title': 'Web Developer',
        'dede-company': 'Dede Group',
        'dede-date': '09/2022 - 04/2024 | Istanbul',
        'dede-desc': '<ul><li>Developed and maintained corporate websites using WordPress, HTML5, and CSS3</li><li>Managed hosting and domain operations for reliable performance</li><li>Customized WordPress themes and improved mobile SEO performance</li></ul>',
        
        // Projects Section
        'aieg-title': 'AI-Powered Exercise Generator Platform',
        'aiscribe-title': 'AiScribe - AI Agent-Supported Prompt Creation',
        'alif-title': 'Alif iOS App',
        
        'aieg-desc': '<ul><li>AI-assisted exercise generation platform developed as part of Flalingo Internal Project</li><li>Built using React, Laravel and Python technologies</li><li>Developed transcript analysis and automated exercise generation features</li><li>Successfully integrated into Flalingo\'s main platform</li></ul>',
        
        'aiscribe-desc': '<ul><li>Developed as Python (FastAPI) backend and Swift (SwiftUI) iOS application</li><li>Created intelligent multi-agent system using AutoGen framework for advanced prompt analysis</li><li>Developed iOS application with MVVM architecture</li><li>Added dark mode support and real-time content synchronization features</li><li>Integrated multiple AI models for dynamic content generation and automated prompt expansion</li></ul>',
        
        'alif-desc': '<ul><li>Islamic Assistant app developed with SwiftUI</li><li>Features include prayer times, Qibla direction, and AI chatbot</li><li>Integrated RevenueCat for subscription system</li><li>Integrated OneSignal for push notification system</li><li>Successfully published on the App Store</li></ul>',
        
        'frontend-title': 'Frontend Development',
        'backend-title': 'Backend Basics',
        'ai-title': 'AI Integration',
        'tools-title': 'Tools & Platforms',
        'languages-title': 'Languages',
    },
    tr: {
        skills: 'Yetenekler',
        experience: 'Deneyim',
        projects: 'Projeler',
        contact: 'İletişim',
        'skills-title': 'Teknik Yetenekler',
        'experience-title': 'Deneyim',
        'projects-title': 'Projeler',
        'contact-title': 'İletişim',
        'phone-label': 'Telefon',
        'email-label': 'E-mail',
        'project-desc': 'Modern ve duyarlı kişisel website',
        role: 'Yazılım Mühendisi',
        
        // Experience Section
        'flalingo-title': 'Yazılım Mühendisi Stajyeri',
        'flalingo-company': 'Flalingo',
        'flalingo-date': '02/2025 - 04/2025 | Uzaktan',
        'flalingo-desc': '<ul><li>AI-powered egzersiz platformu için React, Laravel ve Python kullanarak özellikler geliştirdim</li><li>Kullanıcı etkileşimini artıran otomatik egzersiz üretimi için transkript analizi uyguladım</li><li>MVP\'den platform entegrasyonuna kadar tam döngü ürün geliştirmeye katkıda bulundum</li></ul>',
        
        'netvar-title': 'Mobil Geliştirici Stajyeri',
        'netvar-company': 'Netvar Elektronik',
        'netvar-date': '08/2024 - 10/2024 | İstanbul',
        'netvar-desc': '<ul><li>React Native ve TypeScript kullanarak cross-platform film keşif uygulaması geliştirdim</li><li>Kimlik doğrulama ve veri yönetimi için Supabase entegrasyonunu gerçekleştirdim</li><li>Sonsuz kaydırma, karanlık mod ve kesintisiz navigasyon özellikleri tasarladım</li></ul>',
        
        'freelance-title': 'Yazılım Geliştirici',
        'freelance-company': 'Serbest',
        'freelance-date': '2021 - 2024 | Uzaktan',
        'freelance-desc': '<ul><li>React Native, Swift, React.js, TypeScript ve WordPress kullanarak web ve mobil uygulamalar geliştirdim</li><li>Müşteri ihtiyaçlarını fonksiyonel ve kullanıcı dostu çözümlere dönüştürdüm</li><li>Kişilerarası iletişim ve müzakere becerilerini geliştirerek tüm müşteri iletişimini yönettim</li><li>Sıkı teslim tarihleri altında inisiyatif alarak problem çözme ve zaman yönetimi becerilerimi güçlendirdim</li></ul>',
        
        'dede-title': 'Web Geliştirici',
        'dede-company': 'Dede Group',
        'dede-date': '09/2022 - 04/2024 | İstanbul',
        'dede-desc': '<ul><li>WordPress, HTML5 ve CSS3 kullanarak kurumsal web siteleri geliştirdim ve bakımını yaptım</li><li>Güvenilir performans için hosting ve domain operasyonlarını yönettim</li><li>WordPress temalarını özelleştirdim ve mobil SEO performansını iyileştirdim</li></ul>',
        
        // Projects Section
        'aieg-title': 'Yapay Zeka Destekli Egzersiz Oluşturma Platformu',
        'aiscribe-title': 'AiScribe - Yapay Zeka Destekli Prompt Oluşturma',
        'alif-title': 'Alif iOS Uygulaması',
        
        'aieg-desc': '<ul><li>Flalingo Internal Project kapsamında geliştirilen yapay zeka destekli egzersiz oluşturma platformu</li><li>React, Laravel ve Python teknolojileri kullanıldı</li><li>Transkript analizi ve otomatik egzersiz oluşturma özellikleri geliştirildi</li><li>Flalingo\'nun ana platformuna başarıyla entegre edildi</li></ul>',
        
        'aiscribe-desc': '<ul><li>Python (FastAPI) backend ve Swift (SwiftUI) iOS uygulaması olarak geliştirildi</li><li>AutoGen framework kullanılarak gelişmiş prompt analizi yapan akıllı çoklu-ajan sistemi oluşturuldu</li><li>MVVM mimarisi ile iOS uygulaması geliştirildi</li><li>Karanlık mod desteği ve gerçek zamanlı içerik senkronizasyonu özellikleri eklendi</li><li>Dinamik içerik üretimi ve otomatik prompt genişletme için çoklu AI modelleri entegre edildi</li></ul>',
        
        'alif-desc': '<ul><li>SwiftUI ile geliştirilen İslami Asistan uygulaması</li><li>Namaz vakitleri, kıble yönü ve yapay zeka sohbet botu özellikleri</li><li>RevenueCat ile abonelik sistemi entegrasyonu</li><li>OneSignal ile push bildirim sistemi entegrasyonu</li><li>App Store\'da başarıyla yayınlandı</li></ul>',
        
        'frontend-title': 'Frontend Geliştirme',
        'backend-title': 'Backend Temelleri',
        'ai-title': 'Yapay Zeka Entegrasyonu',
        'tools-title': 'Araçlar & Platformlar',
        'languages-title': 'Diller',
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
            if (element.tagName === 'UL') {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
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
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    // Menü linklerine tıklandığında menüyü kapat
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sayfa herhangi bir yerine tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    });
});

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});
