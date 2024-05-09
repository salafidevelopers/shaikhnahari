import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { Spinner } from "@/components/spinner";
import { usePathname } from "next/navigation";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import ContentLayout from "@/components/ContentLayout";

const Biography = ({ content }: { content: string }) => {
  const paths = usePathname();
  // Decode the URL-encoded path to display proper names in breadcrumbs
  const decodedPaths = decodeURIComponent(paths);

  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(decodedPaths);

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
            <p className="text-3xl text-primary-700">ترجمة الشيخ</p>
            <div className="flex items-center gap-4">
              <button className="rounded-md bg-black p-2 text-white">
                زيارات : 23٬887{" "}
              </button>
              <button className="rounded-md bg-[#844E10] p-2 text-white">
                أضيف فى : 10 يوليو 2015
              </button>
            </div>
          </div>
          <div className="prose prose-h3:text-lg prose-p:text-sm">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default Biography;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/utils/biography.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  return {
    props: {
      content,
    },
  };
}
