import React from 'react';
import { Date, Link, RichText } from 'prismic-reactjs';


const BlogPost = ({ post }) => {
    console.log('🚀 ~ Blog ~ posts', post);
    return (
        <>
            {
                post ? (
                    <main>
                        <aside>COSTAM</aside>
                        {/* <RichText render={post.data.body[0]}></RichText> */}
                    </main>
                ) : <p>No contents</p>
            }
        </>
    );
};

export default BlogPost;
