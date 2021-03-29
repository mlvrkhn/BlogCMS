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
                const response = await Client.query(Prismic.Predicates.at('document.type', 'blog-post'));
                if (response) {
                    setBlogData(response.results);
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
        const blogSlices = blogData.map((blogPost, index) => {
            const dateString = Date(blogPost.data.date);
            const formattedDate = format(dateString, 'MMMM dd, yyyy');

            return (
                <StyledPostPreview key={`postPreview-${index}`}>
                    <div>
                        <span>
                            {formattedDate}
                        </span>
                        <span>
                            {`Author: ${blogPost.data.author}`}
                        </span>
                    </div>
                    <RouterLink to={`/post/${blogPost.uid}`}>
                        {RichText.render(blogPost.data.title, linkResolver)}
                        <p>Lorem ipsum dolor sit amet, consectetur adip inc</p>
                    </RouterLink>
                </StyledPostPreview>
            );
        });
        return (
            <>
                <DefaultLayout>
                    {blogSlices}
                </DefaultLayout>
            </>
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
