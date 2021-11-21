import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("heroes")) || {
  heroes: [],
  good: [],
  bad: [],
};

let newHeroesArray;

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      newHeroesArray = [...state.heroes, action.payload];
      state = {
        posts: newPostsArray,
    
      };

      localStorage.setItem("posts", JSON.stringify(state));
      return state;
    case types.delete:
      newHeroesArray = state.posts.filter(
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
