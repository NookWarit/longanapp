import Axios from "axios";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const SET_WEBVIEW = "SET_WEBVIEW";
export const TOGGLE_WATER = "TOGGLE_WATER";
export const HAS_ERROR = "HAS_ERROR";
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

export const toggleDrawer = data => ({
  type: TOGGLE_DRAWER,
  payload: data
});
export const setWebview = data => ({
  type: SET_WEBVIEW,
  payload: data
});
export const toggleWater = data => async dispatch => {
  let waterStatus = await Axios.post(`${config.server.api}/api/iot`, {
    status: data.status,
    userId: data.userId
  });
  dispatch(setWaterStatus(waterStatus.data));
};

export const hasError = data => ({
  type: HAS_ERROR,
  payload: data
});
export const setActiveTabs = data => ({
  type: SET_ACTIVE_TAB,
  payload: data
});

const setWaterStatus = data => ({
  type: TOGGLE_WATER,
  payload: data
});
