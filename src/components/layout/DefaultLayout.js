import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MetaDecorator from '../../MetaDecorator';

const DefaultLayout = (props) => {
    const { children = {}, title } = props;
    const { pathname } = useLocation();

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
