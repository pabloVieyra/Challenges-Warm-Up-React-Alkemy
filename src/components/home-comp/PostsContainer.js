import React from "react";
import { useSelector } from "react-redux";
import { Posts } from "./Posts";
import { PostsVacio } from "./PostsVacio";


export const PostsContainer = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <div className="row row-cols-2 row-cols-md-6 g-4 mt-1">

        
      {posts.length < 100 && <PostsVacio  />}
        
        {posts.map((post) => (
        
            
            <Posts key={post.id} post={post} />
           
        
        ))}
      </div>
      
    </>
  );
}; 
