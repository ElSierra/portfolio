"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavLink({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const nameValue = () => {
    return name.split(" ")[0];
  };
  console.log(
    "🚀 ~ file: NavItems.tsx:17 ~ nameValue ~ nameValue:",
    nameValue()
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  console.log("🚀 ~ file: NavItems.tsx:15 ~ activeSection:", activeSection);

  const isActive = activeSection === nameValue();

  return (
    <Link className="" href={link}>
      <div className="rotate-[-90deg] ">
        <li className="whitespace-nowrap w-9 transition-all duration-300  hover:text-[#9caea1]">
          {name === "about"
            ? "about me"
            : name === "contact"
            ? "contact me"
            : name}
        </li>

        <div
          className={`w-6 h-[2px] transition-colors duration-300  ${
            isActive ? " bg-black dark:bg-white" : "bg-transparent"
          }`}
        ></div>
      </div>
    </Link>
  );
}
