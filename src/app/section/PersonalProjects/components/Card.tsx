import Image from "next/image";
import FrameworkTag from "./FrameworkTag";
import { IpersonalProject } from "../../../../../types/types";


export default function Card({imageUri,title,desc, subtitle,sourceCode,livePreviewLink,projectTags}: IpersonalProject) {
  return (
    <div className="flex mb-4 w-full gridMp:flex-wrap gap-6 mb:ml-[20px] items-center">
      <div className=" pc:min-w-[300px] pc:w-[300px] w-full flex-col  bg-[#f9f9f9] dark:bg-[#262626] rounded-lg pc:h-56 hover:cursor-pointer h-56 flex justify-between p-4 items-center">
        <div className="aspect-video pc:h-36 w-[90%] duration-500 transition-all hover:w-full pc:hover:h-40 relative ">
          <Image
            src={imageUri}
            alt={title}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            fill
          />
        </div>
        {projectTags &&<div className="flex gap-2 w-full pc:flex-wrap pc: mt-2  mp:overflow-x-scroll no-scrollbar">
          {projectTags.map((projectTags)=><FrameworkTag key={projectTags.tags.id} title={projectTags.tags.title}/>)}
         
        </div>}
      </div>
      <div className="flex  h-full gap-4 flex-col">
        <p className="text-lg font-extrabold">
         {title}
          <span className="text-xs font-normal">{subtitle}</span>
        </p>
        <p className="text-[#8d8d8d]">
         {desc}
        </p>
        <div className=" h-full flex gap-4  pc:items-end">
          {livePreviewLink && <a href={livePreviewLink} className=" flex  flex-col">
            <p>live preview</p>
            <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
          </a>}
          <a href={sourceCode} className=" flex  flex-col">
            <p>source code</p>
            <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
