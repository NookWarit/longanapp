import { TOGGLE_DRAWER, SET_WEBVIEW, TOGGLE_WATER } from "../actions/app";
import update from "immutability-helper";

const initialState = {
  drawer: { isOpen: false },
  webView: {
    url: "",
    title: ""
  },
  water: {
    isOn: false
  }
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return update(state, {
        drawer: { isOpen: { $set: action.payload } }
      });
    case SET_WEBVIEW:
      return update(state, { webView: { $set: action.payload } });
    case TOGGLE_WATER:
      return update(state, {
        water: { isOn: { $set: action.payload } }
      });

    default:
      return state;
  }
};
export default AppReducer;
