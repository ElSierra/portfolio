import "./overflow.css";
import AnimatedSection from "../AnimateSection";
import { TwitterLogo } from "@/app/components/logos";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
export default function Contact() {
  return (
    <AnimatedSection id="contact" className="justify-between">
      <div className="flex w-full gap-14 flex-col items-center justify-center h-full">
        <div className="flex w-full  justify-center">
          <div className="flex flex-col gap-2  items-center w-72">
            <h1 className="text-2xl font-extrabold">contact me</h1>
            <div className="w-12 flex items-end justify-end bg-black dark:bg-white h-1"></div>
          </div>
        </div>
        <ul className="flex gap-8 h-[50%] text-4xl">
          <a
            href="https://twitter.com/hojoisaac"
            className="transition-colors duration-300 hover:text-[#1c96e8]"
          >
            <li>
              <BsTwitter />
            </li>
          </a>
          <a
            href="https://github.com/elsierra"
            className="transition-colors duration-300 hover:text-[#302f2f]"
          >
            <li>
              <BsGithub />
            </li>
          </a>
          <a
            href="https://linkedin.com/in/hojoisaac"
            className="transition-colors duration-300 hover:text-[#0063c2]"
          >
            <li>
              <BsLinkedin />
            </li>
          </a>
          <a
            href="mailto:hojoisaac@gmail.com"
            className="transition-colors duration-300 hover:text-[#e34133]"
          >
            <li>
              <BiLogoGmail />
            </li>
          </a>
        </ul>
      </div>
  
        <div className="flex mp:mb-[80px] pc:mb-[50px] items-center  justify-between w-full ">
          <div className="border-2 border-black p-1 rounded-md dark:border-white">
            <h1 className={`text-3xl font-extrabold  dark:text-white`}>IOI</h1>
          </div>
          <p>
            coded by <span className="font-bold">me</span>
          </p>
     
      </div>
    </AnimatedSection>
  );
}
