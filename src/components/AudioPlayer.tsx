import useAudioPlayer from "@/hooks/useAudioPlayer";
import { cn } from "@/utils";
import { useState, useEffect } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

interface PlayerSliderProps {
  size: "lg" | "sm";
  audioUrl: string;
}

const PlayerSlider: React.FC<PlayerSliderProps> = ({ size, audioUrl }) => {
  const {
    currentTime,
    duration,
    downloadAudio,
    isPlaying,
    stopAudio,
    togglePlayPause,
    position,
    handlePosition,
  } = useAudioPlayer(audioUrl);

  return (
    <div
      className={cn(
        "flex flex-grow items-center  gap-2 rounded-md bg-white px-2",
        size === "sm" ? "justify-center" : "",
      )}
    >
      {size === "lg" && (
        <div className={"flex flex-grow items-center gap-2 "}>
          <span className="text-[10px]">{currentTime}</span>
          <input
            type="range"
            className="w-full rounded-lg bg-primary-300 accent-primary-500"
            dir="ltr"
            min="0"
            max="100"
            step="0.01"
            value={position}
            onChange={handlePosition}
          />
          <span className="text-[10px]">{duration}</span>
        </div>
      )}
      <button
        onClick={togglePlayPause}
        className={cn("rounded-md py-2 text-center text-primary-800")}
      >
        {isPlaying ? <IoPause size={20} /> : <IoPlay size={20} />}
      </button>
    </div>
  );
};

export default PlayerSlider;
