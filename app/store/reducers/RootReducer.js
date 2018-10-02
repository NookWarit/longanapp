import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import ArticleReducer from "./ArticleReducer";
import NewsReducer from "./NewsReducer";
import UserReducer from "./UserReducer";
import ChatReducer from "./ChatReducer";
import HistoryReducer from "./HistoryReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  article: ArticleReducer,
  news: NewsReducer,
  user: UserReducer,
  chat: ChatReducer,
  history: HistoryReducer
});
export default RootReducer;