import AudioCard from "@/components/AudioCard";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { Spinner } from "@/components/spinner";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { audios } from "@/utils/data";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const Page = () => {
  const router = useRouter();
  // Get the slug from the pathname
  const { slug } = router.query;

  const paths = usePathname();
  // Decode the URL-encoded path to display proper names in breadcrumbs
  const decodedPaths = decodeURIComponent(paths);

  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(decodedPaths);
  console.log({ decodedPaths });

  const customBreadcrumbNames: Record<string, JSX.Element | string> = {
    slug: `${slug}`,
    // Add more custom mappings here if needed
  };

  return (
    <Fragment>
      <SecondaryHero />
      <div className="flex flex-grow flex-col justify-center px-14 md:px-10">
        <div className="my-4 flex items-center">
          <BreadcrumbsContainer>
            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
            {pathItems.map((item) => (
              <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
                {getCustomBreadcrumbName(item.name, customBreadcrumbNames)}
              </BreadcrumbsItem>
            ))}
          </BreadcrumbsContainer>
        </div>
      </div>
      <ContentLayout>
        <div className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] p-2 shadow-md">
          <div className="mb-4 flex items-center justify-between py-4">
            <p className="text-3xl text-primary-700">{slug}</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            {audios.map((audio) => (
              <AudioCard
                key={audio.id}
                size={"lg"}
                title={audio.title}
                audioUrl={audio.link}
              />
            ))}
          </ol>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default Page;
