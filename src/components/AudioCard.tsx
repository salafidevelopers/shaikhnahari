import React from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { HiSpeakerWave } from "react-icons/hi2";
import { cn } from "@/utils";
import AudioPlayer from "./AudioPlayer";

interface AudioCardProps {
  size: "lg" | "sm";
  audioUrl?: string;
  title?: string;
}

const AudioCard = ({ size, audioUrl, title }: AudioCardProps) => {
  return (
    <article
      className={cn(
        "flex items-center gap-2 rounded-lg border-2 border-primary-300 bg-primary-100  p-2 font-alexandria text-primary-700",
        `${size === "sm" ? "w-full" : ""}`,
      )}
    >
      <span className="text-xl font-bold text-primary-950">
        <HiSpeakerWave size={18} />
      </span>
      <p className={cn("text-[12px] font-medium")}>
        {title ? title : "شرح عمدة الأحكام (1) "}
      </p>
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
        audioUrl={audioUrl ? audioUrl : "/assets/audios/umdat_ul_ahkam_01.mp3"}
      />
      <button className="flex items-center gap-3 rounded-md   bg-primary-400 px-3 py-1.5 font-medium">
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
      <p className="mx-2 text-[10px] font-medium">بتاريخ : 21/يوليو/2015</p>
    </article>
  );
};

export default AudioCard;
