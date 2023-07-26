// 'use client'
// import { ArrowCircleUp } from "iconsax-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function GoUp() {
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const sections = document.querySelectorAll("section");
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);
//   console.log("🚀 ~ file: NavItems.tsx:15 ~ activeSection:", activeSection);

//   return (
//     <Link
//     href={"#home"}
//       className={`absolute  ${
//         activeSection === "home" ? "hidden" : " absolute"
//       } px-6 bottom-20 right-0`}
//     >
//       <ArrowCircleUp size="32"/>
//     </Link>
//   );
// }


"use client";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";
import { ArrowCircleUp } from "iconsax-react";
const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function GoUp() {
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
    if (activeSection !== "home") {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [activeSection, control,]);

  return (
    <motion.a
    href="#home"
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="absolute bottom-20 right-10 mp:bottom-2 mp:right-2"
    >
   <ArrowCircleUp size="32"/>
    </motion.a>
  );
}
