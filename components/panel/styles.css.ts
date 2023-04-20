import { style } from '@vanilla-extract/css';

export const gridContainer = style({
    display: 'grid',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #D1D5DB',
    marginTop: '12px',
    maxHeight: '490px',
    maxWidth: '597px',
});

export const gridTitleContainer = style({
    width: '236px',
    height: '32px',
    backgroundColor: '#6366F1',
    borderRadius: '9px 0px 25px 0px',
    left: '236px',
    top: '0px',
    padding: '2px 0px 2px 18px',
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: '18px'
});
