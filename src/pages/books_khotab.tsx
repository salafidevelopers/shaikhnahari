import AudioCard from "@/components/AudioCard";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentCard from "@/components/ContentCard";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import React, { Fragment } from "react";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";

export default function Books_khotab() {
  const paths = usePathname();
  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(paths);
  return (
    <Fragment>
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
        <div className="flex-1 space-y-3 bg-[#FEFCFA]">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-[#844E10]">الكتب</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29
            </p>
          </div>

          <div className="flex justify-between">
            <p className="flex-1 rounded-md bg-[#404040] p-2">تحقيق</p>
            <p className="flex-1 rounded-l-md bg-[#F5D4AE] p-2">تأليف</p>
          </div>

          <div className="my-2 space-y-2 rounded-md border-2 p-3">
            <ContentCard
              index={1}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={2}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={3}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={4}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={5}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={6}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={7}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
            <ContentCard
              index={8}
              title="سؤالات أبي زرعة الدمشقي في كتابه التأريخ للإمام يحيى بن معين جمع ودراسة"
            />
          </div>
        </div>
      </ContentLayout>
    </Fragment>
  );
}
