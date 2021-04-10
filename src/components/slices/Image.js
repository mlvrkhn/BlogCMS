import React from 'react';
import { Date, Link, RichText } from 'prismic-reactjs';

import linkResolver from '../../../prismic-config';

const Image = ({ slice }) => {
    const sectionClass = slice.slice_label
        ? `text-section-${slice.slice_label}`
        : 'text-section';
    const { url, alt } = slice.primary.post_image;

    return <img style={{ width: '100%' }} src={url} alt={alt} className={sectionClass} />;
};

export default Image;
