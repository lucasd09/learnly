import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement, useEffect, useState } from "react";
import Panel from "@/components/panel";
import NoticePost from "@/components/notice-post";
import { content } from "./styles.css";
import Scrollbars from "react-custom-scrollbars";
import GridContainer from "@/components/gridContainer";
import GridItem from "@/components/gridItem";
import { link } from "@/components/sidebar/styles.css";
import Link from "next/link";

const post: Post = {
  name: "Luis Hilário Tobler Garcia",
  role: "Coordenador BCC",
  text: "Bom dia pessoal! estão Abertas as incrições para o POSCOMP, espero todos vocês lá!",
  imgURL: "URL",
};

const gridItemList: GridItemProps[] = [
  {
    name: "Computação Gráfica",
    frequency: 90,
  },
  {
    name: "Cálculo Numérico",
    frequency: 85,
  },
  {
    name: "Inteligência Artificial",
    frequency: 3,
  },
  {
    name: "Development and Design Patterns",
    frequency: 100,
  },
  {
    name: "Segurança da Informação e Auditoria",
    frequency: 75,
  },
  {
    name: "Estágio Supervisionado I",
    frequency: 100,
  },
];

const Dashboard: NextPageWithLayout = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true)
  }, []);
  
  return (
    <div>
      <h1 className={titleLayout}>Visão Geral</h1>
      <div className={content}>
        <div>
          <Panel title="Matérias">
            {domLoaded && (
              <Link href={"subjects"} className={link}>
                <GridContainer>
                  {gridItemList.map((gridItem, index) => (
                    <GridItem name={gridItem.name} frequency={gridItem.frequency} key={index}/>
                  ))}
                </GridContainer>
              </Link>
            )}
          </Panel>
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
