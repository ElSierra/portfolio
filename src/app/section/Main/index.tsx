import { hats, lang } from "@/app/components/constants/hats";
import LanguageAnimate from "@/app/components/global/LanguageAnimate";
import TypeWriter from "@/app/components/global/TypeWriter";
import NavBar from "@/app/components/NavBar";
import {
  SiBun,
  SiGo,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import AnimatedSection from "../AnimateSection";
import "./iconAnimate.css";
export default function Main() {
  return (
    <AnimatedSection className="relative" id="home">
      <NavBar />

      <SiBun
        className="animate-icon absolute z-50 top-[30%] left-[5%] mp:top-[22%] mp:left-[3%]"
        size={30}
      />
      <SiTypescript
        className="animate-icon absolute z-50 top-[30%] right-[5%] mp:top-[22%] mp:right-[3%]"
        size={30}
      />
      <SiReact
        className="animate-icon absolute z-50 bottom-[30%] right-[5%] mp:bottom-[22%] mp:right-[3%]"
        size={30}
      />
      <SiGo
        className="animate-icon absolute z-50 bottom-[30%] left-[5%] mp:bottom-[22%] mp:left-[3%]"
        size={30}
      />
      <SiNodedotjs
        className="animate-icon absolute z-50 top-[8%] left-1/2 mp:top-[5%]"
        size={30}
      />
      <SiPostgresql
        className="animate-icon absolute z-50 bottom-[8%] left-1/2  mp:bottom-[5%]"
        size={30}
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
