/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Pagination = (props) => {
    const {
        children, path, limit = 5, page = 1, postsTotal = 5,
    } = props;

    const begin = limit * (page - 1);
    const end = limit * page;

    const links = new Array(Math.ceil(postsTotal / limit)).fill(0).map((link, index) => (
        <li key={index}>
            <NavLink className="activeStyle" to={`${path}${index + 1}`}>{index + 1}</NavLink>
        </li>
    ));

    const pageExist = Number(page) <= postsTotal / limit || 1;

    if (!pageExist) {
        return <Redirect to="/not-found" />;
    }
    return (
        <div>
            {children.slice(begin, end)}
            <ul className="pagination-links--container">{links}</ul>
        </div>
    );
};

export default Pagination;
