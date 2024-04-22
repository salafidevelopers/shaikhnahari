import React from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";

const AudioCard = ({ size }: { size: string }) => {
  return (
    <div className="font-alexandria p-2 flex bg-primary-200 gap-2 items-center text-primary-700 justify-between">
      <div className="font-semibold text-[18px]">العلم: فضله وشرفُ أهله</div>
      <div className="flex-grow bg-white rounded-md px-2 py-1">slider</div>
      <button className="border border-x-2 py-2 font-bold flex gap-2.5 px-3 bg-primary-400 rounded-md  items-center">
        <span className="font-bold text-[12px] ">Download</span>
        <span className="text-2xl font-bold">
          <RiDownloadCloud2Line />
        </span>
      </button>
      <div className="text-[12px] font-bold">بتاريخ : 21/يوليو/2015</div>
    </div>
  );
};

export default AudioCard;
