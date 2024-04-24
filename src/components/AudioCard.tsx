import React from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { IoPlay } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { cn } from "@/utils";

const AudioCard = ({ size }: { size: string }) => {
  return (
    <div
      className={cn(
        "font-alexandria p-2 flex bg-primary-200 gap-2 items-center text-primary-700  rounded-lg border-2 border-primary-300",
        `${size === "sm" ? "w-full" : ""}`
      )}>
      <span className="text-xl font-bold text-primary-950">
        <HiSpeakerWave />
      </span>
      <div className={cn("font-bold text-[12px] ")}>العلم: فضله وشرفُ أهله</div>
      <div className="flex flex-grow bg-white rounded-md px-2 py-2.5">
        {size === "lg" && (
          <div className="flex gap-2 text-[13px] items-center flex-grow">
            <span className="time">03:34</span>
            <input type="range" className="w-full bg-primary-300" dir="ltr" />

            <span className="time current">00:00</span>
          </div>
        )}
        <button className="text-2xl font-bold text-primary-950">
          <IoPlay />
        </button>
      </div>
      <button className="border border-x-2 py-1.5 font-bold flex gap-3 px-3 bg-primary-400 rounded-md  items-center">
        <span
          className={cn(
            "font-bold text-[12px] ",
            `${size === "sm" ? "hidden" : ""}`
          )}>
          Download
        </span>
        <span className="text-3xl font-bold">
          <RiDownloadCloud2Line />
        </span>
      </button>
      <div className="text-[12px] font-bold mx-2">بتاريخ : 21/يوليو/2015</div>
    </div>
  );
};

export default AudioCard;
