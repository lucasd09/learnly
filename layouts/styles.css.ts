import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const template = style({
  display: "flex",
  backgroundColor: "#F3F4F6",
  height: "100vh",
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const topbar = style({
  width: '100%',
  height: '40px',
  backgroundColor: 'white',
  borderBottom: "1px solid #D1D5DB",
});

export const childrenLayout = style({
  width: '100%',
  height: '100%',
  paddingTop: '61px',
  paddingLeft: '40px',
});