import { SET_ARTICLES } from "../actions/article";
import update from "immutability-helper";

const initialState = {
  articles: []
};
const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return update(state, { articles: { $push: action.payload } });
      break;

    default:
      return state;

  }
};
export default ArticleReducer