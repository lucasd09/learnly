import DataGrid from "@/components/grid-grades";
import Panel from "@/components/panel";
import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import { content } from "./styles.css";
import GridGrades from "@/components/grid-grades";

const Grades: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Notas</h1>
      <div className={content}>
        <Panel title="" fullWidth>
          <GridGrades />
        </Panel>
      </div>
    </div>
  );
};

Grades.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Grades;
