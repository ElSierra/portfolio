import React from "react";
import Experience from "./Experience";

export default function ExperienceList({className}:{className:string}) {
  return (
    <div className={`w-full  gap-12 mp:gap-2 flex mp:flex-wrap ${className}`}>
      <Experience /> <Experience /> <Experience />
    </div>
  );
}
