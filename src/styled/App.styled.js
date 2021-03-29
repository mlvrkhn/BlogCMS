import styled from 'styled-components';

const StyledAppContainer = styled.div`
    position: relative;
    & .blog_title {
        position: relative;
        font-size: 3em;
        display: flex;
        justify-content: center;
        margin: 1em 0;
    }
    /* & .footer {
        width: 100vw;
        left: -200px;
    } */
`;

export default StyledAppContainer;
