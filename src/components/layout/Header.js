import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavbar from '../../styled/Navbar.styled';
import StyledHeader from '../../styled/Header.styled';

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 0',
};

const Header = () => (
    <StyledHeader>
        <h1 className="blog_title">
            Why learn GDPR?
        </h1>
        <div style={headerStyle}>
            <Link to="/" className="logo">
                <img
                    rel="shortcut icon"
                    type="icon"
                    src="../../../public/assets/globe.svg"
                    alt="blog-logo"
                    style={{ width: '50%' }}
                />
            </Link>
            <StyledNavbar>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </StyledNavbar>
        </div>
    </StyledHeader>
);

export default Header;
