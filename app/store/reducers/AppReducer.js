import { TOGGLE_DRAWER } from "../actions/app";
import update from "immutability-helper";

const initialState = {
  drawer: { isOpen: false }
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return update(state, {
        drawer: { isOpen: { $set: action.payload } }
      });

    default:
      return state;
  }
};
export default AppReducer;
