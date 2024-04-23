import React from "react";
import useTranslation from "next-translate/useTranslation";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export const BiographyCard = () => {
  return (
    <div className="border-2 p-2 rounded-md bg-[#FEFCFA]">
      <div className="flex items-center justify-between py-4">
        <p className="font-medium text-3xl">ترجمة الشيخ</p>
        <p className="bg-[#844E10] p-2 text-white rounded-md">
          عدد المواد الموجودة : 29
        </p>
      </div>
      {/* 
      <div className="grid gap-4 grid-cols-2 bg-[#FDF4EB] p-2 rounded-md border-[#F5D4AE] border-2 mb-4">
        <div className=" flex gap-2">
          <div className="">1.</div>
          <div>العلم: فضله وشرفُ أهله</div>
        </div>
        <div className=" flex gap-2">
          <div className="">أضيف : 21يوليو 2015</div>
          <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
            <p>Twitter</p>
            <FaXTwitter size={30} />
          </div>
          <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
            <p>Facebook</p>
            <FaFacebookSquare size={30} />
          </div>
          <div>زيارات : 53٬40</div>
        </div>
      </div> */}

      <div className="flex gap-4 items-center bg-[#FDF4EB] p-2 rounded-md border-[#F5D4AE] border-2 mb-4">
        <div>1.</div>
        <div>العلم: فضله وشرفُ أهله</div>
        <div>أضيف : 21يوليو 2015</div>
        <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
          <p>Twitter</p>
          <FaXTwitter size={30} />
        </div>
        <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
          <p>Facebook</p>
          <FaFacebookSquare size={30} />
        </div>
        <div>زيارات : 53٬40</div>
      </div>

      <div className="flex gap-4 items-center bg-[#FDF4EB] p-2 rounded-md border-[#F5D4AE] border-2 mb-4">
        <div>1.</div>
        <div>العلم: فضله وشرفُ أهله</div>
        <div>أضيف : 21يوليو 2015</div>
        <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
          <p>Twitter</p>
          <FaXTwitter size={30} />
        </div>
        <div className="flex gap-2 items-center bg-[#F5D4AE] p-2 rounded-md">
          <p>Facebook</p>
          <FaFacebookSquare size={30} />
        </div>
        <div>زيارات : 53٬40</div>
      </div>
    </div>
  );
};
