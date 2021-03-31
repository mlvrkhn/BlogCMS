import React, { useEffect, useState } from 'react';
import StyledSidebar from '../../styled/Sidebar.styled';

import api from '../../api/PrismicAPI';

const Sidebar = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const posts = await api.getCategories();
                if (posts) {
                    setCategories(posts);
                } 
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
        console.log('🚀 ~ Sidebar ~ categories', categories);
    }, []);

    return (
        <StyledSidebar>
            {categories}
        </StyledSidebar>
    );
};

export default Sidebar;
