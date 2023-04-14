import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Subjects: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Subjects</h1>
    </div>
  );
};

Subjects.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Subjects;
