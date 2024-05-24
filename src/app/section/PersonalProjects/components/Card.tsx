"use client";

import Image from "next/image";
import FrameworkTag from "./FrameworkTag";
import { IpersonalProject } from "../../../../../types/types";
import { useState } from "react";
import Modal from "@/app/components/global/Modal";

export default function Card({
  imageUri,
  title,
  desc,
  subtitle,
  sourceCode,
  livePreviewLink,
  projectTags,
  youtubeLink,
  mobileImageUri,
}: IpersonalProject) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        imageUri={imageUri}
        openModal={openModal}
        closeModal={closeModal}
        youtubeLink={youtubeLink || undefined}
        mobileImageUri={mobileImageUri || undefined}
      />
      <div className="flex mb-4 w-full gridMp:flex-wrap mdP:flex-wrap gap-6 items-center">
        <div className=" w-[300px] mpX:w-full flex-col pc:min-w-[300px]  bg-[#f9f9f9] dark:bg-[#262626] rounded-lg hover:cursor-pointer h-fit flex justify-between p-4 mp:p-2 items-center">
          <div onClick={openModal} className="h-40 pc:max-h-[130px] pc:min-h-[130px] w-full mp:w-[100%] duration-500 transition-all   relative hover:scale-[110%] hover:transform ">
            <Image
              src={imageUri}
              alt={title}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              fill
            />
          </div>
          {projectTags && (
            <div className="flex gap-2 w-full pc:flex-wrap pc: mt-2  mp:overflow-x-scroll no-scrollbar">
              {projectTags.map((projectTags) => (
                <FrameworkTag
                  key={projectTags.tags.id}
                  title={projectTags.tags.title}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex h-fit gap-4 flex-col">
          <p className="text-lg font-extrabold">
            {title}
            <span className="text-xs font-normal">{subtitle}</span>
          </p>
          <p className="text-[#8d8d8d]">{desc}</p>
          <div className=" h-full flex gap-4  pc:items-end">
            {livePreviewLink && (
              <a href={livePreviewLink} className=" flex  flex-col">
                <p>live preview</p>
                <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
              </a>
            )}
            <a href={sourceCode} className=" flex  flex-col">
              <p>source code</p>
              <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
