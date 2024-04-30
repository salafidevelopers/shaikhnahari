import { cn } from "@/utils";
import { useState, useEffect } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

interface PlayerSliderProps {
  size: "lg" | "sm";
  audioUrl: string;
}

const PlayerSlider: React.FC<PlayerSliderProps> = ({ size, audioUrl }) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [duration, setDuration] = useState("00:00:00");
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(formatTime(audio.duration));
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(formatTime(audio.currentTime));
      setPosition((audio.currentTime / audio.duration) * 100);
    });
    setAudioElement(audio);
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, [audioUrl]);

  const togglePlayPause = () => {
    if (audioElement) {
      if (!isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      setIsPlaying(!isPlaying);
    }
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

  return (
    <div
      className={cn(
        "flex flex-grow items-center gap-2 rounded-md bg-white px-2",
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
            onChange={(e) => {
              const newPosition = parseFloat(e.target.value);
              if (audioElement) {
                audioElement.currentTime =
                  (newPosition / 100) * audioElement.duration;
              }
              setPosition(newPosition);
            }}
          />
          <span className="text-[10px]">{duration}</span>
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
};

export default PlayerSlider;