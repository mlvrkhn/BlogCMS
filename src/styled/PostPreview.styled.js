import styled from 'styled-components';

const StyledPostPreview = styled.div`
	padding: 2.5rem;
	display: flex;
	flex-direction: row;
	font-size: ${({ theme }) => theme.fontSize.large};
	& > div {
		display: block;
		margin-right: 2em;
		& > span {
			display: block;
			font-size: ${({ theme }) => theme.fontSize.small};
		}
	}
`;

export default StyledPostPreview;