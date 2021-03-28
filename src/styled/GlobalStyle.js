import { createGlobalStyle } from 'styled-components';

import ResetStyle from './ResetStyle';
import PoppinsMedium from '../fonts/Poppins-Medium.woff';
import PoppinsRegular from '../fonts/Poppins-Regular.woff';

const GlobalStyle = createGlobalStyle`
    /* ${ResetStyle}; */
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff'), url(${PoppinsMedium}) format('woff');
    };
    *, *::after, *::before {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
