import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({children} = {}) => {
    console.log(children);
    return (
        <>
            <Header>header </Header>
                {children}
            <Footer> footer</Footer>
        </>
    );
};

export default DefaultLayout;
