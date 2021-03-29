import styled from 'styled-components';

const StyledPostPreview = styled.div`
	padding: 1.5rem;
	display: flex;
	flex-direction: row;
	font-size: ${({ theme }) => theme.fontSize.large};
	& > div {
		display: block;
		width: 140px;
		margin-right: 1em;
		& > span {
			display: block;
			font-size: ${({ theme }) => theme.fontSize.small};
			line-height: 1.5em;
		}
	}
`;

export default StyledPostPreview;
