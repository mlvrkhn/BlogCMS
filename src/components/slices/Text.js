import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../prismic-config';

const Text = ({ slice }) => {
    const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : 'text-section';
    return (
        <section className={sectionClass}>
            {RichText.render(slice.primary.text, linkResolver)}
        </section>
    );
};

export default Text;

Text.propTypes = {
    slice: PropTypes.shape({
        slice_label: PropTypes.string,
        primary: PropTypes.shape({
            text: PropTypes.arrayOf(PropTypes.shape({
                text: PropTypes.string,
                type: PropTypes.string,
            })),
        }),
    }).isRequired,
};
