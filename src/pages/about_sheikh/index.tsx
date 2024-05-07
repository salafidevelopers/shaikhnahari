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
            <p className="text-xs text-primary-700">
              تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى إشعار
              آخر
            </p>
            <div className="flex w-full items-center gap-2 py-2 text-white">
              <p className="rounded-lg bg-gradient-to-b from-gray-70 to-gray-90 px-5 py-1 text-[0.7rem]">
                زيارات : 15
              </p>
              <p className="rounded-lg bg-primary-700 px-5  py-1 text-[0.7rem]">
                أضيف فى : 10 يوليو 2015
              </p>
            </div>
          </div>
          <div className="w-full bg-primary-100 py-3">
            <p className="text-sm text-primary-800">
              تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى إشعار
              آخر
            </p>
          </div>
          <div className="flex w-full justify-start gap-2">
            <div className="flex gap-1 rounded-md bg-primary-300 p-2 text-primary-700">
              <span className="text-xs">facebook</span>
              <FaFacebookSquare />
            </div>
            <div className="flex gap-1 rounded-md bg-primary-300 p-2 text-primary-700">
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
