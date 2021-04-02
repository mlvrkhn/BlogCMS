/* eslint-disable no-tabs */
import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: relative;
	bottom: 0;
	background-color: ${({ theme }) => theme.colors.dark};
	width: 100vw;
	height: 10em;
	padding: 2rem;
	text-align: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.bright};
`;

export default StyledFooter;
