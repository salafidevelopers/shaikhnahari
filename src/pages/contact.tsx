import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import SecondaryHero from "@/components/SecondaryHero";
import { Spinner } from "@/components/spinner";
import { usePathname } from "next/navigation";
import React from "react";

const Contact = () => {
  const paths = usePathname();

  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));
  return (
    <>
      <SecondaryHero />
      <div className="my-4 px-14 md:px-10">
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
      <section className="px-14 md:px-10">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-3xl font-medium text-primary-700">اتصل بنا</h2>
          <button className="rounded-lg bg-primary-700 px-3 py-2 text-white">
            عدد المواد الموجودة : 29
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <section className="col-span-3 grid w-full rounded-lg border  border-primary-400 bg-primary-100 p-8">
            <p className="mb-4 text-primary-700">
              للتواصل الرسمي مع الموقع عبر النموذج التالي أو من خلال البريد :
              info@elbukhari.com
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[#404040]">الإسم:</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="mt-2 h-10 w-full rounded-md border border-gray-200 bg-white"
                />
              </div>
              <div>
                <p className="text-[#404040]">البريد الإلكتروني:</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="mt-2 h-10 w-full rounded-md border border-gray-200 bg-white"
                />
              </div>
              <div>
                <p className="text-[#404040]">الرسالة:</p>
                <textarea
                  name=""
                  id=""
                  cols={70}
                  rows={10}
                  className="mt-2 w-full rounded-md border border-gray-200 bg-white"
                ></textarea>
              </div>
              <button className="rounded-xl bg-primary-700 px-3 py-4 text-white">
                Send message{" "}
              </button>
            </div>
          </section>
          <section className="col-span-1 h-10 bg-red-50"></section>
        </div>
      </section>
    </>
  );
};

export default Contact;
