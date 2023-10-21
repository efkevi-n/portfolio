import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import youtubeImg from "@/public/youtube.png";
import svelteImg from "@/public/svelte.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Web Developer",
    location: "Lagos, NIgeira",
    description:
      "following six months of study. I was given a freelancing project to start building a real estate development right away.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-end Web Developer",
    location: "Monrovia, Liberia",
    description:
      "I worked for 8 months as a front-end developer. I was responsible for building the front-end of a web app for a client.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Indiana, USA",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2022- 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ankara, Turkey",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Youtube Clone",
    description:
      "This was one of my first projects as a developer. It's a Youtube clone built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: youtubeImg,
    Pop: "https://efkevi-n.github.io/YOUTUBE-CLONE/",
    
  },
  {
    title: "svelte",
    description:
      "I contributed to the Svelte open-source project, Svelte is a new way to build web app",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: svelteImg,
    Pop: "https://github.com/efkevi-n/svelte",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    Pop: "https://efkevi-n.github.io/YOUTUBE-CLONE/",
   
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "wordpress",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;