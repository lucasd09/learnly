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
          <PanelButton iconName="dashboard" label="Dashboard" />
        </Link>
        <Link
          href={"subjects"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton iconName="auto_stories" label="Matérias" />
        </Link>
        <Link
          href={"dashboard"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton iconName="free_cancellation" label="Faltas" />
        </Link>
        <Link
          href={"dashboard"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton iconName="receipt_long" label="Boletim" />
        </Link>
        <Link
          href={"dashboard"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton iconName="calendar_today" label="Horários" />
        </Link>
      </div>
      <div className={bottomItems}>
        <Link
          href={"dashboard"}
          className={link}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <PanelButton iconName="settings" label="Preferências" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
