import React from "react";
import Icon from "../icon";
import { iconContainer, wrapper, text } from "./styles.css";

const PanelButton: React.FC<PanelButtonProps> = ({
  iconName,
  label,
  active,
}) => {
  return (
    <div className={active ? wrapper.active : wrapper.inactive}>
      <div className={iconContainer}>
        <Icon icon={iconName} />
      </div>
      <p className={text}>{label}</p>
    </div>
  );
};

export default PanelButton;
