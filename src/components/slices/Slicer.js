import React from 'react';
import Blog from '../Blog';

const Slicer = ({ toSlice }) => (
    <div className="container">
        {
            toSlice.map((slice, index) => {
                switch (slice.type) {
                case ('blog-post'):
                    return <Blog posts={slice} key={`slice-${index}`}/>;
                default:
                    return null;
                }
            })
        }
    </div>
);

export default Slicer;
