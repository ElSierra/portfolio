import React from "react";
import type { notableExperiences } from "@/app/data/notableExperiences";

export default function Experience({
  notable,
}: {
  notable: typeof notableExperiences;
}) {
  return (
    <div className="w-full rounded-md border-[1px] p-4 transition-all duration-300 hover:border-[#9caea1] hover:shadow-sm">
      <div className="flex h-full w-full gap-4">
        <div className="w-[0.13rem] rounded-full bg-[#bfbfbf]" />
        <div className="flex h-full w-full flex-col">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h1 className="text-md font-extrabold">Notable Experiences</h1>
            <span className="rounded-md border-[1px] border-[#bfbfbf] px-2 py-1 text-xs font-semibold text-[#828282]">
              {notable.length}
            </span>
          </div>
          <div className="grid  grid-cols-2 gap-2 overflow-y-scroll pr-1 no-scrollbar mp:grid-cols-1">
            {notable.map((notable) => (
              <p
                key={notable.id}
                className="rounded-md border-[1px] border-[#bfbfbf]/70 px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9caea1] hover:bg-[#9caea1]/10"
              >
                {notable.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
