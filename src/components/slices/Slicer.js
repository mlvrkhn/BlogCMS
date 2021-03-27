import React from 'react';
import Text from './Text';

const Slicer = ({ toSlice }) => {
    console.log(toSlice);

    return (
        <div className='container'>
            {toSlice.map((slice, index) => {
                switch (slice.slice_type) {
                    case 'text':
                        return <Text slice={slice} key={`slice-${index}`} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default Slicer;
