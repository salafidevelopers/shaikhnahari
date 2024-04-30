import AudioCard from "@/components/AudioCard";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const SermonsKhutba = () => {
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
        <div className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] p-2 shadow-md">
          <div className="mb-4 flex items-center justify-between py-4">
            <p className="text-3xl text-primary-700">الآرشيفات: خطب</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            <AudioCard
              title="خطر الوسوسة "
              size="lg"
              audioUrl="/assets/audios/02.mp3"
            />
            <AudioCard
              title="مقتطفات من سيرة النبي ﷺ مع أهل بيته "
              size="lg"
              audioUrl="/assets/audios/03.mp3"
            />
            <AudioCard
              title="معالم الاتباع"
              size="lg"
              audioUrl="/assets/audios/01.mp3"
            />
            <AudioCard
              title="وجوب طاعة الرسول صلى الله عليه وسلم ومحبته"
              size="lg"
              audioUrl="/assets/audios/02.mp3"
            />
            <AudioCard
              title="نعمة القرآن والتحذير من هجره "
              size="lg"
              audioUrl="/assets/audios/02.mp3"
            />
          </ol>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default SermonsKhutba;
