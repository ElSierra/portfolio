import { NotableExperiences } from "@prisma/client";
import React from "react";

export default function Learning() {
  return (
    <div className="border-[1px] w-[33%] mp:w-full h-40 rounded-md p-4">
      <div className="h-full w-full gap-4 flex">
        <div className="bg-[#bfbfbf] w-[0.13rem]" />
        <div className="flex h-full flex-col">
          <h1 className="text-md font-extrabold">Currently Learning</h1>
          <div className="flex flex-col  masked-overflow-small no-scrollbar overflow-y-scroll ">
            <p className="text-sm">{"Rust"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
