import "material-symbols/outlined.css";
import React from "react";

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <i className="material-symbols-outlined">{icon}</i>;
};

export default Icon;
