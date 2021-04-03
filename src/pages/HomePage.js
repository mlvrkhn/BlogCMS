import React, { useEffect, useState } from 'react';

import { NotFoundPage, LoadingPage } from './index';
import { DefaultLayout, PostPreview, Sidebar, Pagination } from '../components/layout/index';

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
                <main style={{ display: 'flex', maxWidth: '900px', margin: '0 auto'}}>
                    {/* <Pagination> */}
                        <PostPreview posts={blogPosts} />
                    {/* </Pagination> */}
                    <Sidebar />
                </main>
            </DefaultLayout>
        );
    }
    if (pending) return <LoadingPage />;
    if (notFound) return <NotFoundPage />;
    return null;
};

export default HomePage;
