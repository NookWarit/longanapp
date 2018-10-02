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
    let message = "มีไหน";
    dispatch(hasError(message));
    //console.log(error);
  }
};

const setAllHistory = data => ({
  type: SET_ALL_HISTORY,
  payload: data
});
