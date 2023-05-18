import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement, useState } from "react";
import SubjectCard from "@/components/subject-card";
import { content } from "../../../styles/subjects.css";

import subjectsSource from "@/services/api/mock/mock-dashboard-subjects.json";

const Subjects: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Matérias</h1>
      <div>
        <div className={content}>
          {subjectsSource.map((data) => (
            <SubjectCard name={data.name} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

Subjects.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Subjects;
