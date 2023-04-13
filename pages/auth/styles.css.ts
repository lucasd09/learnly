import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F3F4F6",
  height: "100vh",
});

export const container = style({
  width: "358px",
  height: "583px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
});
