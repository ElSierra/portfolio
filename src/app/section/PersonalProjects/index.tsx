import Card from "./components/Card";
import "./overflow.css";
import AnimatedSection from "../AnimateSection";
import { personalProjects } from "@/app/data/personalProjects";
export const revalidate = 800;
export default async function PersonalProjects() {
  const projectData = personalProjects;
  const projectCount = projectData.length;
  const tagCount = new Set(
    projectData.flatMap((project) =>
      project.projectTags.map((projectTag) => projectTag.tags.title)
    )
  ).size;

  return (
    <AnimatedSection id="projects">
      <div className="flex w-full justify-between gap-6 pb-6 mp:flex-col mp:pb-4">
        <div className="terminal-card w-full max-w-[460px] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 text-zinc-100 shadow-xl shadow-black/10 dark:border-zinc-800">
          <div className="flex h-8 items-center gap-2 border-b border-white/10 px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[11px] text-zinc-400">portfolio/projects</span>
          </div>
          <div className="space-y-2 p-4 font-mono text-xs">
            <p>
              <span className="text-[#28c840]">$</span> load-projects --source json
            </p>
            <p className="text-zinc-400">
              {projectCount} builds indexed / {tagCount} tools detected / local images ready
            </p>
            <p className="terminal-cursor text-zinc-300">rendering project cards</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end w-72 mp:w-full">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9caea1]">selected work</p>
          <h1 className="text-2xl font-extrabold">personal projects</h1>
          <div className="h-1 w-24 bg-black dark:bg-white"></div>
        </div>
      </div>
      <div className="overflow-y-scroll masked-overflow no-scrollbar h-full">
        <div className="grid grid-cols-2 gap-4 mpX:grid-cols-1">
          {projectData.map((project, index) => (
            <Card
              {...project}
              projectTags={project.projectTags}
              key={project.id}
              index={index}
            />
          ))}
        </div>
        {/* <div className="flex justify-center w-full">
          <button className="p-4 transition-all duration-300  hover:text-[#9caea1] cursor-pointer">
            <p>show more projects</p>
            <div className={"w-10 h-1  bg-black dark:bg-white"} />
          </button>
        </div> */}
      </div>
    </AnimatedSection>
  );
}
