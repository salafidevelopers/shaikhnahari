import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import SecondaryHero from "@/components/SecondaryHero";
import { Spinner } from "@/components/spinner";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const Contact = () => {
  const paths = usePathname();

  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(paths);
  return (
    <>
      <SecondaryHero />
      <div className="my-4 px-14 md:px-10">
        <BreadcrumbsContainer>
          <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
          {pathItems.map((item) => (
            <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
              {getCustomBreadcrumbName(item.name)}
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
              info@an-nahari.com
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
          <section className="col-span-1 grid gap-5">
            <div className=" overflow-hidden rounded-md bg-primary-200">
              <div className="bg-primary-700 bg-[url('/assets/contact-asidebg.jpg')] bg-cover bg-center bg-no-repeat p-4  text-white bg-blend-darken">
                <p className="text-3xl font-medium ">اتصل بنا</p>
              </div>
              <ul className="list-inside list-disc space-y-3 p-3 text-sm">
                <li>يوليو 2015</li>
                <li>يوليو 2015</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-md bg-primary-200">
              <div className="bg-primary-700 bg-[url('/assets/contact-asidebg.jpg')] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-darken">
                <p className="text-3xl font-medium">مواضيع هامه</p>
              </div>
              <ul className="list-inside list-disc space-y-3 p-3 text-sm">
                <li>
                  تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى
                  إشعار آخر - 13٬464
                </li>
                <li>
                  تتوقف دروس فضيلة الشيخ عبد الله بن عبد الرحيم البخاري إلى
                  إشعار آخر - 13٬464
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
