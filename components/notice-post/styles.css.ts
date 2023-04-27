import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minWidth: "373px",
  minHeight: "200px",
  maxWidth: "500px",
  margin: "0 12px 12px 12px",
  borderBottom: '1px solid gray'
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

export const iconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6366f1',
  border: 'none',
  width: '124px',
  height: '32px',
  borderRadius : '8px',
  color: 'white',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'pointer'
});

export const buttonBar = style({
  display: 'flex',
  justifyContent: 'center'
});