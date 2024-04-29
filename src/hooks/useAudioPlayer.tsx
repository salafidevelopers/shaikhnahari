import { useState, useEffect } from "react";

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: string;
  duration: string;
}

interface AudioPlayerControls {
  togglePlayPause: () => void;
  stopAudio: () => void;
  downloadAudio: () => void;
}

const useAudioPlayer = (
  audioUrl: string,
): AudioPlayerState & AudioPlayerControls => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [duration, setDuration] = useState("00:00:00");

  useEffect(() => {
    const audio = new Audio(audioUrl);
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
      audio.pause();
      setAudioElement(null);
    };
  }, [audioUrl]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

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

  const downloadAudio = () => {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "audio.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    stopAudio,
    downloadAudio,
  };
};

export default useAudioPlayer;
