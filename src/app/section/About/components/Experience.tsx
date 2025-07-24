import React from "react";
import type { notableExperiences } from "@/app/data/notableExperiences";

export default function Experience({
  notable,
}: {
  notable: typeof notableExperiences;
}) {
  return (
    <div className="border-[1px] w-[33%] mp:w-full h-40 rounded-md p-4">
      <div className="h-full w-full gap-4 flex">
        <div className="bg-[#bfbfbf] w-[0.13rem]" />
        <div className="flex h-full flex-col">
          <h1 className="text-md font-extrabold">Notable Experiences</h1>
          <div className="flex flex-col  masked-overflow-small no-scrollbar overflow-y-scroll ">
            {notable.map((notable) => (
              <p key={notable.id} className="text-sm">
                {notable.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
