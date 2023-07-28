import Card from "./components/Card";
import "./overflow.css";
import AnimatedSection from "../AnimateSection";
import { prisma } from "../../../../lib/prisma";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default  function PersonalProjects() {
  
  return (
    <AnimatedSection id="projects">
      <div className="flex w-full  justify-end">
        <div className="flex flex-col gap-2  items-end w-72">
          <h1 className="text-2xl font-extrabold">personal projects</h1>
          <div className="w-24 flex items-end justify-end bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="overflow-y-scroll masked-overflow no-scrollbar h-full">
        <div className="grid grid-cols-2  gap-4 mp:grid-cols-1 ">
          <Skeleton height={200}/>
          <Skeleton height={200} />
        </div>
        <div className="flex justify-center w-full">
          <button className="p-4 transition-all duration-300  hover:text-[#9caea1] cursor-pointer">
            <p>show more projects</p>
            <div className={"w-10 h-1  bg-black dark:bg-white"} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
