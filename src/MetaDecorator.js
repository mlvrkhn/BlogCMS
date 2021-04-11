import React from 'react';
import Helmet from 'react-helmet';

const MetaDecorator = ({ title = 'GDPR', description = 'DESC' }) => (
    <Helmet>
        <title>{title}</title>
    </Helmet>
);

export default MetaDecorator;
