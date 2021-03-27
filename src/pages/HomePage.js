import React, { useEffect, useState } from 'react';

import Prismic from '@prismicio/client';
import { Date, Link, RichText } from 'prismic-reactjs';
import { Client } from '../../prismic-config';

import Header from '../components/layout/Header';
import DefaultLayout from '../components/layout/DefaultLayout';
import Footer from '../components/layout/Footer';
import NotFoundPage from './NotFoundPage';

import Slicer from '../components/slices/Slicer';

const HomePage = () => {
    const [blogData, setBlogData] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchin data YO...');
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
        return (
            <>
                <DefaultLayout>
                    {/* <Slicer toSlice={blogData} /> */}
                    {blogData.map((blogPost, index) => (
                        <Slicer toSlice={blogPost.data.body} key={`slice-${index}`} />
                    ))}
                    ;
                </DefaultLayout>
            </>
        );
    } if (notFound) {
        return <NotFoundPage />;
    }
    return null;
};

export default HomePage;