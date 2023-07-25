"use client";
import { VT323 } from "next/font/google";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });
export default function PersonalProjects() {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {}, []);
  return (
    <section
      id="projects"
      className="h-[100vh] snap-start  mp:h-[100dvh] gap-10 flex flex-col w-full p-20 mp:p-5 "
    >
      <div className="flex w-full  justify-end">
        <div className="flex flex-col gap-2  items-end w-72">
          <h1 className="text-2xl font-extrabold">personal projects</h1>
          <div className="w-24 flex items-end justify-end bg-black dark:bg-white h-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mp:grid-cols-1">
        <Card/>
        <Card/>
      </div>
    </section>
  );
}
