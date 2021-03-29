import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children } = {}) => {
    const { pathname } = useLocation();
    // maybe MetaDecorator here
    return (
        <>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Header>header </Header>
                <main
                    style={{
                        display: 'flex',
						minHeight: '1200px',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>{children}</div>
                    {pathname === '/' ? <Sidebar /> : null}
                </main>
            </div>
            <Footer> footer</Footer>
        </>
    );
};

export default DefaultLayout;
