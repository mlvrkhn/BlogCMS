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
        margin: 2em 0;
        text-align: justify;
    }
    .blog_title {
        font-size: ${({ theme }) => theme.fontSize.xxlarge};
    }
    .post_preview-img {
        width: 100%;
    }
    .default_layout {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        justify-text: center;
        & article {
            max-width: 60vw;
            margin: 0 auto;
        }
        & header {
            margin: 2em auto;
            width: 80vw;
        }
    }
    .activeLink {
        transform: scale(1.3);
        border-bottom: 1px solid black;
    }
    .pagination-links--container {
        justify-content: center;
        padding: 2em;
        textAlign: center;
        display: flex;
        list-style-type: none;
        & li {
            margin: 0 1em;
        }

    }
`;

export default GlobalStyle;
