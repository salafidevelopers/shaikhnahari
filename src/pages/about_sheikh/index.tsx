import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import React from "react";

const AboutSheikh = () => {
  const paths = usePathname();
  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(paths);

  return (
    <>
      <SecondaryHero />
      <div className="flex flex-grow flex-col justify-center px-14 md:px-10">
        <div className="my-4 flex items-center">
          <BreadcrumbsContainer>
            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
            {pathItems.map((item) => (
              <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
                {getCustomBreadcrumbName(item.name)}
              </BreadcrumbsItem>
            ))}
          </BreadcrumbsContainer>
        </div>
      </div>
      <ContentLayout>
        <div className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] p-2 shadow-md">
          <div className="mb-4 flex items-center justify-between py-4">
            <p className="text-xs text-primary-700">تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى إشعار آخر</p>
            <div className="flex gap-2 text-white py-2 items-center w-full">
                <div className="bg-gradient-to-b from-gray-70 to-gray-90 rounded-lg text-[0.7rem] px-5 py-1">زيارات : 15</div>
                <div className="bg-primary-700 rounded-lg px-5  text-[0.7rem] py-1">أضيف فى : 10 يوليو 2015</div>
            </div>
          </div>
          <div className="bg-primary-100 w-full py-3">
            <div className="text-primary-800 text-sm">تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى إشعار آخر</div>
          </div>
          <div className="flex justify-start gap-2 w-full">
            <div className="bg-primary-300 flex gap-1 p-2 rounded-md text-primary-700">
                <span className="text-xs">facebook</span>
                <FaFacebookSquare />
            </div>
            <div className="bg-primary-300 flex gap-1 p-2 rounded-md text-primary-700">
                <span className=" text-xs">twitter</span>
                <BsTwitterX />
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default AboutSheikh;
