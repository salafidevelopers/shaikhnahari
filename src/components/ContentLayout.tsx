import React, { ReactNode } from "react";
import ImportantContents from "./importantContents";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex gap-5 px-14 md:flex-wrap md:px-10 ">
      {children}
      <ImportantContents />
    </section>
  );
};

export default ContentLayout;
