import { createGlobalStyle } from 'styled-components';

import ResetStyle from './ResetStyle';
import PoppinsMedium from '../fonts/Poppins-Medium.woff';
import PoppinsRegular from '../fonts/Poppins-Regular.woff';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff'), url(${PoppinsMedium}) format('woff');
    };
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', Verdana, Tahoma, sans-serif;
        line-height: 1.5em;
        background-color: ${({ theme }) => theme.colors.bright};
    }
`;

export default GlobalStyle;
