import React from 'react';
import Prismic from '@prismicio/client';
import { Date, Link, RichText } from 'prismic-reactjs';

import Blog from './components/Blog'

const App = () => {
    return (
        <>
            <h1>
                BLOG
            </h1>
            <Blog />
        </>
    );
};

export default App;
