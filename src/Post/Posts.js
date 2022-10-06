import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post/Post'


const Posts = () => {
    const Posts = useLoaderData();
    return (
        <div>
            <h3>
                A lot of fb posts are here{Posts.length}
            </h3>
            {
                Posts.map(post=><Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;