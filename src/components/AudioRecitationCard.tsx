import React from "react";
import { SlCloudDownload } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import AudioPlayer from "./AudioPlayer";

export default function AudioRecitationCard() {
  return (
    <div className="">
      <div>
        <div
          className={`space-y-2 rounded-md bg-[url('/assets/audioCard_bg.jpg')] bg-cover bg-center bg-no-repeat p-4`}
        >
          <div className="flex justify-between">
            <p className="flex items-center justify-end rounded-md bg-primary-600 pe-14 ps-4 text-sm text-white md:pl-3 md:pr-2 md:text-xs">
              سورة الفاتحة
            </p>
            <div className="flex items-center gap-2 rounded-md bg-primary-200  p-3 text-primary-950">
              <span className="text-sm md:text-xs">Download</span>
              <SlCloudDownload className="text-xl md:text-xs" />
            </div>
          </div>

          <AudioPlayer size="lg" audioUrl="/assets/audios/01.mp3" />

          <div className="flex items-center  gap-5 rounded-md bg-primary-800 p-2 md:p-1">
            <p className="flex items-center gap-1 rounded-sm bg-primary-100 px-1 py-2 text-xs text-primary-700">
              أضيف : 21يوليو 2015
            </p>
            <div className="flex items-center gap-1 rounded-sm bg-primary-300 px-1 py-2 text-primary-700">
              <BsTwitterX size={12} className="text-primary-900" />
              <span className="text-xs">Twitter</span>
            </div>
            <div className="flex items-center gap-1 rounded-sm bg-primary-300 px-1 py-2 text-primary-700">
              <FaFacebookSquare size={12} className="text-primary-900" />
              <span className="text-xs">Facebook</span>
            </div>
            <p className="text-sm text-white md:text-xs">زيارات : 53٬40</p>
          </div>
        </div>
      </div>
    </div>
  );
}
