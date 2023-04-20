import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import Panel from "@/components/panel";
import NoticePost from "@/components/notice-post";
import { content } from "./styles.css";
import Scrollbars from "react-custom-scrollbars";

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
          <Scrollbars style={{ width: 400, height: 400 }}>
            <NoticePost />
            <NoticePost />
            <NoticePost />
            <NoticePost />
            <NoticePost />
          </Scrollbars>
        </Panel>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Dashboard;
