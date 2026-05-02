import { Github, Linkedin, LucideSquareDashedBottomCode , Twitter } from "lucide-react";

export const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/webcoding44/", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/safiurahman-jami-/", 
    label: "LinkedIn" 
  },
  { 
    icon: LucideSquareDashedBottomCode, 
    href: "https://leetcode.com/u/muj1t1D8eH/", 
    label: "Leetcode" 
  },
  { 
    icon: Twitter, 
    href: "https://x.com/workonline34977", 
    label: "Twitter" 
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"] as const;

export const EMAIL = "webcoding44@gmail.com";

export const MOBILE_BREAKPOINT = 768;
