import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Prismic from '@prismicio/client';
import { Date, RichText, Text } from 'prismic-reactjs';
import { format } from 'date-fns-tz';
import { Link as RouterLink } from 'react-router-dom';
import { Client, linkResolver } from '../../prismic-config';
import DefaultLayout from '../components/layout/DefaultLayout';
import NotFoundPage from './NotFoundPage';
import StyledPostPreview from '../styled/PostPreview.styled';

const HomePage = () => {
    const [blogData, setBlogData] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Client.query(Prismic.Predicates.at('document.type', 'blog-post'));
                if (response) {
                    setBlogData(response.results);
                } else {
                    console.warn('Homepage document was not found');
                }
            } catch (error) {
                console.error(error);
                toggleNotFound();
            }
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
    } if (notFound) {
        return <NotFoundPage />;
    }
    return null;
};

export default HomePage;
