import { hats, lang } from "@/app/components/constants/hats";
import TypeWriter from "@/app/components/global/TypeWriter";
import NavBar from "@/app/components/NavBar";
import LanguageAnimate from "@/app/components/global/LanguageAnimate";
import Image from "next/image";
import triangle from "./assets/icon1.png";
import cube from "./assets/icon6.png";
import cuboid from "./assets/icon2.png";
import "./iconAnimate.css";
import AnimatedSection from "../AnimateSection";

export default function Main() {
  return (
    <AnimatedSection id="home">
      <NavBar />
      <Image
        src={triangle}
        alt=""
        height={30}
        width={30}
        className="animate-icon absolute top-20 mp:top-40 z-50 left-80"
      />
      <Image
        src={cube}
        alt=""
        height={30}
        width={30}
        className="animate-icon absolute top-20 z-50  mp:top-40 right-80"
      />

      <Image
        src={cuboid}
        alt=""
        height={30}
        width={30}
        className="animate-icon absolute bottom-20 z-50  mp:bottom-40 left-80"
      />
      <div className="flex flex-row  w-full h-[70%]">
        <div
          className={` w-full  flex mp:items-start items-center flex-col justify-center text-6xl  `}
        >
          <h1 className="text-center mp:text-5xl  mp:text-left">
            {"{Isaac Ojo}"}
          </h1>
          <TypeWriter hats={hats} />
          <LanguageAnimate language={lang} />
          <div>
            <a
              href="/IsaacOjo.pdf"
              className="w-fit text-lg font-bold transition-all duration-300  hover:text-[#9caea1] cursor-pointer"
            >
             My Resume
              <div className="w-14 h-[2px] bg-black dark:bg-white" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
