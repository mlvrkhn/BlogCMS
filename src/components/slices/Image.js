import React from 'react';
import { Date, Link, RichText } from 'prismic-reactjs';

import linkResolver from '../../../prismic-config';

const Image = ({ slice }) => {
    const sectionClass = slice.slice_label
        ? `text-section-${slice.slice_label}`
        : 'text-section';
    

    return <img style={{width: '100%'}} src={slice.primary.blog_post_image.url} alt={slice.primary.blog_post_image.alt} />;
};

export default Image;
