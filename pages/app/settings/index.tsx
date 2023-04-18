import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Settings: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Tchengaaas</h1>
    </div>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Settings;
