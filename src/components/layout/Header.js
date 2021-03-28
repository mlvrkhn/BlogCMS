import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavbar from '../../styled/Navbar.styled'

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    padding: '30px',
};

const Header = () => (
    <header style={headerStyle}>
        <Link to="/" className="logo">
            <img rel="shortcut icon" type="icon" src="../../../public/assets/globe.svg" style={{width: '50%'}}></img>
        </Link>
        <StyledNavbar>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
        </StyledNavbar>
    </header>
);

export default Header;
