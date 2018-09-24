
import update from "immutability-helper";
import { SET_ALL_CHAT } from "../actions/chat";

const initialState = {
  chat: []
};
const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CHAT:
      return update(state, { chat: { $set: action.payload } });
    default:
      return state;
  }
};
export default ChatReducer;
