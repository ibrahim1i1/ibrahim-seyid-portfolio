import type { PortfolioTranslations } from "../types";

export const translations: PortfolioTranslations = {
    EN: {
        intro: {
            skip: "Skip Intro",
        },
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
        home: {
            badge: "Available for Junior Frontend Roles",
            title1: "Building modern &",
            titleGradient: "Responsive web applications",
            intro: "Hi, I'm",
            description: "A Junior Frontend Developer passionate about creating clean, interactive, and responsive user interfaces using React, TypeScript, and Tailwind CSS.",
            exploreBtn: "Explore Projects",
            contactBtn: "Contact Me",
            techStack: "TECH STACK:",
            responsiveTitle: "Responsive Design",
            responsiveSub: "Mobile & Desktop",
        },
        about: {
            badge: "About Me",
            title: "Engineering clean & practical web experiences",
            subtitle: "Passionate about bridging visual design with performant frontend architecture.",
            cardTitle: "Who I am",
            cardLead: "I am a focused junior Frontend Developer with a strong dedication to crafting functional, accessible, and clean digital interfaces.",
            cardP1: "My daily focus revolves around building responsive web applications using React and TypeScript, styling with Tailwind CSS, and writing clean, structured code that is easy to understand and maintain.",
            cardP2: "I enjoy transforming UI concepts into reality, paying close attention to user experience, performance, and cross-browser consistency.",
            locationLabel: "LOCATION",
            locationVal: "Turkey",
            roleLabel: "ROLE",
            roleVal: "Open to Work",
            highlights: [
                {
                    title: "Frontend Development",
                    description: "Building interactive and component-driven user interfaces using React, TypeScript, and modern JavaScript standards."
                },
                {
                    title: "Responsive & Pixel-Perfect",
                    description: "Translating designs into clean, fluid mobile-first layouts using Tailwind CSS that work across all screen sizes."
                },
                {
                    title: "Workflow & Tooling",
                    description: "Managing versions with Git and GitHub, integrating REST APIs, and following clean folder structures for maintainable code."
                },
                {
                    title: "Growth & Dedication",
                    description: "Continuously self-learning, improving problem-solving abilities, and eager to contribute to collaborative dev teams."
                }
            ]
        },
        projects: {
            badgeNumber: "02.",
            badgeText: "Featured Projects",
            title: "Selected Works & Applications",
            description: "Real-world web projects focusing on performance, responsive design, and clean architecture.",
            previewText: "preview.app",
            liveDemoText: "Live Demo",
            comingSoonText: "Coming Soon",
            sourceCodeText: "Source",
            items: [
                {
                    id: "weather-app",
                    title: "Live Weather Card",
                    description: "Responsive weather widget fetching live atmospheric data from Open-Meteo API with dark/light mode persistence.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "REST API"],
                    image: "/images/weather-app.png",
                    projectURL: "https://weather-app-tau-dusky-27.vercel.app/",
                    githubURL: "https://github.com/ibrahim1i1/Weather-App",
                    isComingSoon: false,
                },
                {
                    id: "mini-dashboard",
                    title: "Mini Dashboard",
                    description: "Modern analytics and product management dashboard featuring category filtering, state management, and SPA routing.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "React Router"],
                    image: "/images/mini-dashboard.png",
                    projectURL: "https://mini-dashboard-3pp1.vercel.app",
                    githubURL: "https://github.com/ibrahim1i1/Mini-Dashboard",
                    isComingSoon: false,
                },
                {
                    id: "polypack",
                    title: "PolyPack - FIBC Industrial Catalog",
                    description: "A commercial product catalog for industrial Big Bags (FIBC) featuring responsive layout, multi-language support, and direct contact integration.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
                    image: "/images/polypack-image.png",
                    projectURL: "https://poly-pack-big-bag.vercel.app/",
                    githubURL: "https://github.com/ibrahim1i1/PolyPack-Big-Bag",
                    isComingSoon: false,
                },
                {
                    id: "ecommerce",
                    title: "E-Commerce Platform",
                    description: "Full-featured online store with cart flow, product catalog, and responsive checkout interface.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
                    image: "https://avatars.mds.yandex.net/i?id=16a6cd569f2c4f0d0639f15abdbe8d95f2b71547-5220476-images-thumbs&n=13",
                    projectURL: "",
                    githubURL: "",
                    isComingSoon: true,
                },
            ],
        },
        skills: {
            badgeNumber: "03.",
            badgeText: "Technical Skills",
            title: "Technologies & Toolkit",
            description: "A focused stack of modern tools and libraries I leverage to build scalable, high-performance web interfaces.",
            verifiedText: "Verified in projects",
            activeStatus: "Active",
            categories: [
                {
                    id: "core",
                    title: "Core Technologies",
                    subtitle: "Modern JavaScript & Frontend Fundamentals",
                    skills: [
                        { name: "React", description: "SPA & Hooks" },
                        { name: "TypeScript", description: "Type Safety" },
                        { name: "JavaScript", description: "ES6+ Logic" },
                        { name: "HTML5", description: "Semantic UI" },
                        { name: "CSS3", description: "Modern Styling" },
                    ],
                },
                {
                    id: "ui",
                    title: "UI & Styling",
                    subtitle: "Responsive Systems & Design Architecture",
                    skills: [
                        { name: "Tailwind CSS", description: "Utility-first" },
                        { name: "Responsive Layouts", description: "Mobile-First" },
                        { name: "Component UI", description: "Reusability" },
                        { name: "State Flow", description: "Clean Logic" },
                        { name: "Cross-Browser", description: "Consistency" },
                    ],
                },
                {
                    id: "tools",
                    title: "Workflow & Tools",
                    subtitle: "Version Controls, APIs & Deployments",
                    skills: [
                        { name: "Git & GitHub", description: "Version control" },
                        { name: "REST APIs", description: "Data Fetching" },
                        { name: "Vite", description: "Fast Building" },
                        { name: "Vercel", description: "Deployment" },
                        { name: "VS Code", description: "Primary Editor" },
                    ],
                },
            ],
        },
        contact: {
            badgeNumber: "04.",
            badgeText: "Contact",
            title: "Get In Touch",
            description: "Have a project in mind, a job opportunity, or a general question? Fill out the form below.",
            labels: {
                name: "Your Name",
                email: "Email Address",
                phone: "Phone Number",
                reason: "Reason / Purpose",
                message: "Message",
            },
            placeholders: {
                name: "Ibrahim Seyid",
                email: "client@example.com",
                phone: "+90 5xx xxx xx xx",
                message: "Describe your project, timeline, or any questions...",
            },
            reasons: {
                select: "Select reason...",
                project: "New Project / Freelance",
                job: "Job Opportunity / Role",
                consultation: "General Consultation",
                other: "Other",
            },
            status: {
                success: "Thank You! your message has been sent successfully.",
                error: "Something went wrong. Please try again or email directly.",
            },
            submitBtn: {
                idle: "Send Message",
                sending: "Sending...",
            },
        },
        footer: {
            role: "Frontend Developer",
            rights: "© 2026 Ibrahim Seyid. All rights reserved.",
            crafted: "Crafted with React & Tailwind CSS",
            backToTop: "Back to top",
        },
    },
    TR: {
        intro: {
            skip: "Tanıtımı Geç",
        },
        nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            projects: "Projeler",
            skills: "Yetenekler",
            contact: "İletişim",
        },
        home: {
            badge: "Junior Frontend Pozisyonlarına Açık",
            title1: "Modern & responsive",
            titleGradient: "web uygulamaları geliştiriyorum",
            intro: "Merhaba, ben",
            description: "React, TypeScript ve Tailwind CSS ile temiz, modern ve responsive kullanıcı arayüzleri geliştiren Junior Frontend Geliştirici.",
            exploreBtn: "Projelerimi İncele",
            contactBtn: "İletişime Geç",
            techStack: "TEKNOLOJİLER:",
            responsiveTitle: "Responsive Tasarım",
            responsiveSub: "Mobil & Masaüstü",
        },
        about: {
            badge: "Hakkımda",
            title: "Temiz ve işlevsel web deneyimleri geliştiriyorum",
            subtitle: "Görsel tasarımı yüksek performanslı frontend mimarisiyle birleştirmeye odaklanıyorum.",
            cardTitle: "Ben Kimim?",
            cardLead: "Kullanıcı dostu, erişilebilir ve temiz dijital arayüzler geliştirmeye odaklanmış Junior Frontend Geliştiriciyim.",
            cardP1: "Günlük çalışmalarımda React ve TypeScript ile responsive web uygulamaları geliştirmeye, Tailwind CSS ile stillendirmeye ve kolayca sürdürülebilir, modüler kodlar yazmaya odaklanıyorum.",
            cardP2: "Tasarım konseptlerini hayata geçirmeyi, kullanıcı deneyimine (UX), performansa ve tarayıcı uyumluluğuna özen göstermeyi seviyorum.",
            locationLabel: "KONUM",
            locationVal: "Türkiye",
            roleLabel: "DURUM",
            roleVal: "İş Fırsatlarına Açık",
            highlights: [
                {
                    title: "Frontend Geliştirme",
                    description: "React, TypeScript ve modern JavaScript standartlarıyla bileşen tabanlı, etkileşimli arayüzler geliştirme."
                },
                {
                    title: "Responsive & Pixel-Perfect",
                    description: "Tailwind CSS ile tüm ekran boyutlarında kusursuz ve akıcı çalışan mobile-first tasarımlar üretme."
                },
                {
                    title: "İş Akışı ve Araçlar",
                    description: "Git ve GitHub ile sürüm kontrolü, REST API entegrasyonu ve sürdürülebilir, modüler dosya mimarisi."
                },
                {
                    title: "Gelişim & Tutku",
                    description: "Sürekli öğrenme, problem çözme becerilerini geliştirme ve geliştirici ekipleriyle iş birliğine hazır olma."
                }
            ]
        },
        projects: {
            badgeNumber: "02.",
            badgeText: "Öne Çıkan Projeler",
            title: "Seçilmiş Çalışmalar ve Uygulamalar",
            description: "Performans, duyarlı tasarım ve temiz mimariye odaklanan gerçek dünya web projeleri.",
            previewText: "preview.app",
            liveDemoText: "Canlı Demo",
            comingSoonText: "Yakında",
            sourceCodeText: "Kaynak Kod",
            items: [
                {
                    id: "weather-app",
                    title: "Canlı Hava Durumu Kartı",
                    description: "Open-Meteo API ile anlık hava verilerini getiren, koyu/açık tema kayıt desteğine sahip duyarlı hava durumu arayüzü.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "REST API"],
                    image: "/images/weather-app.png",
                    projectURL: "https://weather-app-tau-dusky-27.vercel.app/",
                    githubURL: "https://github.com/ibrahim1i1/Weather-App",
                    isComingSoon: false,
                },
                {
                    id: "mini-dashboard",
                    title: "Mini Yönetim Paneli",
                    description: "Kategori filtreleme, durum yönetimi ve SPA yönlendirmesi içeren modern ürün ve analiz paneli.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "React Router"],
                    image: "/images/mini-dashboard.png",
                    projectURL: "https://mini-dashboard-3pp1.vercel.app",
                    githubURL: "https://github.com/ibrahim1i1/Mini-Dashboard",
                    isComingSoon: false,
                },
                {
                    id: "polypack",
                    title: "PolyPack - Endüstriyel Big Bag Kataloğu",
                    description: "Endüstriyel FIBC Big Bag ambalajları için geliştirilmiş, çok dilli destek ve doğrudan iletişim entegrasyonu sunan ticari ürün kataloğu.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
                    image: "/images/polypack-image.png",
                    projectURL: "https://poly-pack-big-bag.vercel.app/",
                    githubURL: "https://github.com/ibrahim1i1/PolyPack-Big-Bag",
                    isComingSoon: false,
                },
                {
                    id: "ecommerce",
                    title: "E-Ticaret Platformu",
                    description: "Sepet akışı, ürün kataloğu ve duyarlı ödeme arayüzüne sahip kapsamlı online alışveriş platformu.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
                    image: "https://avatars.mds.yandex.net/i?id=16a6cd569f2c4f0d0639f15abdbe8d95f2b71547-5220476-images-thumbs&n=13",
                    projectURL: "",
                    githubURL: "",
                    isComingSoon: true,
                },
            ],
        },
        skills: {
            badgeNumber: "03.",
            badgeText: "Teknik Beceriler",
            title: "Teknolojiler ve Araçlar",
            description: "Ölçeklenebilir, yüksek performanslı web arayüzleri geliştirmek için kullandığım modern araçlar ve kütüphaneler.",
            verifiedText: "Projelerde uygulandı",
            activeStatus: "Aktif",
            categories: [
                {
                    id: "core",
                    title: "Temel Teknolojiler",
                    subtitle: "Modern JavaScript ve Frontend Temelleri",
                    skills: [
                        { name: "React", description: "SPA ve Hook Yapısı" },
                        { name: "TypeScript", description: "Tip Güvenliği" },
                        { name: "JavaScript", description: "ES6+ Mantığı" },
                        { name: "HTML5", description: "Semantik Arayüz" },
                        { name: "CSS3", description: "Modern Stil" },
                    ],
                },
                {
                    id: "ui",
                    title: "Arayüz ve Stil",
                    subtitle: "Duyarlı Sistemler ve Tasarım Mimarisi",
                    skills: [
                        { name: "Tailwind CSS", description: "Utility-First" },
                        { name: "Duyarlı Tasarımlar", description: "Mobil Öncelikli" },
                        { name: "Bileşen Arayüzü", description: "Tekrar Kullanılabilirlik" },
                        { name: "Durum Akışı", description: "Temiz Mantık" },
                        { name: "Tarayıcı Uyumluluğu", description: "Tutarlılık" },
                    ],
                },
                {
                    id: "tools",
                    title: "İş Akışı ve Araçlar",
                    subtitle: "Sürüm Kontrolü, API'ler ve Dağıtım",
                    skills: [
                        { name: "Git & GitHub", description: "Sürüm Kontrolü" },
                        { name: "REST API'ler", description: "Veri Entegrasyonu" },
                        { name: "Vite", description: "Hızlı Derleme" },
                        { name: "Vercel", description: "Canlıya Alma" },
                        { name: "VS Code", description: "Ana Kod Editörü" },
                    ],
                },
            ],
        },
        contact: {
            badgeNumber: "04.",
            badgeText: "İletişim",
            title: "İletişime Geçin",
            description: "Aklınızda bir proje mi var, bir iş teklifi veya genel bir soru mu? Aşağıdaki formu doldurun.",
            labels: {
                name: "Adınız Soyadınız",
                email: "E-posta Adresi",
                phone: "Telefon Numarası",
                reason: "İletişim Nedeni",
                message: "Mesajınız",
            },
            placeholders: {
                name: "İbrahim Seyid",
                email: "musteri@ornek.com",
                phone: "+90 5xx xxx xx xx",
                message: "Projenizi, teslim süresini veya sorularınızı belirtin...",
            },
            reasons: {
                select: "Neden seçin...",
                project: "Yeni Proje / Freelance",
                job: "İş Teklifi / Pozisyon",
                consultation: "Genel Danışmanlık",
                other: "Diğer",
            },
            status: {
                success: "Teşekkürler! Mesajınız başarıyla gönderildi.",
                error: "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
            },
            submitBtn: {
                idle: "Mesaj Gönder",
                sending: "Gönderiliyor...",
            },
        },
        footer: {
            role: "Frontend Geliştirici",
            rights: "© 2026 İbrahim Seyid. Tüm hakları saklıdır.",
            crafted: "React ve Tailwind CSS ile geliştirildi",
            backToTop: "Yukarı çık",
        },
    }
};