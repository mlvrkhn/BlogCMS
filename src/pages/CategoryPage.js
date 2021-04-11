import React, { useEffect, useState } from 'react';

import {
    DefaultLayout, PostPreview, Pagination, Sidebar,
} from '../components/layout/index';

import NotFoundPage from './index';

import api from '../api/PrismicAPI';

const CategoryPage = ({ match }) => {
    const { category, page } = match.params;
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

    // const title = category.map(p => console.log(p));

    return (
        <DefaultLayout title={category}>
            <h2 className="category-header--name">{category.toUpperCase()}</h2>
            <main className="main-container">
                <Pagination path={`/category/${category}/`} limit={2}>
                    {documents.map((post) => (
                        <PostPreview {...post} key={post.uid} />
                    ))}
                </Pagination>
                <Sidebar />
            </main>
        </DefaultLayout>
    );
};

export default CategoryPage;
