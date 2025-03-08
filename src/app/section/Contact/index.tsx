import "./overflow.css";
import AnimatedSection from "../AnimateSection";
import { TwitterLogo } from "@/app/components/logos";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import me from "@/app/assets/me.svg";
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
              <FaXTwitter />
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
        <div className="">
          <Image
            src={me}
            alt="Isaac Ojo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <p>
          Developed by <span className="font-bold">me</span>
        </p>
      </div>
    </AnimatedSection>
  );
}
