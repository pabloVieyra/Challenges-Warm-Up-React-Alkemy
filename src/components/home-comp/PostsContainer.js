import React from "react";
import { useSelector } from "react-redux";
import { Posts } from "./Posts";


export const PostsContainer = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <div className="row row-cols-2 row-cols-md-6 g-4 mt-1">


        
        {posts.map((post) => (
          <Posts key={post.id} hero={post} />
        ))}
      </div>
      
    </>
  );
}; 
