import { VT323 } from "next/font/google";
import NavLink from "./NavItems";
import "./typewriter.css";

import { hats } from "@/app/components/constants/hats";
import TypeWriter from "@/app/components/global/TypeWriter";
import NavBar from "@/app/components/NavBar";



export default function Main() {
  return (
    <section
      id={"home"}
      className="h-[100vh] snap-start  mp:h-[100dvh] flex flex-col w-full items-center px-20 mp:p-5 "
    >
      <NavBar />
      <div className="flex flex-row  w-full h-[70%]">
        <div
          className={` w-full  flex mp:items-start mp:pl-9 items-center flex-col justify-center text-6xl  `}
        >
          <h1 className="text-center  mp:text-left">{"{Ojo Isaac}"}</h1>
          <TypeWriter hats={hats} />
          
        </div>
      </div>
    </section>
  );
}
