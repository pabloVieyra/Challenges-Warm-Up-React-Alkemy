import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("posts")) || {
  posts: [],
  
};

let newPostsArray;

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      newPostsArray = [...state.posts, action.payload];
      state = {
        posts: newPostsArray,
    
      };

      localStorage.setItem("posts", JSON.stringify(state));
      return state;
    case types.delete:
      newPostsArray = state.posts.filter(
        (posts) => posts.id !== action.payload
      );
      state = {
        posts: newPostsArray,
      
      };
      localStorage.setItem("posts", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
