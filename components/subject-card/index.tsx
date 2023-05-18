import React from "react";
import { subjectContent } from "./styles.css";
import Panel from "../panel";
import SubjectIcon from "../subject-icon";

const SubjectCard: React.FC<SubjectCardProps> = ({ name }) => {
  return (
    <div>
      <Panel title=''>
        <div className={subjectContent}>
          <SubjectIcon/>
          {name}
        </div>
      </Panel>
    </div>
  );
};

export default SubjectCard;
