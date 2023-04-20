import {
  panelContainer,
  panelContent,
  panelTitleContainer,
} from "./styles.css";
import { FC } from "react";

const Panel: FC<PanelProps> = ({ title, children }) => {
  return (
    <div className={panelContainer}>
      <div className={panelTitleContainer}>{title}</div>
      <div className={panelContent}>{children}</div>
    </div>
  );
};

export default Panel;
