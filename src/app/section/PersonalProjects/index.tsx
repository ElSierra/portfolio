import Card from "./components/Card";
import "./overflow.css";
import AnimatedSection from "../AnimateSection";
import { prisma } from "../../../../lib/prisma";

export default async function PersonalProjects() {
  const getProjects = async () => {
    try{
    const projectData = await prisma.personalProjects.findMany({
      include: {
        projectTags: {
          select: {
            tags: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("🚀 ~ file: index.tsx:26 ~ getProjects ~ projectData:", projectData)

    return projectData;}
    catch(e){
      return []
    }
  };

  const projectData = await getProjects();
 
  return (
    <AnimatedSection id="projects">
      <div className="flex w-full  justify-end">
        <div className="flex flex-col gap-2  items-end w-72">
          <h1 className="text-2xl font-extrabold">personal projects</h1>
          <div className="w-24 flex items-end justify-end bg-black dark:bg-white h-1"></div>
        </div>
      </div>
      <div className="overflow-y-scroll masked-overflow no-scrollbar h-full">
        <div className="grid grid-cols-2  gap-4 mpX:grid-cols-1 ">
          {projectData.map((project:any) => (
            <Card
              {...project}
              projectTags={project.projectTags}
              key={project.id}
            />
          ))}
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
