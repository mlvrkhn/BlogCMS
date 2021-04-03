import React from 'react';


const Pagination = props => {
    console.log(props.children.props.posts);
    return props.children;
    
    // (<div>{/* {children} */}</div>);
}

export default Pagination;
