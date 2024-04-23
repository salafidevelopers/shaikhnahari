import React from "react";
import useTranslation from "next-translate/useTranslation";
import { FaPlay } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";

export const ContentCard = () => {
  return (
    <div className="border-2 p-2 rounded-md">
      <div className="p-4 bg-[#844E10] text-center rounded-md my-2 text-white">
        محتويات هامه
      </div>

      <div className="flex gap-4 items-center bg-[#FDF4EB] p-2 rounded-md border-[#F5D4AE] border-2 mb-4">
        <GiSpeaker size={30} />
        <div>شرح عمدة الأحكام (مستمر)</div>
        <div className=" bg-white p-2 rounded-md">
          <FaPlay size={20} />
        </div>
        <div className="bg-[#F5D4AE] p-2 rounded-md">
          <BsCloudDownload size={20} />
        </div>
        <div>شروحات علمية</div>
      </div>

      <div className="flex gap-4 items-center bg-[#FDF4EB] p-2 rounded-md border-[#F5D4AE] border-2 mb-4">
        <GiSpeaker size={30} />
        <div>شرح عمدة الأحكام (مستمر)</div>
        <div className=" bg-white p-2 rounded-md">
          <FaPlay size={20} />
        </div>
        <div className="bg-[#F5D4AE] p-2 rounded-md">
          <BsCloudDownload size={20} />
        </div>
        <div>شروحات علمية</div>
      </div>
    </div>
  );
};
