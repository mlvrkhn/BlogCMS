import React from 'react';
import {
    HashRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import {
    HomePage,
    ContactPage,
    AboutPage,
    NotFoundPage,
    PostPage,
} from './pages/index';

import MetaDecorator from './MetaDecorator';
import StyledAppContainer from './styled/App.styled'

const App = () => {
    const nav = (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
        </div>
    );

    const routes = (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/post/:uid" component={PostPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );

    const exampleObject = {
        name: 'example name',
        description: 'example description...',
    };

    return (
        <StyledAppContainer>
            <MetaDecorator {...exampleObject} />
            <Router>
                {/* {nav} */}
                {routes}
            </Router>
        </StyledAppContainer>
    );
};

export default App;
