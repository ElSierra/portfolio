import { notableExperiences } from "@/app/data/notableExperiences";
import Experience from "./Experience";

export default async function ExperienceList({
  className,
}: {
  className: string;
}) {


  return (
    <div className={`w-full  gap-12 mp:gap-2 flex mp:flex-wrap ${className}`}>
      <Experience notable={notableExperiences} />
    </div>
  );
}
