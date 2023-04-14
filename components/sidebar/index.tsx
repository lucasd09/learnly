import Image from "next/image";
import React from "react";
import logo from "@/public/Logoalt.svg";
import { wrapper, logoalt, img } from "./styles.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={wrapper}>
      <div className={logoalt}>
        <Image alt="logo" src={logo} className={img} />
        <h1>Learnly</h1>
      </div>
      <div>itens</div>
      <div>bottomitens</div>
    </aside>
  );
};

export default Sidebar;
