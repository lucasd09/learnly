import {
  panelContainer,
  panelContent,
  panelTitleContainer,
} from "./styles.css";
import { FC } from "react";

const Panel: FC<PanelProps> = ({ title, children, fullWidth }) => { 
  return (
    <div className={fullWidth ? panelContainer.fullWidth : panelContainer.fit}>
      <div className={panelTitleContainer}>{title}</div>
      <div className={panelContent}>{children}</div>
    </div>
  );
};

export default Panel;
