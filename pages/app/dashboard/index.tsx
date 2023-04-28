import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement } from "react";
import Panel from "@/components/panel";
import NoticePost from "@/components/notice-post";
import { content } from "./styles.css";
import Scrollbars from "react-custom-scrollbars";

const post: Post = {
  name: "Luis Hilário Tobler Garcia",
  role: "Coordenador BCC",
  text: "Bom dia pessoal! estão Abertas as incrições para o POSCOMP, espero todos vocês lá!",
  imgURL: "URL",
};

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
          <Scrollbars
            universal
            autoHeight
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            hideTracksWhenNotNeeded
            autoHeightMax={500}
          >
            <NoticePost post={post} />
            <NoticePost post={post} />
            <NoticePost post={post} />
            <NoticePost post={post} />
            <NoticePost post={post} />
            <NoticePost post={post} />
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
