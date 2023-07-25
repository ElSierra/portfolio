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

  const isActive = activeSection === name;

  return (
    <Link href={link}>
      <div className="rotate-[-90deg]">
        <li className="whitespace-nowrap">{name}</li>

        <div
          className={`w-9 h-1 transition-colors duration-300 ${
            isActive ? " bg-black dark:bg-white" : "bg-transparent"
          }`}
        ></div>
      </div>
    </Link>
  );
}
