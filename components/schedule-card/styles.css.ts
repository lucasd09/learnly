import { style } from "@vanilla-extract/css";

export const content = style({
    width: '199px',
    marginBottom: '24px'
})

export const container = style({
    border: '1px solid #D1D5DB',
    height: '274px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const weekDays = style ({
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '28px'
})

export const subjects = style ({
    marginTop: '12px',
    width: '157px',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '28px',
    color: '#4B5563'
})

export const datetimes = style ({
    width: '157px',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '28px',
    color: '#4B5563'
})