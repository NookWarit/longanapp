import update from "immutability-helper";
import { SET_NEWS, SET_ALL_NEWS } from "../actions/news";

const initialState = {
  newsDetail: {},
  news: [],
  newss:[]
};
const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_NEWS:
      return update(state, { news: { $set: action.payload } });
    case SET_NEWS:
      return update(state, { newss: { $push: action.payload } });
      break;

    default:
      return state;
  }
};
export default NewsReducer;
