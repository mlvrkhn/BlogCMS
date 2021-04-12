import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import api from '../../api/PrismicAPI';

import StyledSidebar from '../../styled/Sidebar.styled';

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
        return () => {
            setDocuments([]);
        };
    }, []);

    const nav = documents.map((category, index) => {
        const categoryName = category.data.category_name[0].text;
        return (
            <li key={`sidebar-${index}`}>
                <RouterLink to={`/category/${category.uid}`}>
                    {categoryName}
                </RouterLink>
            </li>
        );
    });

    return (
        <StyledSidebar>
            <h2>Categories:</h2>
            <ul>
                { nav }
            </ul>
        </StyledSidebar>
    );
};

export default Sidebar;
