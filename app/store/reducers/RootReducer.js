import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import ArticleReducer from "./ArticleReducer";
import NewsReducer from "./NewsReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  article: ArticleReducer,
  news: NewsReducer,
});
export default RootReducer;