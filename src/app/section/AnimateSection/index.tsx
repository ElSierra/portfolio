"use client";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";
const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function AnimatedSection({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string
}) {
  const control = useAnimation();

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

  useEffect(() => {
    if (activeSection === id) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [activeSection, control, id]);

  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id={id}
      className={`h-[100vh] snap-start flex flex-col w-full items-center px-28 mp:p-8 pc:pt-5 ${className}`}
    >
      {children}
    </motion.section>
  );
}
