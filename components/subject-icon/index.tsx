import { FC } from "react";
import React from "react";
import Icon from "../icon";
import { subjectIcon } from "./styles.css";

const SubjectIcon: FC = ( ) => {
  return (
    <div className={subjectIcon}>
      <Icon icon="folder"></Icon>
    </div>
  );
};

export default SubjectIcon;
