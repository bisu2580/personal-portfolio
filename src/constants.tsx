import {
  IconCode,
  IconHome,
  IconPhone,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";
import projectImg1 from "./assets/website1.png";
import projectImg2 from "./assets/website2.png";
import projectImg3 from "./assets/website3.png";
import projectImg4 from "./assets/website4.png";
import projectImg5 from "./assets/website5.png";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiSass,
  SiGit,
  SiGithub,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Github, Linkedin, Twitter } from "lucide-react";

import type { StaticImageData } from "next/image";

export type Project = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  techIcons: React.ReactNode[];
  link: string;
};

export const heroCards = [
  {
    id: 1,
    text: "React + Next.js Developer",
  },
  {
    id: 2,
    text: "Building Sleek UIs with Tailwind & HeroUI",
  },
  {
    id: 3,
    text: "Performance- Focused Code",
  },
  {
    id: 4,
    text: "Open to Collaborations",
  },
  {
    id: 5,
    text: "AI + Web3 Curious",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    image: projectImg1,
    title: "AI Image Generator",
    description:
      "A MERN-based AI content generation platform with credits system.",
    techIcons: [
      <SiReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTailwindcss key="tailwindcss" />,
    ],
    link: "https://imagiur-ai.onrender.com",
  },
  {
    id: 2,
    image: projectImg2,
    title: "Password Generator",
    description:
      "A mini project in which you can generate strong passwords for your accounts",
    techIcons: [
      <SiHtml5 key="html" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiJavascript key="javascript" />,
    ],
    link: "https://bisu2580.github.io/password-generator",
  },
  {
    id: 3,
    image: projectImg3,
    title: "Movie Details App",
    description:
      "A fully Frontend app for displaying trending movies and its details (Use vpn)",
    techIcons: [<SiReact key="react" />, <SiSass key="sass" />],
    link: "https://biswajit-sahoo-movie-app.netlify.app",
  },
  {
    id: 4,
    image: projectImg4,
    title: "Weather App",
    description:
      "A mini project where user can see the weather details of current location and also search locations.",
    techIcons: [<SiHtml5 key="html" />, <SiJavascript key="javascript" />],
    link: "https://bisu2580.github.io/weather-app",
  },
  {
    id: 5,
    image: projectImg5,
    title: "Dev Detective App",
    description:
      "A mini project in which the user details can be found from github username",
    techIcons: [<SiHtml5 key="html" />, <SiTailwindcss key="tailwindcss" />],
    link: "https://bisu2580.github.io/Dev-Detective",
  },
];

export const navLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },

  {
    title: "About",
    icon: (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Skills",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    icon: (
      <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },

  {
    title: "Contact Me",
    icon: (
      <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export const programmingLanguages = [
  {
    icon: <SiJavascript className="text-amber-300" />,
    text: "JavaScript",
    level: 5,
  },
  {
    icon: <SiTypescript className="text-[#3178C6]" />,
    text: "TypeScript",
    level: 4,
  },
  { icon: <SiPython />, text: "Python", level: 4 },
  { icon: <SiCplusplus className="text-[#5599ff]" />, text: "C++", level: 3 },
];

export const frontendSkills = [
  { icon: <SiReact className="text-cyan-400" />, text: "React", level: 5 },
  { icon: <SiNextdotjs />, text: "Next.js", level: 3 },
  {
    icon: <SiTailwindcss className="text-blue-400" />,
    text: "TailwindCSS",
    level: 5,
  },
  { icon: <SiHtml5 className="text-orange-300" />, text: "HTML", level: 5 },
];

export const backendSkills = [
  {
    icon: <SiNodedotjs className="text-green-600" />,
    text: "Node.js",
    level: 5,
  },
  { icon: <SiMongodb className="text-[#4DB33D]" />, text: "MongoDB", level: 4 },
  {
    icon: <SiFirebase className="text-orange-300" />,
    text: "Firebase",
    level: 5,
  },
];

export const devTools = [
  { icon: <VscVscode className="text-blue-500" />, text: "VS Code", level: 4 },
  { icon: <SiGit className="text-orange-300" />, text: "Git", level: 5 },
  { icon: <SiGithub className="" />, text: "Github", level: 5 },
];

export const quickLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

export const socialLinks = [
  {
    href: "https://github.com/bisu2580",
    label: "GitHub",
    icon: <Github size={24} />,
  },
  {
    href: "https://www.linkedin.com/in/biswajit-sahoo3",
    label: "LinkedIn",
    icon: <Linkedin size={24} />,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <Twitter size={24} />,
  },
];
