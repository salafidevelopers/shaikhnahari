import { cn } from "@/utils";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContentCard = ({
  title,
  index,
  link,
}: {
  title: string;
  index: number;
  link?: string;
}) => {
  return (
    <li className="flex items-center gap-4 rounded-md border-2 border-primary-300 bg-primary-100 p-2 sm:flex-wrap">
      <Link
        href={`${link}/${title}`}
        className={cn(
          "flex cursor-pointer items-center gap-3 text-[13px] font-medium text-primary-800",
          !link && "pointer-events-none cursor-not-allowed",
        )}
      >
        <span>.{index}</span>
        <p className="text-xs">{title}</p>
      </Link>
      <div className="flex items-center gap-4 ">
        <p className="text-xs font-medium text-primary-700">
          أضيف : 21يوليو 2015
        </p>
        <button className="flex items-center gap-2 rounded-md bg-[#F5D4AE] p-2">
          <p className="text-[10px] sm:hidden">Twitter</p>
          <FaXTwitter className="text-xl sm:text-base" />
        </button>
        <button className="flex items-center gap-2 rounded-md bg-[#F5D4AE] p-2">
          <p className="text-[10px] sm:hidden">Facebook</p>
          <FaFacebookSquare className="text-xl sm:text-base" />
        </button>
        <p className="text-[10px]">زيارات : 53٬40</p>
      </div>
    </li>
  );
};

export default ContentCard;
