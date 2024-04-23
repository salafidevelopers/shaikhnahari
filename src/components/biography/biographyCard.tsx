import React from "react";
import ContentCard from "../ContentCard";

export const BiographyCard = () => {
  return (
    <div className="border-2 p-2 rounded-md bg-[#FEFCFA]">
      <div className="flex items-center justify-between py-4">
        <p className="font-medium text-3xl">ترجمة الشيخ</p>
        <p className="bg-[#844E10] p-2 text-white rounded-md">
          عدد المواد الموجودة : 29
        </p>
      </div>

      <ContentCard />
    </div>
  );
};
