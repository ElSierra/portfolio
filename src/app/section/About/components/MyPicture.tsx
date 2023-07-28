"use client";

import { useState } from "react";
import Image from "next/image";
import ioi from "./ioi1.jpg";
import ioiColor from "./ioi2.jpg";
export default function MyPicture() {
  const [isBW, setIsBW] = useState(true);
  return (
    <div
      className="relative h-48 w-48 transition-all duration-300 hover:w-64 hover:h-64"
      onMouseEnter={() => {
        setIsBW(false);
      }}
      onMouseLeave={() => {
        setIsBW(true);
      }}
    >
      <Image
        className="rounded-full  "
        style={{ objectFit: "cover", borderRadius: "9999px" }}
        fill
        src={isBW ? ioi : ioiColor}
        alt="Isaac Ojo"
      />
    </div>
  );
}
