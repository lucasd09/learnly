import { FC } from "react";
import { gridContainer } from "./styles.css";

const GridContainer: FC<GridContainerProps> = ({ children }) => {
    return (
        <table className={gridContainer}>
            {children}
        </table>
    );
};

export default GridContainer;
  