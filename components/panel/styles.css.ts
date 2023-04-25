import { style } from "@vanilla-extract/css";

export const panelContainer = style({
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  border: "1px solid #D1D5DB",
  marginTop: "12px",
  width: "fit-content",
  maxHeight: "530px",
  overflow: "clip",
  scrollBehavior: "smooth",
});

export const panelTitleContainer = style({
  width: "fit-content",
  minWidth: "175px",
  height: "32px",
  backgroundColor: "#6366F1",
  borderRadius: "9px 0px 25px 0px",
  top: "0px",
  padding: "2px 0px 2px 18px",
  color: "#FFFFFF",
  fontWeight: "500",
  fontSize: "18px",
});

export const panelContent = style({
  padding: "16px 8px 16px 8px",
});
