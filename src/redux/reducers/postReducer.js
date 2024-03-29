import { GET_POSTS } from "../actions/type";

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
