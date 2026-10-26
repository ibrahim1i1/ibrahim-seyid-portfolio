// ==========================================
// 1.(Intro)
// ==========================================
export interface IntroSection {
  skip: string;
}

// ==========================================
// 2.(Navbar)
// ==========================================
export interface NavSection {
  home: string;
  about: string;
  projects: string;
  skills: string;
  contact: string;
}

// ==========================================
// 3.(Home / Hero)
// ==========================================
export interface HomeSection {
  badge: string;
  title1: string;
  titleGradient: string;
  intro: string;
  description: string;
  exploreBtn: string;
  contactBtn: string;
  techStack: string;
  responsiveTitle: string;
  responsiveSub: string;
}

// ==========================================
// 4.(About)
// ==========================================
export interface HighlightsItem {
    title: string;
    description: string;
}

export interface AboutSection {
  badge: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  cardLead: string;
  cardP1: string;
  cardP2: string;
  locationLabel: string;
  locationVal: string;
  roleLabel: string;
  roleVal: string;
  highlights: HighlightsItem[];
}

// ==========================================
// 5.(Projects)
// ==========================================
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  projectURL?: string;
  githubURL?: string;
  isComingSoon?: boolean;
}

export interface ProjectsSection {
  badgeNumber: string;
  badgeText: string;
  title: string;
  description: string;
  previewText: string;
  liveDemoText: string;
  comingSoonText: string;
  sourceCodeText: string;
  items: ProjectItem[];
}

// ==========================================
// 6.(Skills)
// ==========================================
export interface SkillItem {
  name: string;
  description: string;
}

export type SkillCategoryId = 'core' | 'ui' | 'tools';

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface SkillsSection {
  badgeNumber: string;
  badgeText: string;
  title: string;
  description: string;
  verifiedText: string;
  activeStatus: string;
  categories: SkillCategory[];
}

// ==========================================
// 7.(Global Schema)
// ==========================================
export type Language = 'EN' | 'TR';

export interface TranslationsSchema {
  intro: IntroSection;
  nav: NavSection;
  home: HomeSection;
  about: AboutSection;
  projects: ProjectsSection;
  skills: SkillsSection;
}

export type PortfolioTranslations = Record<Language, TranslationsSchema>;