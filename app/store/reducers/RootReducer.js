import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import ArticleReducer from "./ArticleReducer";
import NewsReducer from "./NewsReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  article: ArticleReducer,
  news: NewsReducer,
  user: UserReducer,
});
export default RootReducer;