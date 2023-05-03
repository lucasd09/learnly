import { style, styleVariants } from "@vanilla-extract/css";

export const tableRow = style({});

export const tableCell = styleVariants({
  none: {
    borderBottom: "1px solid #D1D5DB",
    textAlign: "left",
    ":last-child": {
      textAlign: "right",
    },
    color: "#4B5563",
  },
  red: {
    borderBottom: "1px solid #D1D5DB",
    textAlign: "left",
    ":last-child": {
      textAlign: "right",
    },
    color: "red",
  },
});
