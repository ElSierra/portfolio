import { ArrowCircleUp } from "iconsax-react";
import About from "./section/About";
import Main from "./section/Main";
import PersonalProjects from "./section/PersonalProjects";
import GoUp from "./components/global/GoUp";
import Resume from "./section/Resume";
import Contact from "./section/Contact";

export default async function Home() {
  return (
    <main className="min-h-screen pl-[5vw] mp:pl-[8vw] h-screen mp:p-0 scroll-smooth overflow-auto snap-y items-center dark:text-white ">
      <GoUp />
      <Main />
      <div className="h-[1px] bg-slate-100 dark:bg-gray-900 w-full" />
      <PersonalProjects />
      <div className="h-[1px] bg-slate-100  dark:bg-gray-900  w-full" />
      <About />
      <div className="h-[1px] bg-slate-100  dark:bg-gray-900  w-full" />
      <Resume />
      <div className="h-[1px] bg-slate-100  dark:bg-gray-900  w-full" />
      <Contact />
    </main>
  );
}
