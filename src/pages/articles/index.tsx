import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentCard from "@/components/ContentCard";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const Articles = () => {
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
          <div className="mb-4 flex items-center justify-between gap-3 py-4 md:flex-wrap">
            <p className="text-3xl text-primary-700 md:text-xl">
              الآرشيفات: مقالات-الشيخ
            </p>
            <p className="rounded-md bg-[#844E10] p-2 text-white md:text-sm">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ul className="space-y-4">
            <ContentCard
              link="/articles"
              title="العلم فضله وشرفُ أهله"
              index={1}
            />
            <ContentCard
              link="/articles"
              title="أسباب تمادي المرء في الباطل بعد بيانه له"
              index={2}
            />
            <ContentCard link="/articles" title="العمل بالعلم" index={3} />
            <ContentCard
              link="/articles"
              title="لا يسقط الهجر لعدم انتفاع المهجور به"
              index={4}
            />
            <ContentCard
              link="/articles"
              title="بعض قواعد المنهج واصول المنهج السلفي"
              index={5}
            />
            <ContentCard
              link="/articles"
              title="الرَّد على الخطأ الذي ظهر وانتشر وذاع أمرٌ لا بدَّ منه على الكفاية "
              index={6}
            />
          </ul>
        </div>
      </ContentLayout>
    </>
  );
};

export default Articles;
