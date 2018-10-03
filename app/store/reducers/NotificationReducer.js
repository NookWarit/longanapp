import update from "immutability-helper";
import { SET_ALL_NOTIFICATION } from "../actions/notification";

const initialState = {
  notification: []
};
const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_NOTIFICATION:
      return update(state, { notification: { $set: action.payload } });

    default:
      return state;
  }
};
export default NotificationReducer;
