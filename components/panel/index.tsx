import { gridContainer, gridTitleContainer } from "./styles.css";
import React from "react";

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  return (
    <div className={gridContainer}>
      <div className={gridTitleContainer}>{title}</div>
      {children}
    </div>
  );
};

export default Panel;
