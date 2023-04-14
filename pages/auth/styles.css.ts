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

export const input = style({
  height : "38px",
  width : "358px",
  boxShadow : "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius : "8px",
  border : "1px solid #D5DAE1",

});

export const checkbox = style({
  marginRight : "8px",
});

export const inputContainer = style({
  margin : "12px 0px 12px 0px"
});

export const checkboxContainer = style({
  marginTop : "4px",
  display : "flex",
  justifyContent : "space-between",
});



export const label = style({
  fontSize : "16px",
  fontWeight : "500",
  color : "#333F51",
});


export const button = style({
  height: '46px',
});

export const buttonVariant = style({});
