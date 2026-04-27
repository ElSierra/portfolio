"use client";

import Image from "next/image";
import FrameworkTag from "./FrameworkTag";
import { useState } from "react";
import Modal from "@/app/components/global/Modal";
import { personalProjects } from "@/app/data/personalProjects";
import { motion } from "framer-motion";

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
  index = 0,
}: (typeof personalProjects)[number] & { index?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSourceCode = Boolean(sourceCode && sourceCode !== "#");

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
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.28) }}
        className="group flex mb-4 w-full gridMp:flex-wrap mdP:flex-wrap gap-6 items-center rounded-lg border border-transparent p-2 transition-colors duration-300 hover:border-zinc-200 hover:bg-zinc-50/70 dark:hover:border-zinc-800 dark:hover:bg-zinc-950/40"
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="w-[300px] mpX:w-full flex-col pc:min-w-[300px] bg-[#f9f9f9] dark:bg-[#262626] rounded-lg hover:cursor-pointer h-fit flex justify-between p-4 mp:p-2 items-center shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/10"
        >
          <button
            type="button"
            onClick={openModal}
            className="relative h-40 pc:max-h-[130px] pc:min-h-[130px] w-full overflow-hidden rounded-lg text-left"
            aria-label={`Open ${title} preview`}
          >
            <Image
              src={imageUri}
              alt={title}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              open preview
            </span>
          </button>
          {projectTags && (
            <div className="flex gap-2 w-full pc:flex-wrap mt-3 mp:overflow-x-scroll no-scrollbar">
              {projectTags.map((projectTags) => (
                <FrameworkTag
                  key={projectTags.tags.id}
                  title={projectTags.tags.title}
                />
              ))}
            </div>
          )}
        </motion.div>
        <div className="flex h-fit gap-4 flex-col">
          <p className="text-lg font-extrabold leading-tight">
            {title}
            {subtitle && (
              <span className="ml-2 rounded-full bg-[#9caea1]/15 px-2 py-1 align-middle text-xs font-normal text-[#6f8275] dark:text-[#b9c6bd]">
                {subtitle}
              </span>
            )}
          </p>
          <p className="max-w-xl text-sm leading-6 text-[#777] dark:text-[#aaa]">{desc}</p>
          <div className=" h-full flex gap-4  pc:items-end">
            {livePreviewLink && (
              <a
                href={livePreviewLink}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col transition-colors hover:text-[#6f8275]"
              >
                <p>live preview</p>
                <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
              </a>
            )}
            {hasSourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col transition-colors hover:text-[#6f8275]"
              >
                <p>source code</p>
                <hr className="w-8 border-none h-[0.1rem] bg-black dark:bg-white" />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </>
  );
}
