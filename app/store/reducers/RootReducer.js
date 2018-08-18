import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import ArticleReducer from "./ArticleReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  article: ArticleReducer
});
export default RootReducer;