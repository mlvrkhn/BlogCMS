import { css } from 'styled-components';

const theme = {
    colors: {
        dark: '#343434',
        bright: '#F7FFF7',
        coral: '#F56476',
        pink: '#E43F6F',
    },
    fontSize: {
        small: '0.8rem',
        medium: '1rem',
        large: '1.2rem',
        xlarge: '1.5rem',
    },
    innerPadding: {
        small: '0.5rem',
        medium: '50px',
        large: '1.25rem',
    },
    arrowDirection: {
        up: 'rotate(45deg)',
        down: 'rotate(-135deg)',
        left: 'rotate(-135deg)',
        right: 'rotate(-135deg)',
    },
    borderRadius: {
        small: '1rem',
        medium: '0.75rem',
        high: '50%',
    },
    boxShadow: {
        outer:
            '3px 3px 12px rgba(0, 0, 0, 0.2), -3px -3px 6px rgb(255, 255, 255, 0.08)',
        inner:
            '4px 6px 6px rgba(0, 0, 0, 0.2) inset, -4px -4px 6px rgb(255, 255, 255, 0.07) inset;',
    },
};

export default theme;
