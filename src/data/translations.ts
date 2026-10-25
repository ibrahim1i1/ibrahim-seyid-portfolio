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
        hero: {
            badge: "Available for Junior Frontend Roles",
            title: "Building modern & responsive web applications",
            description: "A Junior Frontend Developer passionate about crafting clean, interactive, and responsive user interfaces using React, TypeScript, and Tailwind CSS.",
            contactBtn: "Contact Me",
        },
        contact: {
            badge: "Contact",
            title: "Get In Touch",
            subtitle: "Have a project in mind, a job opportunity, or a general question? Fill out the form below.",
            nameLabel: "Your Name",
            emailLabel: "Email Address",
            phoneLabel: "Phone Number",
            reasonLabel: "Reason / Purpose",
            messageLabel: "Message",
            sendBtn: "Send Message",
            sending: "Sending...",
            success: "Thank you! Your message has been sent successfully.",
            error: "Something went wrong. Please try again later.",
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
        hero: {
            badge: "Junior Frontend Pozisyonları İçin Uygun",
            title: "Modern ve duyarlı web uygulamaları geliştiriyorum",
            description: "React, TypeScript ve Tailwind CSS kullanarak temiz, etkileşimli ve modern kullanıcı arayüzleri geliştirmeye odaklanan Junior Frontend Geliştirici.",
            contactBtn: "İletişime Geç",
        },
        contact: {
            badge: "İletişim",
            title: "İletişime Geçin",
            subtitle: "Aklınızda bir proje mi var, bir iş teklifi veya genel bir soru mu? Aşağıdaki formu doldurun.",
            nameLabel: "Adınız Soyadınız",
            emailLabel: "E-posta Adresi",
            phoneLabel: "Telefon Numarası",
            reasonLabel: "İletişim Nedeni",
            messageLabel: "Mesajınız",
            sendBtn: "Mesaj Gönder",
            sending: "Gönderiliyor...",
            success: "Teşekkürler! Mesajınız başarıyla gönderildi.",
            error: "Bir sorun oluştu. Lütfen tekrar deneyin.",
        }
    }
};