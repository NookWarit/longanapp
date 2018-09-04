import { SET_ARTICLES, SET_ALL_ARTICLES } from "../actions/article";
import update from "immutability-helper";

const initialState = {
  articles: [],
  articleDetail: {}
};
const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ARTICLES:
      return update(state, { articles: { $push: action.payload } });
    case SET_ARTICLES:
      return update(state, { articleDetail: { $push: action.payload } });
    default:
      return state;
  }
};
export default ArticleReducer;
