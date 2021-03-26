import React from 'react';

const Blog = ({posts}) => {
    console.log('🚀 ~ Blog ~ posts', posts);
    return (
        <main>
            <aside>COSTAM</aside>
            {/* {posts.map((post) => {
                console.log(post.data.body);
                return (
                    <article>
                        <h2>title</h2>
                        <p>title</p>
                        <img />
                        <p>title</p>
                    </article>
                );
            })} */}
        </main>
    );
};

export default Blog;
