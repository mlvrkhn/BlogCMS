/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { NotFoundPage, LoadingPage } from './index';
import {
    DefaultLayout, PostPreview, Sidebar, Pagination,
} from '../components/layout/index';

import StyledContainer from '../styled/Container.styled';

import api from '../api/PrismicAPI';

const HomePage = ({ match }) => {
    const { page } = match.params;
    const [blogPosts, setBlogPosts] = useState(null);
    const [notFound, toggleNotFound] = useState(false);
    const [pending, togglePending] = useState(false);
    const [postsTotal, setPostsTotal] = useState(2);

    useEffect(() => {
		togglePending(true);
		const fetchPosts = async () => {
			try {
				// const posts = await api.getAllPosts(page);
				const postsLength = await api.getPostsLength();
				const posts = await api.getPaginatedPosts(page);
				if (posts && postsLength) {
					setBlogPosts(posts);
					setPostsTotal(postsLength);
				} else {
					toggleNotFound();
				}
			} catch (error) {
				console.error(error);
				toggleNotFound();
			}
			togglePending(false);
		};
		fetchPosts();
		return () => {
			setBlogPosts(null);
		};
	}, [page]);

    if (blogPosts) {
        return (
            <DefaultLayout title="GDPR blog">
                <StyledContainer>
                    <Pagination
                        posts={blogPosts}
                        path="/home/"
                        limit={2}
                        postsTotal={postsTotal}
                    >
                        {blogPosts.map((post) => (
                            <PostPreview {...post} key={post.uid} />
                        ))}
                    </Pagination>
                    <Sidebar />
                </StyledContainer>
            </DefaultLayout>
        );
    }
    if (pending) return <LoadingPage />;
    if (notFound) return <NotFoundPage />;
    return null;
};

export default HomePage;
