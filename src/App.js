import React from 'react';
import {
    BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import {
    HomePage,
    ContactPage,
    AboutPage,
    NotFoundPage,
    PostPage,
    CategoryPage,
} from './pages/index';

import MetaDecorator from './MetaDecorator';
import StyledAppContainer from './styled/App.styled';

import theme from './styled/theme';
import GlobalStyle from './styled/GlobalStyle';

const App = () => {
    const routes = (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/post/:uid" component={PostPage} />
            <Route path="/category/:category/:page?" component={CategoryPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/:page?" component={HomePage} />
            <Route component={NotFoundPage} />
        </Switch>
    );

    const exampleObject = {
        name: 'example name',
        description: 'example description...',
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledAppContainer>
                    <MetaDecorator {...exampleObject} />
                    <Router>
                        {routes}
                    </Router>
                </StyledAppContainer>
            </ThemeProvider>
        </>
    );
};

export default App;
