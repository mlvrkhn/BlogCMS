import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" className="logo">
                <img
                    rel="shortcut icon"
                    type="icon"
                    src="../../../public/assets/globe.svg"
                    alt="blog-logo"
                    style={{ width: '50%' }}
                />
            </NavLink>
            <StyledNavbar>
                <NavLink activeClassName="activeLink" exact to="/">Home</NavLink>
                <NavLink activeClassName="activeLink" exact to="/contact">Contact</NavLink>
                <NavLink activeClassName="activeLink" exact to="/about">About</NavLink>
            </StyledNavbar>
        </div>
    </StyledHeader>
);

export default Header;
