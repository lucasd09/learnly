import {FC} from 'react';
import source from '../../pages/api/mock/mock-grid-subjects.json'
import { tableRow, tableData, tableContainer, flexContainer } from './styles.css';

const DataGrid: FC = () => {
  return <div>
      <table className={tableContainer}>
          <thead>
            <th></th>
            <th>A.C</th>
            <th>A.O</th>
            <th>Nota Final</th>
          </thead>
          <tbody>
            {source.map((data) => (
                <tr className={tableRow}>
                    <td className={tableData.left}>{data.subject}</td>
                    <td className={tableData.center}>{data.firstGrade}</td>
                    <td className={tableData.center}>{data.secondGrade}</td>
                    <td className={tableData.center}>{data.finalgrade}</td>
                </tr>
            ))}
          </tbody>
        </table>
  </div>;
}

export default DataGrid;