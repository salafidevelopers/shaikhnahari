import AudioCard from "@/components/AudioCard";
import AudioPlayer from "@/components/AudioPlayer";
import ContentCard from "@/components/ContentCard";
import SecondaryHero from "@/components/SecondaryHero";
import ImportantContents from "@/components/importantContents";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const Page = () => {
  const router = useRouter();
  return (
    <Fragment>
      <SecondaryHero />
      <section className="my-4 flex gap-5 px-14 md:px-10">
        <div className="flex-1 rounded-2xl border-2 bg-[#FEFCFA] p-2 shadow-md">
          <div className="mb-4 flex items-center justify-between py-4">
            <p className="text-3xl text-primary-700">
               شرح عمدة الأحكام (مستمر)
            </p>
            <p className="rounded-md bg-[#844E10] p-2 text-white">
              عدد المواد الموجودة : 29{" "}
            </p>
          </div>
          <ol className="space-y-4">
            <AudioCard size={"lg"} />
            <AudioCard size={"lg"} />
            <AudioCard size={"lg"} />
            <AudioCard size={"lg"} />
            <AudioCard size={"lg"} />
          </ol>
        </div>

        <ImportantContents />
      </section>
    </Fragment>
  );
};

export default Page;
