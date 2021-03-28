import React from 'react';
import Text from './Text';
import Image from './Image';

const Slicer = ({ toSlice }, from) => {
console.log('🚀 ~ Slicer ~ from', from)
    console.log(toSlice);
    return (
        <div className="container">
            {toSlice.map((slice, index) => {
                const type = slice.slice_type;

                switch (type) {
                case 'text':
                    return <Text slice={slice} key={`slice-${index}`} />;
                case 'post_image':
                    return <Image slice={slice} key={`slice-${index}`} />;
                default:
                    return null;
                }
            })}
        </div>
    );
};

export default Slicer;
