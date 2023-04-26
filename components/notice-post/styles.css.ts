import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minWidth: "373px",
  minHeight: "239px",
  maxWidth: "500px",
  margin: "0 12px 0 12px",
});

export const header = style({
  display: "flex",
  alignItems: "center",
});

export const contentText = style({
  margin: "8px",
});

export const postname = style({
  fontSize: "24px",
});

export const postrole = style({
  fontSize: "18px",
});

export const imgHeader = style({
  width: "50px",
  height: "50px",
  backgroundColor: "grey",
  borderRadius: "100%",
  marginRight: "8px",
});
