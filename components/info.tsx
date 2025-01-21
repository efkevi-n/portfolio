"use client";

import Image from "next/image";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import kevinImg from "@/public/kevin.png";
import { useSectionInView } from "@/lib/hooks";

export default function Info() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center">
        <div className="relative flex">
          <motion.div
            initial={{ y: -100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            {/* <Image
              src={kevinImg}
              alt="Enoch's portrait"
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            /> */}
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 py-10 text-2xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.25,
            }}
          >
            {/* 🐥 */}
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, my name is Enoch Flourish.</span> I
        am a <span className="font-bold">Full-stack Web Developer</span> and{" "}
        <span className="font-bold"> Product Designer</span> with{" "}
        <span className="font-bold">a year</span> experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js) and WEBFLOW</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medim"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.5,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 group flex items-center gap-2 text-white rounded-full px-7 py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
        >
          {" "}
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white flex group items-center gap-2 rounded-full px-7 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer shadow border border-black/10 dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>

        <a
          className="bg-white flex items-center gap-2 rounded-full p-4 text-gray-700 shadow border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 dark:bg-white/10 dark:text-white/60 "
          href="https://www.linkedin.com/in/enochomobolajiflourish/ "
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white flex items-center gap-2 rounded-full p-4 text-gray-700 shadow border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950  dark:bg-white/10 dark:text-white/60  "
          href="https://github.com/efkevi-n"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="bg-white flex items-center gap-2 rounded-full p-4 text-gray-700 shadow border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 dark:bg-white/10 dark:text-white/60 "
          href="https://twitter.com/efkevin_"
          target="_blank"
        >
          <BsTwitter />
        </a>
      </motion.div>
    </section>
  );
}
