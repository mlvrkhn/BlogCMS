import React, { useState, useEffect } from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { format } from 'date-fns-tz';
import { Link } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout';
import { Client, linkResolver } from '../../prismic-config';

import NotFoundPage from './NotFoundPage';
import Slicer from '../components/slices/Slicer';

const PostPage = ({ match }) => {
    const { uid } = match.params;
    const [postData, setPostData] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchPostData = async () => {
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
        };
        fetchPostData();
        // window.scrollTo(0, 0);
    }, [uid]);

    if (postData) {
        const dateString = Date(postData.data.date);
        const formattedDate = format(dateString, 'MMMM dd, yyyy');

        return (
            <DefaultLayout>
                <article
                    style={{
                        width: '80%',
                        margin: 'auto',
                        justifyItems: 'center',
                    }}
                >
                    <Link to="/">
                        <img
                            rel=""
                            type="icon"
                            alt="go-back-arrow"
                            src="../../public/assets/arrow-left.svg"
                            style={{ height: '2em', marginBottom: '2em' }}
                        />
                    </Link>
                    {RichText.render(postData.data.title, linkResolver)}
                    {formattedDate}
                    <Slicer toSlice={postData.data.body} />
                </article>
            </DefaultLayout>
        );
    } if (notFound) {
        return <NotFoundPage />;
    }
    return null;
};

export default PostPage;
