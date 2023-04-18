import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = styleVariants({
  active: {
    backgroundColor: "#EEF2FF",
    borderLeft: "3px solid #6366F1",
    paddingLeft: "9px",
    color: "#6366F1",
    display: "flex",
    height: "50px",
    alignItems: "center",
    fontWeight: "600",
  },
  inactive: {
    backgroundColor: vars.pallete.white,
    paddingLeft: "12px",
    color: "#6B7280",
    display: "flex",
    height: "50px",
    alignItems: "center",
    transition: "0.2s ease-in-out",
    ":hover": {
      backgroundColor: "#EEF2FF",
    },
    fontWeight: "400",
  },
});

export const iconContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //margin: "0 12px 0 12px",
});

export const text = style({
  marginLeft: "12px",
});
