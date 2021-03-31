import React from 'react';
import {
    HashRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import {
    HomePage,
    ContactPage,
    AboutPage,
    NotFoundPage,
    PostPage,
    CategoryPage
} from './pages/index';

import MetaDecorator from './MetaDecorator';
import StyledAppContainer from './styled/App.styled';

import theme from './styled/theme';
import GlobalStyle from './styled/GlobalStyle';


const App = () => {
    const routes = (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/:category' component={CategoryPage} />
			<Route exact path='/contact' component={ContactPage} />
			<Route exact path='/about' component={AboutPage} />
			<Route exact path='/post/:uid' component={PostPage} />
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
