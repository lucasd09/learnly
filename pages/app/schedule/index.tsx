import Panel from "@/components/panel";
import { ScheduleGrid } from "@/components/schedule-grid";
import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { content } from "@/styles/schedule.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Schedule: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Horário de Aula</h1>
      <div className={content}>
        <Panel title='' fullWidth>
          <ScheduleGrid />
        </Panel>
      </div>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Schedule;
