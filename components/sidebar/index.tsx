import Image from "next/image";
import React from "react";
import logo from "@/public/Logoalt.svg";
import { wrapper, logoalt, img, text, bottomItems } from "./styles.css";
import PanelButton from "../panel-button";

const Sidebar: React.FC = () => {
  return (
    <aside className={wrapper}>
      <div>
        <div className={logoalt}>
          <Image alt="logo" src={logo} className={img} />
          <h1 className={text}>Learnly</h1>
        </div>

        <PanelButton iconName="dashboard" label="Dashboard" />
        <PanelButton iconName="auto_stories" label="Matérias" />
        <PanelButton iconName="free_cancellation" label="Faltas" />
        <PanelButton iconName="receipt_long" label="Boletim" />
        <PanelButton iconName="calendar_today" label="Horários" />
      </div>
      <div className={bottomItems}>
        <PanelButton iconName="settings" label="Preferências" />
      </div>
    </aside>
  );
};

export default Sidebar;
