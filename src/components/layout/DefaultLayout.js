import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children } = {}) => {
    const { pathname } = useLocation();

    return (
        <main className="default_layout">
            <Header />
            {children}
            {pathname === '/' ? <Sidebar /> : null}
            <Footer> footer</Footer>
        </main>
    );
};

export default DefaultLayout;
