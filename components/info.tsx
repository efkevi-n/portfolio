"use client";

import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Info() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative flex">
          <motion.div
            initial={{ y: -100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          >
            <Image
              src="/public/WhatsApp Image 2023-10-01 at 10.17.48 PM (1).jpeg"
              alt="Enoch's portrait"
              width={192}
              height={192}
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 py-10 text-2xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.25,
            }}
          >
            🐥
          </motion.span>
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
        <span className="font-bold">Hello, my name is Enoch Flourish.</span> I'm a{' '}
        <span className="font-bold">Full-stack Web Developer</span> and <span className="font-bold"> Product Designer</span> with{' '}
        <span className="font-bold">a year</span> experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </p>
    </section>
  );
}

