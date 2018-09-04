import {
  TOGGLE_DRAWER,
  SET_WEBVIEW,
  TOGGLE_WATER,
  HAS_ERROR,
  SET_ACTIVE_TAB
} from "../actions/app";
import update from "immutability-helper";

const initialState = {
  drawer: { isOpen: false },
  hasError: {
    message: ""
  },
  webView: {
    url: "",
    title: ""
  },
  water: {
    isOn: false
  },
  activeTab: 0
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case HAS_ERROR: {
      return update(state, { hasError: { message: { $set: action.payload } } });
    }

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
    case SET_ACTIVE_TAB:
      return update(state, { activeTab: { $set: action.payload } });
    default:
      return state;
  }
};
export default AppReducer;
