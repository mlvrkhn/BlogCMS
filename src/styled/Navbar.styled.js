import styled from 'styled-components';

const StyledNavbar = styled.ul`
	align-items: center;
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.large};
	& > a {
		text-decoration: none;
		margin: 0 2rem;
	}
`;

export default StyledNavbar;
