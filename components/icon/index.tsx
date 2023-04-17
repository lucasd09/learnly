import "material-design-icons/iconfont/material-icons.css";
import React from "react";

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <i className="material-icons">{icon}</i>;
};

export default Icon;
