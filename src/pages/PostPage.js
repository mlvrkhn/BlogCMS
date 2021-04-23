import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { RichText, Date } from 'prismic-reactjs';
import { Client, linkResolver } from '../../prismic-config';

import DefaultLayout from '../components/layout/DefaultLayout';
import NotFoundPage from './NotFoundPage';
import LoadingPage from './LoadingPage';
import Slicer from '../components/slices/Slicer';

const PostPage = ({ match }) => {
    const { uid } = match.params;
    const [postData, setPostData] = useState(null);
    const [pending, togglePending] = useState(false);
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchPostData = async () => {
            togglePending(true);
            try {
                const blogPost = await Client.getByUID('blog-post', uid);
                if (blogPost) {
                    setPostData(blogPost);
                } else {
                    console.warn('Error fetching blog post');
                    toggleNotFound(true);
                }
            } catch (error) {
                console.error(error);
                toggleNotFound(true);
            }
            togglePending(false);
        };
        fetchPostData();
    }, [uid]);

    if (postData) {
        const dateString = Date(postData.data.date);
        const formattedDate = Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(dateString);
        const title = RichText.asText(postData.data.title);
        const article = (
            <article>
                <Link to="/">
                    <img
                        className="go-back-arrow"
                        type="icon"
                        alt="go-back-arrow"
                        src="../../public/assets/arrow-left.svg"
                    />
                </Link>
                <div className="article-timestamp">{formattedDate}</div>
                <div className="article-title">
                    {RichText.render(postData.data.title, linkResolver)}
                </div>
                <Slicer toSlice={postData.data.body} />
            </article>
        );

        return (
            <DefaultLayout
                title={title}
            >
                { article }
            </DefaultLayout>
        );
    }
    if (pending) return <LoadingPage />;
    if (notFound) return <NotFoundPage />;
    return null;
};

export default PostPage;

PostPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            uid: PropTypes.string,
        }),
    }).isRequired,
};
