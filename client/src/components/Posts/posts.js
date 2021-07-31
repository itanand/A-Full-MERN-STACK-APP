import React from 'react';
import Post from './Post/post';
import useStyle from './posts.style';

const Posts = () => {
    const classes = useStyle();
    
    return(
       <div>
           <h1>Posts</h1>
           <Post />
           <Post />
       </div>
    );
}

export default Posts;