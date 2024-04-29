import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentCard from "@/components/ContentCard";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const ScientificExplains = () => {
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
            <p className="text-3xl text-primary-700">الآرشيفات: شروحات علمي</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            <ContentCard
              link="/scientific_explanation"
              title="شرح عمدة الأحكام (مستمر)"
              index={1}
            />
            <ContentCard
              link="/scientific_explanation"
              title="شرح التقريب والتيسير للنووي (مستمر)"
              index={2}
            />
            <ContentCard
              link="/scientific_explanation"
              title="مجالس السماع في الشمائل المحمدية للترمذي"
              index={3}
            />
            <ContentCard
              link="/scientific_explanation"
              title="شرح فضل علم السلف على علم الخلف لابن رجب – قطر"
              index={4}
            />
          </ol>
        </div>
      </ContentLayout>
    </>
  );
};

export default ScientificExplains;
