import {
  panelContainer,
  panelContent,
  panelTitleContainer,
} from "./styles.css";
import React from "react";

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  return (
    <div className={panelContainer}>
      <div className={panelTitleContainer}>{title}</div>
      <div className={panelContent}>{children}</div>
    </div>
  );
};

export default Panel;
