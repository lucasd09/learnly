import DataGrid from "@/components/grid-grades";
import Panel from "@/components/panel";
import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import { content } from "../../../../styles/subjectPage.css";
import GridGrades from "@/components/grid-grades";
import { useRouter } from 'next/router';

const Subject: NextPageWithLayout = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <h1 className={titleLayout}>Notas</h1>
      <div className={content}>
        <Panel title="" fullWidth>
          Matéria: {pid}
        </Panel>
      </div>
    </div>
  );
};

Subject.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Subject;