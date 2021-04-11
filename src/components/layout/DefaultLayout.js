import React from 'react';
import {Header, Footer} from './index';
import MetaDecorator from '../../MetaDecorator';

const DefaultLayout = (props) => {
    const { children = {}, title } = props;

    return (
        <div className="default_layout">
            <MetaDecorator title={title} />
            <Header />
            {children}
            <Footer> footer</Footer>
        </div>
    );
};

export default DefaultLayout;
