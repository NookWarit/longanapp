import Axios from "axios";
import config from "../../config";
export const SET_ALL_HISTORY = "SET_ALL_HISTORY";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";
import { getAllNotification } from "./notification";
//server (axios)
export const getAllHistory = () => async dispatch => {
  try {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    let history = await Axios.get(
      `${config.server.api}/api/history/${user.user_id}`
    );
    dispatch(setAllHistory(history.data),getAllNotification(history.data));
  } catch (error) {
    let message = "ประวัติมีไหน";
    dispatch(hasError(message));
    setTimeout(() => {
      dispatch(hasError(""));
    }, 3000);
  }
};
export const sentHistory = data => async dispatch => {
  let senthistory = await Axios.post(`${config.server.api}/api/history`, {
    user_id: data.user_id,
    place: data.place,
    harvestday: data.harvestday,
    size: data.size,
    expected: data.expected
  });
  dispatch(setAllHistory(senthistory.data));
};

export const deleteHistory = data => async dispatch => {
  try {
     let del = await Axios.post(`${config.server.api}/api/history/delete`, {
      history_id: data.history_id
    });
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    let history = await Axios.get(
      `${config.server.api}/api/history/${user.user_id}`
    );
    if (history.data) {
      dispatch(setAllHistory(history.data)),getAllNotification(history.data);
    } else {
      dispatch(setAllHistory([]));
      dispatch(getAllNotification([]));
    }
  } catch (error) {
    let message = "DATA_NULL";
    dispatch(hasError(message));
    dispatch(setAllHistory([]));
  }
};

const setAllHistory = data => ({
  type: SET_ALL_HISTORY,
  payload: data
});
