import React from "react";
import { header } from "./styles.css";
import Icon from "../icon";

const NoticePost: React.FC = () => {
  return (
    <div>
      <div className={header}>
        <Icon icon="account_circle" />
        <div>
          <h1>Luis hilário</h1>
          <p>Coordenador</p>
        </div>
      </div>
      <div>
        <p>
          Bom dia pessoal! estão Abertas as incrições para o POSCOMP, espero
          todos vocês lá!
        </p>
        
      </div>
    </div>
  );
};

export default NoticePost;
