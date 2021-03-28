import React from 'react';
import { Link } from 'react-router-dom';

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
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    </header>
);

export default Header;
