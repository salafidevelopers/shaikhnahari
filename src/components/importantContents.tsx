import React from "react";
import ImportantContentCard from "./ImportantContentCard";

const ImportantContents = () => {
  return (
    <aside className="self-start rounded-2xl border-2 p-2 shadow-md">
      <div className="my-2 rounded-md bg-primary-700 bg-[url('/assets/important_contentBg.jpg')] bg-cover bg-center bg-no-repeat p-4 text-center text-white bg-blend-darken">
        محتويات هامه
      </div>
      <div className="space-y-4">
        <ImportantContentCard
          title="شرح عمدة الأحكام (مستمر)"
          category="شروحات علمية"
        />
        <ImportantContentCard
          title="حكم غسل لباس الإحرام بالصابون المعطر"
          category="مقاطع وأسئلة"
        />
        <ImportantContentCard
          title="نعمة القرآن والتحذير من هجره"
          category="خطب"
        />
      </div>
    </aside>
  );
};

export default ImportantContents;
