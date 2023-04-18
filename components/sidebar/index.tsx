import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/Logoalt.svg";
import { wrapper, logoalt, img, text, bottomItems, link } from "./styles.css";
import PanelButton from "../panel-button";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  function handleClick(link: string) {
    setActiveLink(link);
  }
  return (
    <aside className={wrapper}>
      <div>
        <div className={logoalt}>
          <Image alt="logo" src={logo} className={img} />
          <h1 className={text}>Learnly</h1>
        </div>

        <Link
          href={"dashboard"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton
            iconName="dashboard"
            label="Dashboard"
            active={activeLink === "dashboard"}
          />
        </Link>
        <Link
          href={"subjects"}
          className={link}
          onClick={() => {
            handleClick("subjects");
          }}
        >
          <PanelButton
            iconName="auto_stories"
            label="Matérias"
            active={activeLink === "subjects"}
          />
        </Link>
        <Link
          href={"faults"}
          className={link}
          onClick={() => {
            handleClick("faults");
          }}
        >
          <PanelButton
            iconName="free_cancellation"
            label="Faltas"
            active={activeLink === "faults"}
          />
        </Link>
        <Link
          href={"grades"}
          className={link}
          onClick={() => {
            handleClick("grades");
          }}
        >
          <PanelButton
            iconName="receipt_long"
            label="Boletim"
            active={activeLink === "grades"}
          />
        </Link>
        <Link
          href={"schedule"}
          className={link}
          onClick={() => {
            handleClick("schedule");
          }}
        >
          <PanelButton
            iconName="calendar_today"
            label="Horários"
            active={activeLink === "schedule"}
          />
        </Link>
      </div>
      <div className={bottomItems}>
        <Link
          href={"settings"}
          className={link}
          onClick={() => {
            handleClick("settings");
          }}
        >
          <PanelButton
            iconName="settings"
            label="Preferências"
            active={activeLink === "settings"}
          />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
