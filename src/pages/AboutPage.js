import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

const AboutPage = () => {
    console.log('about page...');
    return (
        <DefaultLayout
            title="About"
        >
            <main className="main-container">
                <div className="about-container">
                    <h2>About</h2>
                    <h3>This blog is build with:</h3>
                    <ul>
                        <li>Blog build with Prismic Headless CMS.</li>
                        <li>Routing: React Router.</li>
                    </ul>
                </div>
            </main>
        </DefaultLayout>
    );
};

export default AboutPage;
