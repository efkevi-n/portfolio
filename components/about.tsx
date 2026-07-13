"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-10 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
      id="about"
    >
      <SectionHeader> About Me</SectionHeader>

      <p className="mb-3">
        I&apos;m a final-year{" "}
        <span className="font-medium">Computer Engineering</span> student at{" "}
        <span className="font-medium">OSTİM Technical University</span> in
        Ankara, with an <span className="font-medium">Erasmus+</span> semester
        at Instituto Politécnico de Santarém in Portugal.
      </p>
      <p className="mb-3">
        I build and ship full-stack products end to end — my subscription
        tracker <span className="font-medium">SubTrack</span> is live on the
        Google Play Store, and my graduation project{" "}
        <span className="font-medium">ITINE</span> is an AI-powered travel
        planner built with NestJS and React Native.
      </p>
      <p className="mb-3">
        Lately I focus on{" "}
        <span className="font-medium">LLM-powered and agentic systems</span> —
        function calling, RAG pipelines, and autonomous agents — alongside my
        core stack:{" "}
        <span className="font-medium">
          TypeScript, React, React Native (Expo), NestJS, PostgreSQL, Redis,
          Firebase, and Docker
        </span>
        .
      </p>
      <p>
        Based between <span className="font-medium">Turkey</span> and{" "}
        <span className="font-medium">Portugal</span>, working with clients and
        teams across <span className="font-medium">Europe</span> — open to
        full-time roles and freelance projects.
      </p>
    </motion.section>
  );
}
