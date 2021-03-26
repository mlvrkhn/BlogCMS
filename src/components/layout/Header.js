import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{ display: 'flex', flexDirection: 'column'}}>
        <Link to="/">
            <div className="logo">Logo here</div>
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
