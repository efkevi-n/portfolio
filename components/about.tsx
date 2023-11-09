"use client"

import React from 'react'
import { animate, motion } from 'framer-motion'
import SectionHeader from './section-header'
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView("About");

  return <motion.section
  ref={ref}

  className="mb-28 max-w-[45rem] text-center leading-10 sm:mb-40"
  initial = {{ opacity: 0, y: 100 }}
  animate = {{ opacity: 1, y: 0 }}
  transition={{ 
    delay: 0.2
   }}
   id="about"
  >
  <SectionHeader> About Me</SectionHeader>

  <p className="mb-3">
  <span className="font-medium">I made the decision to follow my passion for programming after high school. On Udemy, I enrolled in a coding bootcamp where I acquired</span>{" "}
  <span className="font-medium">full-stack web development</span>{" "}
  <span className="font-medium">skills</span>.{" "}
  <span className="italic">The component of programming that involves solving problems is my favorite. I enjoy the satisfaction of solving a difficulty at last.</span>{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>{" "}
  <span className="font-medium">make up my primary stack</span>. I am also{" "}
  <span className="font-medium">knowledgeable about TypeScript</span>. I'm always{" "}
  <span className="font-medium">trying to keep up with new technology</span>.{" "}
  <span className="font-medium">I'm a junior software developer</span>{" "}
  <span className="font-medium">seeking for a full-time job</span>{" "}
  <span className="font-medium">right now</span>.
</p>
<p>
  <span className="italic">When I'm not coding, I like to read books, watch movies, and play video games.{" "}
  <span className="font-medium">Mark Manson is one of my favorite authors</span>.{" "}
  <span className="font-medium">I also like discovering new stuff</span>.{" "}
  <span className="italic">I'm now studying chess</span>.
  </span>
</p>

  </motion.section>
   
  
}
