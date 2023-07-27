import Image from "next/image";
import FrameworkTag from "./FrameworkTag";

export default function Card() {
  return (
    <div className="flex mb-4 w-full gridMp:flex-wrap gap-6 mb:ml-[20px] items-center">
      <div className="w-full flex-col  bg-[#f9f9f9] dark:bg-[#262626] rounded-lg pc:h-56 hover:cursor-pointer h-56 flex justify-between p-4 items-center">
        <div className="aspect-video pc:h-36 w-[90%] duration-500 transition-all hover:w-full pc:hover:h-40 relative ">
          <Image
            src={"/placeholder.png"}
            alt={"placeholder"}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            fill
          />
        </div>
        <div className="flex gap-2 w-full items-center justify-center overflow-y-auto">
          <FrameworkTag />
          <FrameworkTag />
          <FrameworkTag />
          <FrameworkTag />
        </div>
      </div>
      <div className="flex  h-full gap-4 flex-col">
        <p className="text-lg font-extrabold">
          QuickChop
          <span className="text-xs font-normal"> Food delivery web app</span>
        </p>
        <p className="text-[#8d8d8d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <div className=" h-full flex gap-4  pc:items-end">
          <div className=" flex  flex-col">
            <p>live preview</p>
            <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
          </div>
          <div className=" flex  flex-col">
            <p>source code</p>
            <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
