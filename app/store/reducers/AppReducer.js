import {
  TOGGLE_DRAWER,
  SET_WEBVIEW,
  TOGGLE_WATER,
  HAS_ERROR,
  SET_ACTIVE_TAB,
  TOGGLE_THEME
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
    status: false,
    user_id: {}
  },
  activeTab: 0,
  theme: ''
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
        water: { $set: action.payload }
      });
    case SET_ACTIVE_TAB:
      return update(state, { activeTab: { $set: action.payload } });
    case TOGGLE_THEME:
      return update(state, { theme: { $set: action.payload } });
    default:
      return state;
  }
};
export default AppReducer;
