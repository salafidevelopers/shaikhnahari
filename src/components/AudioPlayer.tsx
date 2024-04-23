import { useState, useEffect } from 'react';

export default function Home() {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const audioFiles = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3'];
  const [selectedAudio, setSelectedAudio] = useState(audioFiles[0]);

  useEffect(() => {
    const audio = new Audio();
    audio.addEventListener('loadedmetadata', () => {
      setDuration(formatTime(audio.duration));
    });
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(formatTime(audio.currentTime));
    });
    setAudioElement(audio);
    return () => {
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('timeupdate', () => {});
    };
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.src = selectedAudio;
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [audioElement, selectedAudio, isPlaying]);

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
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const ballPosition = () => {
    if (!audioElement || !audioElement.duration) return '0%';
    const percentage = (audioElement.currentTime / audioElement.duration) * 100;
    const barWidth = 100; // Assuming the progress bar width is 100%
    const ballWidth = 10; // Adjust this value according to the ball width
    const position = (percentage * (barWidth - ballWidth)) / 100;
    return `${position}%`;
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-lg flex items-center w-full px-3 gap-1">
        <button onClick={togglePlayPause} className="py-2 rounded-md ">
            {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                        </svg>

                       : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                        </svg>
            }
        </button>

        <div className="w-full h-2 bg-primary-300 rounded-full relative overflow-hidden">
          <div
            className="h-full bg-primary-300 rounded-full absolute top-0"
            style={{ width: ballPosition(), height: '100%', borderRadius: '50%', transform: 'translateX(-50%)' }}
          />
          <div className="h-2 w-2 bg-primary-800 rounded-full absolute top-0 left-0 right-0" />
        </div>

        <div className="text-xs flex gap-2 text-primary-700">
           <span> {currentTime}</span>
            {/* <span>/{duration}</span> */}
            </div>
      </div>
    </div>
  );
}
