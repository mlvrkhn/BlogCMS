import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    DefaultLayout, PostPreview, Pagination, Sidebar,
} from '../components/layout/index';

import StyledContainer from '../styled/Container.styled';

import api from '../api/PrismicAPI';

const CategoryPage = ({ match }) => {
    const { category, page = 1 } = match.params;
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const getCategoryPosts = async () => {
            try {
                const postByCategory = await api.getPostsByCategory(category);
                if (postByCategory) {
                    setDocuments(postByCategory);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getCategoryPosts();
        return () => {
            setDocuments([]);
        };
    }, [category]);

    return (
        <DefaultLayout title={category}>
            <h2 className="category-header--name">{category.toUpperCase()}</h2>
            <StyledContainer>
                <Pagination
                    path={`/category/${category}/`}
                    limit={5}
                    page={page}
                    postsTotal={documents.length}
                >
                    {documents.map((post) => <PostPreview {...post} key={post.uid} />)}
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
