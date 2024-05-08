import AudioCard from "@/components/AudioCard";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import ContentLayout from "@/components/ContentLayout";
import SecondaryHero from "@/components/SecondaryHero";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const ClipsQA = () => {
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
            <p className="text-3xl text-primary-700">الآرشيفات: مقاطع وأسئلة</p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            <AudioCard
              title="هل يسوغ البحث العلمي للمبتدئ في طلب العلم"
              size="lg"
              audioUrl="/assets/audios/01.mp3"
            />
            <AudioCard
              title="لاعتماد في طلب العلم على الأشرطة"
              size="lg"
              audioUrl="/assets/audios/03.mp3"
            />
            <AudioCard
              title="النصيحة لمن فقد بركة الوقت واستغلاله بالعلم"
              size="lg"
              audioUrl="/assets/audios/02.mp3"
            />
            <AudioCard
              title="مسألة مد الأرجل بعد صلاة الجماعة, أو مقابل الرفوف التي فيها المصاحف والكتب "
              size="lg"
              audioUrl="/assets/audios/01.mp3"
            />
          </ol>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default ClipsQA;
