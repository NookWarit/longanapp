import { SET_USER } from "../actions/user";
import update from "immutability-helper";

const initialState = {
  user: null
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return update(state, { user: { $set: action.payload } });

    default:
      return state;
  }
};
export default UserReducer;
