import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {
    HomePage, ContactPage, AboutPage, NotFoundPage,
} from './pages/index';

const App = () => (
    <>
        {/* <MetaDecorator /> // react helmet */}

        <Router>
            <Link to="/">{"HOME"}</Link>
            <Link to="/contact">{"CONTACT"}</Link>
            <Link to="/about">{"ABOUT"}</Link>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </>
);

export default App;
