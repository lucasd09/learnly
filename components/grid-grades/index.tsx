import { FC } from "react";
import source from "../../services/api/mock/mock-grid-subjects.json";
import { tableRow, tableData, tableContainer, tableHead } from "./styles.css";

const GridGrades: FC = () => {
  return (
    <table className={tableContainer}>
      <thead>
        <th className={tableHead}></th>
        <th className={tableHead}>A.C</th>
        <th className={tableHead}>A.O</th>
        <th className={tableHead}>Nota Final</th>
      </thead>
      <tbody>
        {source.map((data) => (
          <tr className={tableRow} key={data.id}>
            <td className={tableData.left}>{data.subject}</td>
            <td className={tableData.center}>{data.firstGrade}</td>
            <td className={tableData.center}>{data.secondGrade}</td>
            <td className={tableData.center}>{data.finalgrade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridGrades;
