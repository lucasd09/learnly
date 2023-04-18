import Sidebar from "@/components/sidebar";
import React from "react";
import { template, topbar, wrapper, childrenLayout } from "./styles.css";

const TemplateLayout: React.FC<baseProps> = ({ children }) => {
  return (
    <div className={template}>
      <Sidebar />
      <div className={wrapper}>
        <span className={topbar}></span>
        <div className={childrenLayout}>{children}</div>
      </div>
    </div>
  );
};

export default TemplateLayout;
