import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "white",
  borderRight: "1px solid #D1D5DB",
  width: "50px",
  transition: "width 0.1s ease-in-out",
  overflow: "hidden",
  transitionDuration: "500ms",

  ":hover": {
    width: "175px",
  },
});

export const bottomItems = style({
  display: "flex",
  flexDirection: "column",
});

export const logoalt = style({
  display: "flex",
  alignItems: "center",
  height: "75px",
});

export const img = style({
  margin: "0 12px 0 11px",
});

export const text = style({
  color: "#2A3342",
});

export const link = style({
  textDecoration: "none",
});
