import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Grades: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Notas</h1>
    </div>
  );
};

Grades.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Grades;
