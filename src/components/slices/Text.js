import React from 'react'
import { Date, Link, RichText } from 'prismic-reactjs';

import linkResolver from '../../../prismic-config'

const Text = ({slice}) => {
    const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : 'text-section';
    return (
        <section style={{ textAlign: "justify", padding: '0.5em', margin: '1em 0'}}>
            {RichText.render(slice.primary.text, linkResolver)}
        </section>
    );
}

export default Text;
