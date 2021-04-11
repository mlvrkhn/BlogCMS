import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import StyledContainer from '../styled/Container.styled';


const AboutPage = () => (
    <DefaultLayout
        title="About"
    >
        <StyledContainer>
            <div className="about-container">
                <h2>About</h2>
                <h3>This blog is build with:</h3>
                <ul>
                    <li>Blog build with Prismic Headless CMS.</li>
                    <li>Routing: React Router.</li>
                </ul>
            </div>
        </StyledContainer>
    </DefaultLayout>
);

export default AboutPage;
