
import React from "react";
import { experienceList } from "@/app/data/experience";
import { notableExperiences } from "@/app/data/notableExperiences";
import Learning from "./CurrentlyLearning";
import Experience from "./Experience";

export default async function ExperienceList({
  className,
}: {
  className: string;
}) {
  let notable1: typeof notableExperiences = [];
  let notable2: typeof notableExperiences = [];

  if (!notableExperiences) {
    return;
  }
  const half = Math.ceil(notableExperiences?.length / 2);
  if (notableExperiences?.length >= 4) {
    notable1 = notableExperiences.slice(0, half);
    notable2 = notableExperiences.slice(half);
  }

  return (
    <div className={`w-full  gap-12 mp:gap-2 flex mp:flex-wrap ${className}`}>
      <Experience notable={notable1} />
      <Experience notable={notable2} />
      <Learning />
    </div>
  );
}
