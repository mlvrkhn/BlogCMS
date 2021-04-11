/* eslint-disable react/prop-types */
import React from 'react';
import {
    Link, useParams,
} from 'react-router-dom';
import NotFoundPage from '../../pages/index';

const Pagination = (props) => {
    const { page = 1 } = useParams();
    const {
        children, path, limit = 5, posts
    } = props;
    console.log('🚀 ~ Pagination ~ posts', posts)
    
    const begin = limit * (page - 1);
    const end = limit * page;

    const pagesTotal = Math.ceil(children.length / limit);

    const links = new Array(pagesTotal).fill(0).map((link, index) => (
        <li key={index}>
            <Link to={`${path}${index + 1}`}>{index + 1}</Link>
        </li>
    ));

    if (page > pagesTotal) return null;
    return (
        <div>
            {children.slice(begin, end)}
            <ul className="pagination-links--container">{links}</ul>
        </div>
    );
};

export default Pagination;
