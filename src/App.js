import React from 'react';
import {
    HashRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import {
    HomePage, ContactPage, AboutPage, NotFoundPage,
} from './pages/index';

import MetaDecorator from './MetaDecorator';

const App = () => {
    
    const nav = (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <NavLink to='/' > HOME </NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
        </div>
    );

    const routes = (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );

    const exampleObject = {
        name: 'boring',
        description: 'nothing really... boring...',
    }

    return (
        <>
            <MetaDecorator {...exampleObject} />
            <Router>
                {/* {nav} */}
                {routes}
            </Router>
        </>
    );
};

export default App;
