import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Prismic from '@prismicio/client';
import { Date, RichText, Text } from 'prismic-reactjs';

import { format } from 'date-fns-tz';
import { Client, linkResolver } from '../../prismic-config';

import DefaultLayout from '../components/layout/DefaultLayout';
import NotFoundPage from './NotFoundPage';
import LoadingPage from './LoadingPage';
import StyledPostPreview from '../styled/PostPreview.styled';

const HomePage = () => {
    const [blogData, setBlogData] = useState(null);
    const [notFound, toggleNotFound] = useState(false);
    const [pending, togglePending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            togglePending(true);
            try {
                const res = await Client.query(Prismic.Predicates.at('document.type', 'blog-post'));
                if (res) {
                    setBlogData(res.results);
                } else {
                    console.warn('Homepage document was not found');
                    toggleNotFound();
                }
            } catch (error) {
                console.error(error);
                toggleNotFound();
            }
            togglePending(false);
        };
        fetchData();
    }, []);

    if (blogData) {
        const blogPostPreview = blogData.map((blogPost, index) => {
            const dateString = Date(blogPost.data.date);
            const formattedDate = format(dateString, 'MMMM dd, yyyy');
            const postImage = blogPost.data.body.map((post) => {
                console.log('🚀 ~ postImage ~ post', post)
                if (post.slice_type === 'post_image') {
                    const imageUrl = post.primary.post_image.url;
                    const imageAlt = post.primary.post_image.alt;
                    return (
                        <img
                            key={imageAlt}
                            src={imageUrl}
                            alt={imageAlt}
                            style={{ width: '100%' }}
                        />
                    );
                }
            });
            return (
                <StyledPostPreview key={`postPreview-${index}`}>
                    <div>
                        <span>{formattedDate}</span>
                        <span>{`author: ${blogPost.data.author}`}</span>
                    </div>
                    <RouterLink to={`/post/${blogPost.uid}`}>
                        {RichText.render(blogPost.data.title, linkResolver)}
                        {RichText.render(blogPost.data.post_intro, linkResolver)}
                        {postImage}
                    </RouterLink>
                </StyledPostPreview>
            );
        });
        return (
            <DefaultLayout>
                {blogPostPreview}
            </DefaultLayout>
        );
    }
    if (pending) {
        return <LoadingPage />;
    }
    if (notFound) {
        return <NotFoundPage />;
    }
    return null;
};

export default HomePage;
