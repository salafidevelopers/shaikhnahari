import React from "react";
import { SlCloudDownload } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function AudioRecitationCard() {
  return (
    <div className="">
      <div>
        <div
          className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-2`}
        >
          <div className="flex justify-between">
            <div className="flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md">
              <span className="md:text-xs text-xl">
                <SlCloudDownload />
              </span>
              <span className="md:text-xs text-sm">Download</span>
            </div>
            <div className="text-white md:pl-3 md:pr-2 md:text-xs text-sm pl-14 pr-4 bg-primary-600 items-center justify-end flex rounded-md">
              <span> سورة الفاتحة </span>
            </div>
          </div>
          {/* audio player */}
          <div>
            <audio></audio>
          </div>
          <div className="bg-primary-800 rounded-md flex justify-between p-2 md:p-1">
            <div></div>
            <div className="flex items-center md:space-x-2 space-x-5">
              <span className="text-white md:text-xs text-sm">
                زيارات : 53٬40
              </span>
              <div className="flex bg-primary-300 py-2 px-1 rounded-sm text-primary-700 items-center space-x-1">
                <span className="text-lg md:text-sm text-primary-900">
                  <FaFacebookSquare />
                </span>
                <span className="md:text-xs text-sm"> Facebook </span>
              </div>
              <div className="flex bg-primary-300 py-2 px-1 rounded-sm text-primary-700 items-center space-x-1">
                <span className="text-lg md:text-sm text-primary-900">
                  <BsTwitterX />
                </span>
                <span className="text-sm md:text-xs">Twitter</span>
              </div>
              <div className="flex bg-primary-300 py-2 px-1 rounded-sm text-primary-700 items-center space-x-1">
                <span className="text-sm md:text-xs">أضيف : 21يوليو 2015 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
