import { Book } from "iconsax-react";
import { Briefcase } from "iconsax-react";
import TimelineHead from "./TimelineHead";
import { TimelineData } from "../../../../../types/types";

export default function Timeline({
  timeLineType,
  data,
}: {
  timeLineType: "Education" | "Experience";
  data: TimelineData;
}) {
  return (
    <div className="flex w-[50%] mp:w-full flex-col">
      {timeLineType === "Education" ? (
        <TimelineHead Icon={Book} head="Education" />
      ) : (
        <TimelineHead Icon={Briefcase} head="Experience" />
      )}
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data.map(({ title, subtitle, dateRange }, idx) => (
          <li
            key={idx}
            className={`ml-4 ${data[data.length - 1] ? "" : "mt-10"}`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {dateRange}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <a
            className="hover:underline transition-all duration-300 ease-in-out"
              href={
                subtitle === "Yodev"
                  ? "https://yodev.org"
                  : subtitle === "Wadi Africa"
                  ? "https://wadi.africa"
                  : "#"
              }
            >
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
