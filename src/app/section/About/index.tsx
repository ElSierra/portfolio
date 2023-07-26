"use client";

import { Code, Code1, JavaScript } from "iconsax-react";
import AnimatedSection from "../AnimateSection";
import ioi from "./components/ioi1.jpg";
import ioiColor from "./components/ioi2.jpg";
import Image from "next/image";
import { useState } from "react";
import Expertise from "./components/Expertise";
import ExpertiseList from "./components/ExpertiseList";
import Experience from "./components/Experience";
export default function About() {
  const [isBW, setIsBW] = useState(true);
  return (
    <AnimatedSection id="about" className="gap-8">
      <div className="flex w-full justify-start">
        <div className="flex flex-col gap-2 w-72">
          <h1 className="text-2xl font-extrabold">about me</h1>
          <div className="w-24 flex items-center justify-start bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="flex gap-4 mt-12 mp:flex-wrap items-center justify-center">
        <div className="w-[40%] mp:w-full flex items-center justify-center">
          <div
            className="relative h-48 w-48 transition-all duration-300 hover:w-64 hover:h-64"
            onMouseEnter={() => {
              setIsBW(false);
            }}
            onMouseLeave={() => {
              setIsBW(true);
            }}
          >
            <Image
              className="rounded-full  "
              style={{ objectFit: "cover", borderRadius: "9999px" }}
              fill
              src={isBW ? ioi : ioiColor}
              alt="Isaac Ojo"
            />
          </div>
        </div>
        <div className="mp:h-[50vh]  flex flex-col gap-4  masked-overflow no-scrollbar overflow-y-scroll">
          <div className="flex justify-between flex-col mp:w-full mp:pl-6">
            <h1 className="text-2xl">Isaac Ojo </h1>
            <p>
              Hi, I’m Isaac Ojo, a fullstack developer with a knack for building
              awesome web and mobile apps. I use node.js, next.js, react,
              typescript, and react native to create solutions that are fast,
              beautiful, and reliable. I love learning new things and tackling
              new problems. I also enjoy working with other developers and
              sharing what I know. Whether it’s a personal project or a
              professional one, I always strive to deliver quality and value.
            </p>
            <div className="flex gap-2">
              <a target="_blank" href="https://github.com/elsierra">
                GITHUB
              </a>
              <a target="_blank" href="mailto:hojoisaac@gmail.com">
                EMAIL
              </a>
            </div>
            <button className="bg-transparent w-fit transition-all duration-300 hover:py-2 hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white hover:dark:text-black py-1 px-2 border border-black dark:border-white hover:border-transparent rounded">
              Get CV
            </button>
          </div>
          <ExpertiseList className="pc:hidden" />
        </div>
      </div>
      <ExpertiseList className="mp:hidden" />
      <div>
        <Experience/>
      </div>
    </AnimatedSection>
  );
}
