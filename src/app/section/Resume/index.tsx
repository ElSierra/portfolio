import "./overflow.css";

import { educationList } from "@/app/data/educationList";
import { experienceList } from "@/app/data/experience";
import AnimatedSection from "../AnimateSection";
import Timeline from "./components/Timeline";
export default async function Resume() {
  const ed = educationList;
  const exp = experienceList;
  return (
    <AnimatedSection id="resume">
      <div className="flex w-full  justify-end">
        <div className="flex flex-col gap-2  items-end w-72">
          <h1 className="text-2xl font-extrabold">resume</h1>
          <div className="w-12 flex items-end justify-end bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="flex p-2  h-full w-full mp:flex-wrap overflow-y-scroll masked-overflow no-scrollbar ">
        <Timeline data={ed} timeLineType="Education" />
        <Timeline data={exp} timeLineType="Experience" />
      </div>
    </AnimatedSection>
  );
}
