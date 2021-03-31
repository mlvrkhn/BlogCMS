import React, { useEffect, useState } from 'react';

import DefaultLayout from '../components/layout/DefaultLayout';
import PostPreview from '../components/layout/PostPreview';
import NotFoundPage from './NotFoundPage';
import LoadingPage from './LoadingPage';

import api from '../api/PrismicAPI';

const HomePage = () => {
    const [blogPosts, setBlogPosts] = useState(null);
    const [notFound, toggleNotFound] = useState(false);
    const [pending, togglePending] = useState(false);

    useEffect(() => {
        togglePending(true);
        const fetchPosts = async () => {
            try {
                const posts = await api.getAllPosts();
                if (posts) {
                    setBlogPosts(posts);
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
    }, []);

    if (blogPosts) {
        return (
            <DefaultLayout>
                <PostPreview posts={blogPosts} />
            </DefaultLayout>
        );
    }
    if (pending) return <LoadingPage />;
    if (notFound) return <NotFoundPage />;
    return null;
};

export default HomePage;
