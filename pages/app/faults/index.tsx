import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";

const Faults: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Faltas</h1>
    </div>
  );
};

Faults.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Faults;
