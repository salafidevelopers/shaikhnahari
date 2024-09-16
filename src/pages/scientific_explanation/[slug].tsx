import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";

import AudioCard from "@/components/AudioCard";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { Spinner } from "@/components/spinner";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { audios } from "@/utils/data";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const options = { next: { revalidate: 30 } };

// Async function to fetch post data based on slug
export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post?.image ? urlFor(post.image)?.width(550).height(310).url() : null;

  return {
    props: {
      post,
      postImageUrl,
    },
  };
}

// Component to render page content
const Page = ({ post, postImageUrl }: { post: SanityDocument; postImageUrl: string | null }) => {
  const router = useRouter();
  const { slug } = router.query;

  const paths = usePathname();
  const decodedPaths = decodeURIComponent(paths as string);

  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(decodedPaths);

  const customBreadcrumbNames: Record<string, JSX.Element | string> = {
    slug: `${slug}`,
    // Add more custom mappings if needed
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
              <AudioCard key={audio.id} size={"lg"} title={audio.title} audioUrl={audio.link} />
            ))}
          </ol>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default Page;
