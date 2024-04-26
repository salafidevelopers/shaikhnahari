import { cn } from "@/utils";
import { useState, useEffect, SetStateAction } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

export default function PlayerSlider({
  size,
  audioUrl,
}: {
  size: "lg" | "sm";
  audioUrl: string;
}) {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [duration, setDuration] = useState("00:00:00");
  const audioFiles = ["audio1.mp3", "audio2.mp3", "audio3.mp3"];
  const [position, setPosition] =
    useState<SetStateAction<undefined | number>>();

  useEffect(() => {
    const audio = new Audio();
    audio.addEventListener("loadedmetadata", () => {
      setDuration(formatTime(audio.duration));
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(formatTime(audio.currentTime));
    });
    setAudioElement(audio);
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.src = audioUrl;
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
    console.log({ position });
  }, [audioElement, isPlaying, audioUrl, position]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const stopAudio = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const ballPosition = () => {
    if (!audioElement || !audioElement.duration) return "0%";
    const percentage = (audioElement.currentTime / audioElement.duration) * 100;
    const barWidth = 100; // Assuming the progress bar width is 100%
    const ballWidth = 10; // Adjust this value according to the ball width
    const position = (percentage * (barWidth - ballWidth)) / 100;
    setPosition(position);
    return `${position}`;
  };

  return (
    <div className={cn("flex flex-grow gap-2 rounded-md bg-white px-2")}>
      {size === "lg" && (
        <div className="flex flex-grow items-center gap-2 text-[13px]">
          <span className="time">{currentTime}</span>
          <input
            type="range"
            className="w-full rounded-lg bg-primary-300 accent-primary-500"
            dir="ltr"
            min="0"
            max="100"
            step="1"
            onChange={ballPosition}
          />
          {/* <span className="time current">{duration}</span> */}
        </div>
      )}
      <button
        onClick={togglePlayPause}
        className="rounded-md py-2 text-primary-800"
      >
        {isPlaying ? <IoPause size={20} /> : <IoPlay size={20} />}
      </button>
    </div>
  );
}
