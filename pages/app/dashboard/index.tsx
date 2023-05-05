import TemplateLayout from "@/layouts/templateLayout";
import { titleLayout } from "@/layouts/styles.css";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement, useEffect, useState } from "react";
import Panel from "@/components/panel";
import NoticePost from "@/components/notice-post";
import { content, leftSide } from "./styles.css";
import Scrollbars from "react-custom-scrollbars";
import GridContainer from "@/components/grid-container";
import GridItem from "@/components/gridItem";
import { link } from "@/components/sidebar/styles.css";
import Link from "next/link";

// MOCKS
import subjectsSource from "@/services/api/mock/mock-dashboard-subjects.json";
import postsSource from "@/services/api/mock/mock-dashboard-posts.json";

const Dashboard: NextPageWithLayout = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <h1 className={titleLayout}>Visão Geral</h1>
      <div className={content}>
        <div className={leftSide}>
        <Panel title="Matérias">
            {domLoaded && (
              <Link href={"subjects"} className={link}>
                <GridContainer>
                  {subjectsSource.map((data) => (
                    <GridItem name={data.name} frequency={data.frequency} key={data.id}/>
                  ))}
                </GridContainer>
              </Link>
            )}
          </Panel>
          <Panel title="Matérias" >
            {domLoaded && (
              <Link href={"subjects"} className={link}>
                <GridContainer>
                  {subjectsSource.map((data) => (
                    <GridItem name={data.name} frequency={data.frequency} key={data.id}/>
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
            {postsSource.map((data) => (
              <NoticePost post={data} key={data.id}/>
            ))}
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
