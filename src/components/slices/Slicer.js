import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Image from './Image';

const Slicer = ({ toSlice }) => (
    <div className="container">
        {toSlice.map((slice, index) => {
            const type = slice.slice_type;

            switch (type) {
            case 'text1':
                return <Text slice={slice} key={`slice-${index}`} />;
            case 'post_image':
                return <Image slice={slice} key={`slice-${index}`} />;
            default:
                return null;
            }
        })}
    </div>
);

export default Slicer;

Slicer.propTypes = {
    toSlice: PropTypes.arrayOf(PropTypes.shape({
        slice_type: PropTypes.string,
    })).isRequired,
};
