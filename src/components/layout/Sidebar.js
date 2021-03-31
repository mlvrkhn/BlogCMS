import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Date, RichText, Text } from 'prismic-reactjs';
import StyledSidebar from '../../styled/Sidebar.styled';
import { linkResolver } from '../../../prismic-config';

import api from '../../api/PrismicAPI';

const Sidebar = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await api.getCategories();
                if (categories) {
                    setDocuments(categories);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const nav = documents.map((category) => {
        const categoryName = category.data.category_name[0].text;
        return (
            <RouterLink to={`/category/${category.uid}`}>
                {categoryName}
            </RouterLink>
        );
    });

    return (
        <StyledSidebar>
            {nav}
        </StyledSidebar>
    );
};

export default Sidebar;
