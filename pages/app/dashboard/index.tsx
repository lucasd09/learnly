import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import {
  AppPropsWithLayout,
  NextPageWithLayout,
} from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Dashboard</h1>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Dashboard;
