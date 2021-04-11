import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import MetaDecorator from '../MetaDecorator';

function NotFoundPage() {

    return (
        <DefaultLayout>
            <main
                className="main-container"
            >
                <div>
                    404: this page does not exist.
                </div>
            </main>
        </DefaultLayout>
    )
}

export default NotFoundPage;
