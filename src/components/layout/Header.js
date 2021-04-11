import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavbar from '../../styled/Navbar.styled';
import StyledHeader from '../../styled/Header.styled';

const Header = () => {
    const nav = (
        <>
            <NavLink activeClassName="activeLink" exact to="/"> Home </NavLink>
            <NavLink activeClassName="activeLink" exact to="/contact"> Contact </NavLink>
            <NavLink activeClassName="activeLink" exact to="/about"> About </NavLink>
        </>
    );

    return (
        <StyledHeader>
            <h1 className="blog_title">Why learn GDPR?</h1>
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <img
                        rel="shortcut icon"
                        type="icon"
                        src="../../../public/assets/globe.svg"
                        alt="header-logo"
                        className="header-logo"
                    />
                </NavLink>
                <StyledNavbar>{nav}</StyledNavbar>
            </div>
        </StyledHeader>
    );
};

export default Header;
