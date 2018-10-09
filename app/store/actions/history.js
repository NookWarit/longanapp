import Axios from "axios";
import config from "../../config";
export const SET_ALL_HISTORY = "SET_ALL_HISTORY";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";
//server (axios)
export const getAllHistory = () => async dispatch => {
  try {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    //console.log(user);
    let history = await Axios.get(
      `${config.server.api}/api/history/${user.user_id}`
    );
    dispatch(setAllHistory(history.data));
  } catch (error) {
    let message = "ประวัติมีไหน";
    dispatch(hasError(message));
    setTimeout(() => {
      dispatch(hasError(""));
    }, 3000);
    //console.log(error);
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

  // let history = await Axios.get(
  //   `${config.server.api}/api/history/${data.user_id}`
  // );
  dispatch(setAllHistory(senthistory.data));
};

const setAllHistory = data => ({
  type: SET_ALL_HISTORY,
  payload: data
});
