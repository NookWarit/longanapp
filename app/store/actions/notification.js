import Axios from "axios";
import config from "../../config";
export const SET_ALL_NOTIFICATION = "SET_ALL_NOTIFICATION";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";
//server (axios)
export const getAllNotification = () => async dispatch => {
  try {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    //console.log(user);
    let history = await Axios.get(
      `${config.server.api}/api/notification/${user.user_id}`
    );
    dispatch(setAllNotification(history.data));
  } catch (error) {
    
  }
};

const setAllNotification = data => ({
  type: SET_ALL_NOTIFICATION,
  payload: data
});
