import DataGrid from "@/components/data-grid";
import Panel from "@/components/panel";
import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import { content } from "./styles.css";

const Grades: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Notas</h1>
      <div className={content}>
        <Panel title='' fullWidth>
         <DataGrid />
        </Panel>
      </div>
    </div>
  );
};

Grades.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Grades;
