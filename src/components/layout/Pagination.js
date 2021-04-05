/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = props => {
    const limit = 3;
    const page = 1;
    const begin = limit * (page - 1);
    const end = limit * page;

    return (<div>{props.children.slice(begin, end)}</div>);
};

export default Pagination;
