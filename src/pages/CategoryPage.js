import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    DefaultLayout, PostPreview, Pagination, Sidebar,
} from '../components/layout/index';
import LoadingPage from './LoadingPage';

import StyledContainer from '../styled/Container.styled';

import api from '../api/PrismicAPI';

const CategoryPage = ({ match }) => {
    const { category, page } = match.params;
    const [pending, togglePending] = useState(false);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        togglePending(true);
        const getCategoryPosts = async () => {
            try {
                const postByCategory = await api.getPostsByCategory(category);
                if (postByCategory) {
                    setDocuments(postByCategory);
                }
            } catch (error) {
                console.error(error);
            }
            togglePending(false);
        };
        getCategoryPosts();
        return () => {
            setDocuments([]);
        };
    }, [category]);
    
    if (pending) return <LoadingPage />;

    return (
        <DefaultLayout title={category}>
            <h2 className="category-header--name">{category.toUpperCase()}</h2>
            <StyledContainer>
                <Pagination path={`/category/${category}/`} limit={2} page={page}>
                    {documents.map((post) => (
                        <PostPreview {...post} key={post.uid} />
                    ))}
                </Pagination>
                <Sidebar />
            </StyledContainer>
        </DefaultLayout>
    );
};

export default CategoryPage;

CategoryPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            category: PropTypes.string,
        }),
    }).isRequired,
};
