"use client";

import me from"@/app/assets/me.jpg";
import Image from "next/image";
export default function MyPicture() {
  return (
    <div className="relative h-48 w-48 transition-all duration-300 hover:w-64 hover:h-64">
      <Image
        className="rounded-full  "
        style={{ objectFit: "cover", borderRadius: "9999px" }}
        fill
        src={me}
        alt="Isaac Ojo"
      />
    </div>
  );
}
