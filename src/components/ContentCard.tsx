import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContentCard = ({ title, index }: { title: string; index: number }) => {
  return (
    <li className="flex items-center gap-4 rounded-md border-2 border-[#F5D4AE] bg-[#FDF4EB] p-2">
      <Link
        href={`/scientific_explanation/${encodeURIComponent(title)}`}
        className="flex flex-1 cursor-pointer items-center gap-3 text-[13px] font-medium text-primary-800"
      >
        <span>.{index}</span>
        <p className="text-xs">{title}</p>
      </Link>

      <p className="text-xs font-medium text-primary-700">
        أضيف : 21يوليو 2015
      </p>
      <button className="flex items-center gap-2 rounded-md bg-[#F5D4AE] p-2">
        <p className="text-[10px]">Twitter</p>
        <FaXTwitter size={20} />
      </button>
      <button className="flex items-center gap-2 rounded-md bg-[#F5D4AE] p-2">
        <p className="text-[10px]">Facebook</p>
        <FaFacebookSquare size={20} />
      </button>
      <p className="text-[10px]">زيارات : 53٬40</p>
    </li>
  );
};

export default ContentCard;
