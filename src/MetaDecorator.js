import React from 'react';
import Helmet from 'react-helmet';

function MetaDecorator({name, description}) {
    // console.log('🚀 ~ MetaDecorator ~ props', name);
    return (
        <Helmet>
            <title>{name}</title>
            <meta name={name} content={description} />
        </Helmet>
    );
}

export default MetaDecorator;
