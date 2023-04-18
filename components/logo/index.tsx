import Image from "next/image";
import React from "react";
import logo from "../../public/Frame.svg";
import { wrapper } from "./styles.css";

const Logo: React.FC = () => {
  return (
    <div className={wrapper}>
      <Image alt="logo" src={logo} />
      <h1>Learnly</h1>
    </div>
  );
};

export default Logo;
