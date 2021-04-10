import React from 'react';
import Helmet from 'react-helmet';

function MetaDecorator({ title = 'GDPR', description = 'DESC' }) {
    // console.log('🚀 ~ MetaDecorator ~ props', name);
    
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={title} content={description} />
        </Helmet>
    );
}

export default MetaDecorator;
