import type React from "react";

export interface Project {
    image: string;
    title: string;
    description: string;
    skills: string[];
    projectURL?: string;
    githubURL?: string;
}

export interface SkillItem {
    name: string;
    description: string;
}

export interface SkillCategory {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    skills: SkillItem[];
}
