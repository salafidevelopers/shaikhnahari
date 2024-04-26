import React from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { IoPlay } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { cn } from "@/utils";
import AudioPlayer from "./AudioPlayer";

type Size = "lg" | "sm";

const AudioCard = ({ size }: { size: Size }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border-2 border-primary-300 bg-primary-100  p-2 font-alexandria text-primary-700",
        `${size === "sm" ? "w-full" : ""}`,
      )}
    >
      <span className="text-xl font-bold text-primary-950">
        <HiSpeakerWave size={18} />
      </span>
      <div className={cn("text-[12px] font-medium")}>
        العلم: فضله وشرفُ أهله
      </div>
      {/* <div className={cn("flex flex-grow rounded-md bg-white px-2 py-2.5")}>
        {size === "lg" && (
          <div className="flex flex-grow items-center gap-2 text-[13px]">
            <span className="time">03:34</span>
            <input
              type="range"
              className="w-full rounded-lg bg-primary-300"
              dir="ltr"
              min="0"
              max="100"
              step="1"
            />
            <span className="time current">00:00</span>
          </div>
        )}
        <button className="text-2xl font-bold text-primary-950">
          <IoPlay />
        </button>
      </div> */}
      <AudioPlayer
        size={size}
        audioUrl="/assets/audios/umdat_ul_ahkam_01.mp3"
      />
      <button className="flex items-center gap-3 rounded-md border border-x-2 bg-primary-400 px-3 py-1.5 font-medium">
        <span
          className={cn(
            "text-[10px]  font-medium",
            `${size === "sm" ? "hidden" : ""}`,
          )}
        >
          Download
        </span>
        <span className="text-3xl font-medium">
          <RiDownloadCloud2Line size={22} />
        </span>
      </button>
      <div className="mx-2 text-[12px] font-medium">بتاريخ : 21/يوليو/2015</div>
    </div>
  );
};

export default AudioCard;
