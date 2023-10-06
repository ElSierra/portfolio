
import Experience from "./Experience";
import { prisma } from "../../../../../lib/prisma";
import { NotableExperiences } from "@prisma/client";
import Learning from "./CurrentlyLearning";

export default async function ExperienceList({
  className,
}: {
  className: string;
}) {
  const getNotableExperiences = async () => {
    try {
      const notable = await prisma.notableExperiences.findMany({});

      return notable;
    } catch (e) {}
  };

  const notableExperiences = await getNotableExperiences();
  let notable1: NotableExperiences[] = [];
  let notable2: NotableExperiences[] = [];

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
