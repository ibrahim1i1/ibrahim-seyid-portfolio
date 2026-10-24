import type { Project } from "../types"
export const projects: Project[] = [
    {
        image: '/images/mini-dashboard.png',
        title: 'Mini Admin Dashboard',
        description: 'A sleek, production-ready admin dashboard designed to deliver a fast and intuitive management interface. Built as a Single Page Application (SPA), the project integrates with external REST APIs to manage products and view analytics, featuring custom responsive navigation tailored for both desktop and mobile users.',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Rest API', 'React Router'],
        projectURL: 'https://mini-dashboard-3pp1.vercel.app/',
        githubURL: 'https://github.com/ibrahim1i1/Mini-Dashboard.git',
    },
    {
        image: '/images/polypack-image.png',
        title: 'PolyPack — Industrial FIBC Solutions',
        description: 'A responsive, high-performance B2B product catalog for industrial FIBC Big Bags, featuring type-safe architecture and optimized mobile-first UI.',
        skills: ['React', 'TypeScript', 'Tailwind CSS',],
        projectURL: 'https://poly-pack-big-bag.vercel.app/',
        githubURL: 'https://github.com/ibrahim1i1/PolyPack-Big-Bag.git',
    },
    {
        image: '/images/weather-app.png',
        title: 'Live Weather Card',
        description: 'A responsive weather widget built with React, TypeScript, and Tailwind CSS. Fetches real-time weather data using the Open-Meteo API, with a custom light/dark theme switch and localStorage persistence.',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Rest API'],
        projectURL: 'https://weather-app-tau-dusky-27.vercel.app/',
        githubURL: 'https://github.com/ibrahim1i1/Weather-App.git',
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=16a6cd569f2c4f0d0639f15abdbe8d95f2b71547-5220476-images-thumbs&n=13',
        title: 'E-Commerce Platform',
        description: 'A modern online storefront interface featuring product catalog filtering, cart management, and responsive checkout UI.',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Rest API'],
        projectURL: '',
        githubURL: '',
    }
]