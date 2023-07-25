import Image from "next/image";

export default function Card() {
  return (
    <div className="flex px-6 mp:flex-wrap gap-6 items-center">
      <div className=" aspect-video h-48 relative ">
        <Image
          src={"/placeholder.png"}
          alt={"placeholder"}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          fill
        />
      </div>
      <div className="flex  h-full gap-4 flex-col">
        <p className="text-lg font-extrabold">
          QuickChop
          <span className="text-xs font-normal"> Food delivery web app</span>
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <div className=" flex  h-full justify-end flex-col">
          <p>see project</p>
          <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white"/>
        </div>
      </div>
    </div>
  );
}
