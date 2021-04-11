import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ slice }) => {
    const sectionClass = slice.slice_label
        ? `text-section-${slice.slice_label}`
        : 'text-section';
    const { url, alt } = slice.primary.post_image;

    return <img style={{ width: '100%' }} src={url} alt={alt} className={sectionClass} />;
};

export default Image;

Image.propTypes = {
    slice: PropTypes.shape({
        slice_label: PropTypes.string,
        primary: PropTypes.shape({
            post_image: PropTypes.shape({
                url: PropTypes.string,
                alt: PropTypes.string,
            }),
        }),
    }).isRequired,
};
