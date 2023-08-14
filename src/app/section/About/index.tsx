

import AnimatedSection from "../AnimateSection";


import ExpertiseList from "./components/ExpertiseList";

import ExperienceList from "./components/ExperienceList";
import MyPicture from "./components/MyPicture";
export default function About() {

  return (
    <AnimatedSection id="about" className="gap-8">
      <div className="flex w-full justify-start">
        <div className="flex flex-col gap-2 w-72">
          <h1 className="text-2xl font-extrabold">about me</h1>
          <div className="w-14 flex items-center justify-start bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="mp:h-[100vh]  flex mp:flex-col gap-4  masked-overflow no-scrollbar overflow-y-scroll">
        <div className="w-[40%] mp:w-full flex items-center justify-center">
         <MyPicture/>
        </div>
        <div className="flex justify-between flex-col  mp:w-full">
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
          <div className="flex gap-2 mt-4">
            <a
              className="w-fit transition-all duration-300  hover:text-[#9caea1] cursor-pointer"
              target="_blank"
              href="https://github.com/elsierra"
            >
              Github
              <div className="w-5  h-[2px] bg-black dark:bg-white" />
            </a>
            <a
              className="w-fit transition-all duration-300  hover:text-[#9caea1] cursor-pointer"
              target="_blank"
              href="mailto:hojoisaac@gmail.com"
            >
              Email
              <div className="w-5 h-[2px] bg-black dark:bg-white" />
            </a>
            <a
              href="/api/cv"
              className="w-fit transition-all duration-300  hover:text-[#9caea1] cursor-pointer"
            >
              Get CV
              <div className="w-5 h-[2px] bg-black dark:bg-white" />
            </a>
          </div>
        </div>
        <ExpertiseList className="pc:hidden" />
        <ExperienceList className="pc:hidden" />
      </div>
      <ExpertiseList className="mp:hidden" />
      <ExperienceList className="mp:hidden" />
    </AnimatedSection>
  );
}
