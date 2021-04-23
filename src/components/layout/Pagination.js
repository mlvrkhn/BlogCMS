/* eslint-disable react/prop-types */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import api from '../../api/PrismicAPI';

const Pagination = (props) => {
    const { children, path, limit = 5, page = 1, postsTotal } = props;

    const begin = limit * (page - 1);
    const end = limit * page;

    
    console.log('🚀 ~ Pagination ~ postsTotal', postsTotal / limit);
    // const pagesTotal = Math.ceil(children.length / limit) || 1;

    // const links = (
	// 	<div>
	// 		<li key={index}>
	// 			<Link to={`${path}${index + 1}`}>{index + 1}</Link>
	// 		</li>
	// 		<li key={index}>
	// 			<Link to={`${path}${index + 1}`}>{index + 1}</Link>
	// 		</li>
	// 	</div>
	// );

    const links = new Array(postsTotal / limit).fill(0).map((link, index) => (
		<li key={index}>
			<Link to={`${path}${index + 1}`}>{index + 1}</Link>
		</li>
	));

    const pageExist = Number(page) <= postsTotal / limit;

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
