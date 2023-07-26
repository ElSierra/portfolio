"use client";

import React from "react";
import { useEffect, useState } from "react";

 function LanguageAnimate({ language }: { language: string[] }) {
  const [currentString, setCurrentString] = useState(language[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % language.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [language.length]);

  useEffect(() => {
    setCurrentString(language[index]);
  }, [index, language]);

  return <p className="text-base mp:p-2">{currentString}</p>;
}

export default React.memo(LanguageAnimate)