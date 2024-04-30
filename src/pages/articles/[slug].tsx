// pages/articles/[slug].tsx
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
import { useRouter } from "next/router";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import ContentLayout from "@/components/ContentLayout";

interface ArticleProps {
  content: string;
}

const Article: React.FC<ArticleProps> = ({ content }) => {
  const router = useRouter();
  const { slug } = router.query;

  const paths = usePathname();
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
        <article className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] px-3 py-4 shadow-md">
          <div className="mb-4 flex items-center justify-between pb-4">
            <p className="text-3xl text-primary-700">{slug}</p>
            <button className="rounded-md bg-primary-700 p-2 text-white">
              أضيف فى : 10 يوليو 2015
            </button>
          </div>
          <div className="prose prose-h3:text-lg prose-p:text-sm">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </ContentLayout>
    </>
  );
};

export default Article;

// Implement getStaticPaths to define dynamic paths
export async function getStaticPaths() {
  // Define the list of possible slugs dynamically (e.g., from a data source)
  const articlesDirectory = path.join(process.cwd(), "src/utils/articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false, // Set fallback to false to pre-render only the defined paths
  };
}

// Implement getStaticProps to fetch data for a specific slug
export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Decode the slug to handle non-ASCII characters properly
  const decodedSlug = decodeURIComponent(params.slug);

  // Construct the file path using the decoded slug
  const filePath = path.join(
    process.cwd(),
    "src/utils/articles",
    `${decodedSlug}.md`,
  );

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { content } = matter(fileContent);

    return {
      props: {
        content,
      },
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      notFound: true, // Return 404 page if file not found or cannot be read
    };
  }
}
