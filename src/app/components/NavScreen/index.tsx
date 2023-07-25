import { VT323 } from "next/font/google";
import NavLink from "./NavItems";
import "./typewriter.css";
import NavBar from "../NavBar";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });
export default function Main() {
  return (
    <div className="h-[100vh] snap-start  mp:h-[100dvh] flex flex-col w-full items-center px-20 mp:p-5 ">
      <NavBar />
      <div className="flex flex-row gap-4  w-full h-[70%]">
        <div className=" w-[10%] flex items-center ">
          <ul className="flex flex-col ">
            <NavLink name="home" link="/" />
            <NavLink name="projects" link="#project" />
            <NavLink name="about me" link="#project" />
            <NavLink name="contact me" link="#project" />
          </ul>
        </div>
        <div
          className={`${vt323.className} w-full  flex items-start pc:items-center flex-col justify-center text-6xl  `}
        >
          <h1 className="text-center  mp:text-left">{"{Ojo Isaac}"}</h1>
          <p className="text-center mp:hidden  mp:text-left dev">
            Fullstack developer_
          </p>
          <p className="text-center pc:hidden  mp:text-left ">
            Fullstack developer_
          </p>
        </div>
      </div>
    </div>
  );
}
