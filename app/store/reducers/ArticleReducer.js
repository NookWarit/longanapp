import { SET_ARTICLES, SET_ALL_ARTICLES } from "../actions/article";
import update from "immutability-helper";

const initialState = {
  articles: [],
  article: []
};
const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ARTICLES:
      return update(state, { articles: { $set: action.payload } });
    case SET_ARTICLES:
      return update(state, { article: { $set: action.payload } });
    default:
      return state;
  }
};
export default ArticleReducer;
