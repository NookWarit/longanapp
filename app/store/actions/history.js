import Axios from "axios";
import config from "../../config";
export const SET_ALL_HISTORY = "SET_ALL_HISTORY";
import { AsyncStorage } from "react-native";
//server (axios)
export const setAllHistory = () => async dispatch => {
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

export const setAllHistory = data => ({
  type: SET_ALL_HISTORY,
  payload: data
});
