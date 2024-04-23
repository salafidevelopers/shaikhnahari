import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";

const ImportantContents = () => {
  return (
    <aside className="self-start rounded-2xl border-2 p-2 shadow-md">
      <div className="my-2 rounded-md bg-[#844E10] bg-[url('/assets/important_contentBg.jpg')] bg-cover bg-center bg-no-repeat p-4 text-center text-white bg-blend-darken">
        محتويات هامه
      </div>
      <div className="mb-4 flex items-center gap-4 rounded-md border-2 border-[#F5D4AE] bg-[#FDF4EB] p-2">
        <GiSpeaker size={18} />
        <p className="flex-1 text-sm text-primary-800">
          شرح عمدة الأحكام (مستمر)
        </p>
        <div className=" rounded-md bg-white p-2">
          <FaPlay size={20} />
        </div>
        <div className="rounded-md bg-[#F5D4AE] p-2">
          <BsCloudDownload size={20} />
        </div>
        <p className="text-[10px]">شروحات علمية</p>
      </div>

      <div className="mb-4 flex items-center gap-4 rounded-md border-2 border-[#F5D4AE] bg-[#FDF4EB] p-2">
        <GiSpeaker size={18} />
        <p className="flex-1 text-sm text-primary-800">
          شرح عمدة الأحكام (مستمر)
        </p>
        <button className="rounded-md bg-white p-2">
          <FaPlay size={20} />
        </button>
        <button className="rounded-md bg-[#F5D4AE] p-2">
          <BsCloudDownload size={20} />
        </button>
        <p className="text-[10px]">شروحات علمية</p>
      </div>
    </aside>
  );
};

export default ImportantContents;
