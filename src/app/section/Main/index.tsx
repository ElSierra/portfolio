"use client";


import { hats, lang } from "@/app/components/constants/hats";
import TypeWriter from "@/app/components/global/TypeWriter";
import NavBar from "@/app/components/NavBar";
import LanguageAnimate from "@/app/components/global/LanguageAnimate";

import AnimatedSection from "../AnimateSection";


export default function Main() {

  return (
    <AnimatedSection id="home"
    >
      <NavBar />
      <div className="flex flex-row  w-full h-[70%]">
        <div
          className={` w-full  flex mp:items-start items-center flex-col justify-center text-6xl  `}
        >
          <h1 className="text-center mp:text-5xl  mp:text-left">{"{Isaac Ojo}"}</h1>
          <TypeWriter hats={hats} />
          <LanguageAnimate language={lang} />
        </div>
      </div>
    </AnimatedSection>
  );
}
