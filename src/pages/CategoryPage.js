import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = ({match}) => {
    // const { topic } = useParams();
    const { uid } = match.params;
    console.log('🚀 ~ CategoryPage ~ topic', uid);
    return (
        <div>
            {`CATEGORY ${uid}`}
        </div>
    )
}

export default CategoryPage;
