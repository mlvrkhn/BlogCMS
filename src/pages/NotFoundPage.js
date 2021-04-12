import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import StyledContainer from '../styled/Container.styled';

function NotFoundPage() {
    return (
        <DefaultLayout
            title="Not Found"
        >
            <StyledContainer>
                <div>
                    404: this page does not exist.
                </div>
            </StyledContainer>
        </DefaultLayout>
    );
}

export default NotFoundPage;
