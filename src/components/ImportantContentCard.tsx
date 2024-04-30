import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";

const ImportantContentCard = ({
  title,
  category,
}: {
  title: string;
  category: string;
}) => {
  return (
    <article className="flex items-center gap-4 rounded-md border-2 border-primary-300 bg-primary-100 p-2">
      <GiSpeaker size={18} />
      <p className="flex-1 text-sm text-primary-800">{title}</p>
      <button className="rounded-md bg-white p-2 ">
        <FaPlay size={20} />
      </button>
      <button className="rounded-md bg-primary-300 p-2 text-primary-700">
        <BsCloudDownload size={20} />
      </button>
      <p className="cursor-pointer text-[10px] text-primary-700">{category}</p>
    </article>
  );
};

export default ImportantContentCard;
