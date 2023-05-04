import { style, styleVariants } from "@vanilla-extract/css";

export const tableHead = style({
  paddingBottom: "8px",
});

export const tableContainer = style({
  borderCollapse: "collapse",
  width: "100%",
});

export const tableRow = style({});

export const tableData = styleVariants({
  left: {
    borderTop: "1px solid #D1D5DB",
    textAlign: "left",
    fontWeight: "600",
    padding: "12px",
  },
  center: {
    borderTop: "1px solid #D1D5DB",
    textAlign: "center",
    padding: "12px",
    width: "150px",
  },
});
