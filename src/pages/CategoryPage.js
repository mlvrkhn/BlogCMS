import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../components/layout/DefaultLayout';
import PostPreview from '../components/layout/PostPreview';

import api from '../api/PrismicAPI';

const CategoryPage = ({ match }) => {
    const { category } = match.params;
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
    }, [category]);

    return (
        <DefaultLayout>
            <h2 className="category_header--name">{`Category ${category}`}</h2>
            <PostPreview posts={documents} />
        </DefaultLayout>
    );
};

export default CategoryPage;
