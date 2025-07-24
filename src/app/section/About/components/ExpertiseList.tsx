import { FaGolang } from "react-icons/fa6";

import {
  SiBun,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Expertise from "./Expertise";
export default function ExpertiseList({ className }: { className: string }) {
  return (
    <div
      className={`flex pc:h-fit pc:flex-wrap mp:gap-0 w-full pc:overflow-x-auto no-scrollbar gap-6 justify-between mp:flex-wrap ${className}`}
    >
      <Expertise
        Icon={SiTypescript}
        header={"Typescript"}
        subText={"Build performant web apps"}
      />{" "}
      <Expertise
        Icon={FaGolang}
        header={"Go"}
        subText={"Build performant web apps"}
      />{" "}
      <Expertise
        Icon={SiReact}
        header={"React.js"}
        subText={"Build performant web apps"}
      />{" "}
      <Expertise
        Icon={SiNodedotjs}
        header={"Node.js"}
        subText={"Build performant web apps"}
      />{" "}
      <Expertise
        Icon={SiReact}
        header={"React Native"}
        subText={"Build performant web apps"}
      />
      <Expertise
        Icon={SiNextdotjs}
        header={"Next.js"}
        subText={"Build performant web apps"}
      />
      <Expertise
        Icon={SiBun}
        header={"Bun"}
        subText={"Build performant web apps"}
      />
      <Expertise
        Icon={SiExpress}
        header={"Express"}
        subText={"Build performant web apps"}
      />
    </div>
  );
}
