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
      <div className="my-4 px-10">
        <BreadcrumbsContainer>
          <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
          {pathItems.map((item) => (
            <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
              {item.name === "loading" ? (
                <Spinner className="w-4 h-4" />
              ) : (
                item.name
              )}
            </BreadcrumbsItem>
          ))}
        </BreadcrumbsContainer>
      </div>
      <section className="px-10">
        <div className="mb-7 flex justify-between items-center">
          <h2 className="text-primary-700 text-3xl font-medium">اتصل بنا</h2>
          <button className="bg-primary-700 rounded-lg py-2 px-3 text-white">
            عدد المواد الموجودة : 29
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <section className="grid col-span-3 w-full bg-primary-100 border  border-primary-400 rounded-lg p-8">
            <p className="text-primary-700 mb-4">
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
                  className="bg-white border border-gray-200 w-full h-10 rounded-md mt-2"
                />
              </div>
              <div>
                <p className="text-[#404040]">البريد الإلكتروني:</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="bg-white border border-gray-200 w-full h-10 rounded-md mt-2"
                />
              </div>
              <div>
                <p className="text-[#404040]">الرسالة:</p>
                <textarea
                  name=""
                  id=""
                  cols={70}
                  rows={10}
                  className="bg-white border border-gray-200 w-full rounded-md mt-2"
                ></textarea>
              </div>
              <button className="bg-primary-700 rounded-xl py-4 px-3 text-white">
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
