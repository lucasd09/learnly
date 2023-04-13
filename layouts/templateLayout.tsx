import Sidebar from "@/components/sidebar";
import React from "react";

const TemplateLayout: React.FC<baseProps> = ({ children }) => {
  return (
    <div className={template}>
      <Sidebar />
      {children}
    </div>
  );
};

export default TemplateLayout;
