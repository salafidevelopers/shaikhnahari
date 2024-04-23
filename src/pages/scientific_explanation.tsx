import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentCard from "@/components/ContentCard";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { Spinner } from "@/components/spinner";
import { usePathname } from "next/navigation";
import React from "react";

const ScientificExplains = () => {
  const paths = usePathname();

  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));

  return (
    <>
      <SecondaryHero />
      <div className="flex flex-grow flex-col justify-center px-10">
        <div className="my-4 flex items-center justify-end">
          <BreadcrumbsContainer>
            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
            {pathItems.map((item) => (
              <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
                {item.name === "loading" ? (
                  <Spinner className="h-4 w-4" />
                ) : (
                  item.name
                )}
              </BreadcrumbsItem>
            ))}
          </BreadcrumbsContainer>
        </div>
      </div>
      <section className="flex gap-5 px-10">
        <div className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] p-2 shadow-md">
          <div className="mb-4 flex items-center justify-between py-4">
            <p className="text-3xl text-primary-700">الآرشيفات: شروحات علمي</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            <ContentCard title="شرح عمدة الأحكام (مستمر)" index={1} />
            <ContentCard
              title="شرح التقريب والتيسير للنووي (مستمر)"
              index={2}
            />
            <ContentCard
              title="مجالس السماع في الشمائل المحمدية للترمذي"
              index={3}
            />
            <ContentCard
              title="شرح فضل علم السلف على علم الخلف لابن رجب – قطر"
              index={4}
            />
          </ol>
        </div>

        <ImportantContents />
      </section>
    </>
  );
};

export default ScientificExplains;
