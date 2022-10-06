import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const {id,title,body,userId}=post;
    return (
        <div>
            <h2>details about post {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;