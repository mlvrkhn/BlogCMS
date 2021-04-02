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
        background-color: ${({ theme }) => theme.colors.bright};
    }
    a {
        text-decoration: none;
        color: #000;
    }
    p {
        line-height: 1.5em;
        font-size: ${({ theme }) => theme.fontSize.medium};
        margin: 1em 0;
    }
    .blog_title {
        font-size: ${({ theme }) => theme.fontSize.xxlarge};
    }
    .post_preview-img {
        width: 100%;
    }
    .default_layout {
        display: flex;
        min-height: 1200px;
        flex-direction: row;
        justify-text: center;
    }
    .activeLink {
        transform: scale(1.5)
    }
`;

export default GlobalStyle;
