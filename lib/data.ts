import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import salesagentImg from "@/public/salesagent.png";
import ItineraryImg from "@/public/itine.png";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer — Kodakit",
    location: "Remote",
    description:
      "Built and deployed a data analytics site using Next.js, TypeScript, and Framer Motion. Customized Odoo 16 modules for e-commerce and POS systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Frontend + Backend Developer — Insightseller",
    location: "Ankara, Turkey",
    description:
      "Built responsive web apps with Angular and Node.js. Optimized PostgreSQL queries and implemented secure backend endpoints.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Erasmus+ Exchange — Instituto Politécnico de Santarém",
    location: "Portugal",
    description:
      "Exchange semester; coursework in emerging technologies, finance, and data-driven decision-making.",
    icon: React.createElement(LuGraduationCap),
    date: "Autumn 2025",
  },
] as const;

export const projectsData = [
  {
    title: "AI-Powered Budget Travel Planner",
    description:
      "A full-stack travel planning app with AI-driven budget recommendations. Built for my graduation project, leading a team of four.",
    tags: [
      "NestJS",
      "React Native",
      "PostgreSQL",
      "Redis",
      "Railway",
      "Cloudinary",
      "SendGrid",
      "JWT",
      "Offline mode",
    ],
    imageUrl: ItineraryImg,
    Pop: "https://github.com/efkevi-n/Itine",
  },
  {
    title: "SubTrack — Subscription Tracker",
    description:
      "A mobile app to track personal subscriptions, available on the Google Play Store.",
    tags: [
      "React Native",
      "Expo",
      "Firebase",
      "Auth",
      "Firestore sync",
      "Push notifications",
    ],
    imageUrl: rmtdevImg,
    Pop: "URL_TBD",
  },
  {
    title: "Autonomous AI Sales Agent",
    description:
      "An autonomous sales agent that negotiates car listings using OpenAI function calling over a SQLite dataset — built to explore agentic workflows end to end.",
    tags: ["OpenAI API", "Function Calling", "Python", "SQLite", "Agents"],
    imageUrl: salesagentImg,
    Pop: "https://github.com/efkevi-n/autonomous-sales-agent-wex427", // TODO: confirm exact repo URL
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "NestJS",
  "Express",
  "Python",
  "Django",
  "PostgreSQL",
  "Firebase",
  "Redis",
  "Prisma",
  "Cloudinary",
  "Git",
  "Docker",
  "Railway",
  "REST APIs",
  "JWT Auth",
  "Agile/SCRUM",
] as const;
