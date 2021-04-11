/* eslint-disable no-tabs */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { format } from 'date-fns-tz';

import { Date, RichText, Text } from 'prismic-reactjs';
import { linkResolver } from '../../../prismic-config';

import StyledPostPreview from '../../styled/PostPreview.styled';

const PostPreview = (post) => {
    const { data, uid } = post;
    const dateString = Date(data.date);
    const formattedDate = format(dateString, 'MMMM dd, yyyy');

    const postImage = data.body.map((p) => {
        if (p.slice_type === 'post_image') {
            const { url, alt } = p.primary.post_image;
            return <img className="post_preview-img" src={url} alt={alt} key={url} />;
        }
    });

    return (
        <StyledPostPreview>
            <div>
                <span>{formattedDate}</span>
                <span>{`author: ${data.author}`}</span>
            </div>
            <RouterLink to={`/post/${uid}`}>
                {RichText.render(data.title, linkResolver)}
                {RichText.render(data.post_intro, linkResolver)}
                {postImage}
            </RouterLink>
        </StyledPostPreview>
    );
};

export default PostPreview;
