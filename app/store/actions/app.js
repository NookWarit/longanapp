import Axios from "axios";
import config from "../../config";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const SET_WEBVIEW = "SET_WEBVIEW";
export const TOGGLE_WATER = "TOGGLE_WATER";
export const HAS_ERROR = "HAS_ERROR";
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
// export const SET_SOIl = "SET_SOIl";

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
    status: JSON.stringify(data.status),
    user_id: data.user_id
  });
  dispatch(setWaterStatus({ status: JSON.parse(waterStatus.data.status) }));
};
// export const setSoil = data => async dispatch => {
//   let soilValue = await Axios.post(`${config.server.api}/api/soil`, {
//     value: JSON.stringify(data.value)
//   });
//   dispatch(soilValue({value: JSON.parse(soilValue.data.value)}));
// };

export const hasError = data => ({
  type: HAS_ERROR,
  payload: data
});
export const setActiveTabs = data => ({
  type: SET_ACTIVE_TAB,
  payload: data
});

export const setWaterStatus = data => ({
  type: TOGGLE_WATER,
  payload: data
});

// export const setSoil = data => ({
//   type: SET_SOIl,
//   payload: data
// })
