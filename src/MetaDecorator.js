import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const MetaDecorator = ({ title = 'GDPR' }) => (
    <Helmet>
        <title>{title}</title>
    </Helmet>
);

export default MetaDecorator;

MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
}