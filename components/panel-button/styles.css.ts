import { style, styleVariants } from "@vanilla-extract/css";
import { themeClass, vars } from "@/styles/theme.css";

export const wrapper = style({
  display: "flex",
  height: "50px",
  alignItems: "center",
});

export const iconContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 12px 0 12px",
});

export const text = style({
  color: vars.colors.text.light,
});
