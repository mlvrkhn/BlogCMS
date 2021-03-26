import React, { useEffect, useState } from 'react'
import Prismic from '@prismicio/client';
import { Date, Link, RichText } from 'prismic-reactjs';

import { Client } from '../../prismic-config';

import {linkResolver} from '../../prismic-config'

const Blog = () => {

    const [ docData, setDocData ] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchin data YO...');
            const response = await Client.query(
                Prismic.Predicates.at('document.type', 'blog-post')
            );
            if (response) {
                setDocData(response.results);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            WELKOMMENT
        </div>
    )
}

export default Blog;