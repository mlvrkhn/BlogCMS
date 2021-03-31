import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Prismic from '@prismicio/client';
import DefaultLayout from '../components/layout/DefaultLayout';

import api from '../api/PrismicAPI'

import { Client } from '../../prismic-config';

const CategoryPage = ({ match }) => {
    const { category } = match.params;
    const [documents, setDocuments] = useState();

    // useEffect(() => {
    //     Client.query([
    //         Prismic.Predicates.at('document.type', 'category'),
    //     ]).then((response) => {
    //         setDocuments(response.results);
    //     });
    // }, []);

    useEffect(() => {
        api.getPostsByCategory(category);
    }, [category])

    return (
        <DefaultLayout>
        {/* return list of posts of this category */}
            {`CATEGORY ${category}`}
        </DefaultLayout>
    );
};

export default CategoryPage;
