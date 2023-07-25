"use client";

import Link from "next/link";
import AnimatedSection from "../AnimateSection";
import ioi from "./components/ioi1.jpg";
import Image from "next/image";
export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="flex w-full justify-start">
        <div className="flex flex-col gap-2 w-72">
          <h1 className="text-2xl font-extrabold">about me</h1>
          <div className="w-24 flex items-center justify-start bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="flex gap-4 mt-12 mp:flex-wrap items-center justify-center">
        <div className="relative h-48 w-48 transition-all duration-300 hover:w-64 hover:h-64">
          <Image
            className="rounded-full "
            style={{ objectFit: "cover", borderRadius: "9999px" }}
            fill
            src={ioi}
            alt="Isaac Ojo"
          />
        </div>
        <div className="flex justify-between flex-col mp:w-full mp:pl-6 w-[70%]">
          <h1 className="text-2xl">Isaac Ojo </h1>
          <p>
            Hi, I’m Isaac Ojo, a fullstack developer with a knack for building
            awesome web and mobile apps. I use node.js, next.js, react,
            typescript, and react native to create solutions that are fast,
            beautiful, and reliable. I love learning new things and tackling new
            problems. I also enjoy working with other developers and sharing
            what I know. Whether it’s a personal project or a professional one,
            I always strive to deliver quality and value.
          </p>
          <div className="flex gap-2">
            <a href="https://github.com/elsierra">GITHUB</a>
            <a href="mailto:hojoisaac@gmail.com">EMAIL</a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
