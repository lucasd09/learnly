import Image from "next/image";
import React from "react";
import logo from "@/public/frame.svg";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div>
        <Image alt="logo" src={logo} />
      </div>
      <div>itens</div>
    </div>
  );
};

export default Sidebar;
