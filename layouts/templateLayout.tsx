import React from "react";

const TemplateLayout: React.FC<baseProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default TemplateLayout;