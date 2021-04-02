import styled from 'styled-components';

const StyledAppContainer = styled.div`
	position: relative;
    min-height: 100vh;
	& .blog_title {
		position: relative;
		font-size: 3em;
		display: flex;
		justify-content: center;
		margin: 1em 0;
	}
	& .loading_page {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

export default StyledAppContainer;
