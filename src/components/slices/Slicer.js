import React from 'react';
import Text from './Text';

const Slicer = ({ toSlice }) => {
     console.log(toSlice);
return (
    <div className="container">
        {toSlice.map((slice, index) => {
            const type = slice.slice_type;
            if (type === 'text' || 'text1') {
                return <Text slice={slice} key={`slice-${index}`} />;
            } else if (type === 'title') {
                return <Text slice={slice} key={`slice-${index}`} />;
                // handle image
            } else {
                return null;
            }
        })}
    </div>
);
};

export default Slicer;
