import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Prismic from '@prismicio/client';
import DefaultLayout from '../components/layout/DefaultLayout';

import { Client } from '../../prismic-config';

const CategoryPage = ({ match }) => {
    const { category } = match.params;
    const [doc, setDoc] = useState();

    useEffect(() => {
        Client.query([
            Prismic.Predicates.at('document.type', 'category'),
        ]).then((response) => {
            setDoc(response.results);
        });
    }, []);

    return (
        <DefaultLayout>
            {`CATEGORY ${category}`}
        </DefaultLayout>
    );
};

export default CategoryPage;
