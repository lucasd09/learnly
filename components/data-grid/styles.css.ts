import { style, styleVariants } from "@vanilla-extract/css";

export const flexContainer = style({
    display: 'flex'
});

export const tableContainer = style({
    borderCollapse: 'collapse',
    width: '100%'
});

export const tableRow = style({
    
});

export const tableData = styleVariants({
    left: {
        borderBottom: "1px solid #D1D5DB",
        textAlign: "left",
        padding: "12px",
        
    },
    center: {
        borderBottom: "1px solid #D1D5DB",
        textAlign: "center",
        padding: "12px",
        
    }
});