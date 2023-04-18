import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Schedule: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Schedule</h1>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Schedule;
