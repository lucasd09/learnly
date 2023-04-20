import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import Panel from "@/components/panel";
import NoticePost from "@/components/notice-post";
import { content } from "./styles.css";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={titleLayout}>Visão Geral</h1>
      <div className={content}>
        <div>
          <Panel title="Matérias">CHILDREN</Panel>
          <Panel title="Faltas">CHILDREN</Panel>
          <Panel title="Entregas">CHILDREN</Panel>
        </div>
        <Panel title="Avisos">
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
          <NoticePost />
        </Panel>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Dashboard;
