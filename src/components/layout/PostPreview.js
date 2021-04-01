import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { format } from 'date-fns-tz';
import { Date, RichText, Text } from 'prismic-reactjs';
import { linkResolver } from '../../../prismic-config';

import StyledPostPreview from '../../styled/PostPreview.styled';

const PostPreview = ({ posts }) => posts.map((blogPost, postIndex) => {
    const dateString = Date(blogPost.data.date);
    const formattedDate = format(dateString, 'MMMM dd, yyyy');
    const postImage = blogPost.data.body.map((post, imgIndex) => {
        if (post.slice_type === 'post_image') {
            const { url, alt } = post.primary.post_image;
            return (
                <img
                    className="post_preview-img"
                    key={`postImage-${imgIndex}`}
                    src={url}
                    alt={alt}
                />
            );
        }
    });

    return (
        <StyledPostPreview key={`postPreview-${postIndex}`}>
            <div>
                <span>{formattedDate}</span>
                <span>{`author: ${blogPost.data.author}`}</span>
            </div>
            <RouterLink to={`/post/${blogPost.uid}`}>
                {RichText.render(blogPost.data.title, linkResolver)}
                {RichText.render(blogPost.data.post_intro, linkResolver)}
                {postImage}
            </RouterLink>
        </StyledPostPreview>
    );
});

export default PostPreview;
