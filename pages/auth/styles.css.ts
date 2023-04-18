import { style, styleVariants } from "@vanilla-extract/css";

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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const input = style({
  height: "38px",
  width: "358px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "8px",
  border: "1px solid #D5DAE1",
  padding: "0 8px 0 8px",
});

export const checkbox = style({
  marginRight: "8px",
});

export const inputContainer = style({
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const checkboxContainer = style({
  marginTop: "4px",
  display: "flex",
  justifyContent: "space-between",
});

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  fontSize: "16px",
  fontWeight: "500",
  color: "#333F51",
});

export const text = style({
  textAlign: "center",
});

export const button = styleVariants({
  primary: {
    cursor: "pointer",
    marginTop: "16px",
    marginBottom: "16px",
    height: "46px",
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    backgroundColor: "#6366f1",
    border: "none",
    borderRadius: "8px",
  },
  secondary: {
    cursor: "pointer",
    height: "46px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "white",
    borderRadius: "8px",
  },
});
