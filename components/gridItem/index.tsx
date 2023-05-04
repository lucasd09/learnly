import { FC } from "react";
import { tableRow, tableCell } from "./styles.css";

const GridItem: FC<GridItemProps> = ({ name, frequency }) => {
  return (
    <tr className={tableRow}>
      <td className={tableCell.none}>{name}</td>
      <td className={frequency <= 75 ? tableCell.red : tableCell.none}>
        {frequency}%
      </td>
    </tr>
  );
};

export default GridItem;
