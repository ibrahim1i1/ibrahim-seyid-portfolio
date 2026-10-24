import type { SkillCategory } from "../types";
import { Code2, Layers, Wrench } from "lucide-react";

export const skillsData: SkillCategory[] = [
    {
        title: 'Core Technologies',
        subtitle: 'Modern JavaScript & Frontend Fundamentals',
        icon: <Code2 className="w-6 h-6 text-cyan-400" />,
        skills: [
            { name: 'React', description: 'SPA & Hooks' },
            { name: 'TypeScript', description: 'Type Safety' },
            { name: 'JavaScript', description: 'ES6+ Logic' },
            { name: 'HTML5', description: 'Semantic UI' },
            { name: 'CSS3', description: 'Modern Styling' }
        ]
    },{
        title: 'UI & Styling',
        subtitle: 'Responsive Systems & Design Architecture',
        icon: <Layers className="w-6 h-6 text-cyan-400" />,
        skills: [
            { name: 'Tailwind CSS', description: 'Utility-first' },
            { name: 'Responsive Layouts', description: 'Mobile-First' },
            { name: 'Component UI', description: 'Reusability' },
            { name: 'State Flow', description: 'Clean Logic'},
            { name: 'Cross-Browser', description: 'Consistency'}
        ]
    },{
        title: 'Workflow & Tools',
        subtitle: 'Version Controls, APIs & Deployments',
        icon: <Wrench className="w-6 h-6 text-cyan-400" />,
        skills: [
            { name: 'Git & GitHub', description: 'Version control' },
            { name: 'REST APIs', description: 'Data Fetching' },
            { name: 'Vite', description: 'Fast Building' },
            { name: 'Vercel', description: 'Deployment'},
            { name: 'VS Code', description: 'Primary Editor'}
        ]
    }
]