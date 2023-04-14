import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRight: "1px solid #D1D5DB",
  width: "50px",
  transition: "width 0.1s ease-in-out",
  overflow: "hidden",

  ":hover": {
    width: "150px",
  },
});

export const logoalt = style({
  display: "flex",
  alignItems: "center",
  height: "75px",
});

export const img = style({
  margin: "0 12px 0 12px",
});
