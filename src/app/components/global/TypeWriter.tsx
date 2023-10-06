"use client";
import React from "react";
import  { useState, useEffect } from "react";

function TypeWriter({
  appendClass,
  hats,
  prefix,
  fontSize,
}: {
  appendClass?: string;
  hats: { prep: string; suffix: string }[];
  prefix?: string;
  fontSize?: string;
}) {
  let className = "flex flex-col gap-4";
  if (appendClass) className += " " + appendClass;

  const typeWriterClass =
    " border-r-2 pr-1" +
    "animate-cursor overflow-hidden mt-2 whitespace-nowrap transition-[width] ease-in-out duration-1000 mr-auto";

  // State of current hat index
  const [currentHat, setCurrentHat] = useState(0);

  const [collapseClass, setCollapseClass] = useState(" w-0");

  useEffect(() => {
    setTimeout(() => setCollapseClass(" w-full"), 100);

    const incrementHat = async () => {
      setCollapseClass(" w-0");
      setTimeout(() => {
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, fontSize?650: 1100);

      setTimeout(() => {
        setCollapseClass(" w-full");
      }, 1000);
    };

    const id = setInterval(incrementHat, 4000);

    return () => clearInterval(id);
  }, [fontSize, hats.length]); 

  return (
    <div className={className}>
      <div className={`flex gap-2 text-6xl mp:text-2xl   mx-auto`}>
        <div className="shrink-0 whitespace-nowrap ml-auto">
          {prefix}
          {hats[currentHat].prep ? ` ${hats[currentHat].prep} ` : ""}
        </div>
        <div className={`${typeWriterClass}${collapseClass}`}>
          {hats[currentHat].suffix}
        </div>
      </div>
    </div>
  );
}
export default React.memo(TypeWriter)