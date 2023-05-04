import { FC } from "react";
import source from "../../services/api/mock/mock-faults.json";
import { tableRow, tableData, tableContainer, tableHead } from "./styles.css";

const GridFaults: FC = () => {
  return (
    <table className={tableContainer}>
      <thead>
        <th className={tableHead}></th>
        <th className={tableHead}>Faltas</th>
        <th className={tableHead}>Limite</th>
        <th className={tableHead}>Frequência</th>
      </thead>
      <tbody>
        {source.map((data) => (
          <tr className={tableRow} key={data.id}>
            <td className={tableData.left}>{data.subject}</td>
            <td className={tableData.center}>{data.abcences}</td>
            <td className={tableData.center}>{data.limit}</td>
            <td className={tableData.center}>{}--%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridFaults;
