export type Language = 'EN' | 'TR';

export const translations = {
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
                    image: "/images/weather-app.png", // ضع مسار صورتك هنا
                    projectURL: "https://your-weather-app.vercel.app",
                    githubURL: "https://github.com/your-username/weather-app",
                    isComingSoon: false,
                },
                {
                    id: "mini-dashboard",
                    title: "Mini Dashboard",
                    description: "Modern analytics and product management dashboard featuring category filtering, state management, and SPA routing.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "React Router"],
                    image: "/images/mini-dashboard.png",
                    projectURL: "https://mini-dashboard-3pp1.vercel.app",
                    githubURL: "https://github.com/your-username/Mini-Dashboard",
                    isComingSoon: false,
                },
                {
                    id: "polypack",
                    title: "PolyPack - FIBC Industrial Catalog",
                    description: "A commercial product catalog for industrial Big Bags (FIBC) featuring responsive layout, multi-language support, and direct contact integration.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
                    image: "/images/polypack-image.png", // مسار صورة المشروع
                    projectURL: "https://polypack-big-bag.vercel.app", // أو الرابط المنشور لديك
                    githubURL: "https://github.com/ibrahim1il1/PolyPack-Big-Bag",
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
        }
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
            badge: "Junior Frontend Pozisyonlarına Açık", // أدق تعبير مستخدم في سوق العمل التركي
            title1: "Modern & responsive",
            titleGradient: "web uygulamaları geliştiriyorum", // يعطي معنى "أقوم ببناء وتطوير تطبيقات ويب حديثة ومتجاوبة"
            intro: "Merhaba, ben",
            description: "React, TypeScript ve Tailwind CSS ile temiz, modern ve responsive kullanıcı arayüzleri geliştiren Junior Frontend Geliştirici.",
            exploreBtn: "Projelerimi İncele", // أو "Projeleri Keşfet" كلاهما ممتاز
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
                    projectURL: "https://your-weather-app.vercel.app",
                    githubURL: "https://github.com/your-username/weather-app",
                    isComingSoon: false,
                },
                {
                    id: "mini-dashboard",
                    title: "Mini Yönetim Paneli",
                    description: "Kategori filtreleme, durum yönetimi ve SPA yönlendirmesi içeren modern ürün ve analiz paneli.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "React Router"],
                    image: "/images/mini-dashboard.png",
                    projectURL: "https://mini-dashboard-3pp1.vercel.app",
                    githubURL: "https://github.com/your-username/Mini-Dashboard",
                    isComingSoon: false,
                },
                {
                    id: "polypack",
                    title: "PolyPack - Endüstriyel Big Bag Kataloğu",
                    description: "Endüstriyel FIBC Big Bag ambalajları için geliştirilmiş, çok dilli destek ve doğrudan iletişim entegrasyonu sunan ticari ürün kataloğu.",
                    skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
                    image: "/images/polypack-image.png",
                    projectURL: "https://polypack-big-bag.vercel.app",
                    githubURL: "https://github.com/ibrahim1il1/PolyPack-Big-Bag",
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
        }


    }
};