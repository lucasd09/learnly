import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = styleVariants({
  active: {
    backgroundColor: vars.pallete.indigo[100],
    color: vars.colors.primary,
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
  inactive: {
    backgroundColor: vars.pallete.white,
    color: vars.colors.secondary.light,
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
});

export const iconContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 12px 0 12px",
});
