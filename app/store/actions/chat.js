import Axios from "axios";
import config from "../../config";
export const SET_ALL_CHAT = "SET_ALL_CHAT";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";

//server (axios)
export const getAllChat = () => async dispatch => {
  try {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    //console.log(user);
    let chat = await Axios.get(
      `${config.server.api}/api/messenger/${user.user_id}`
    );
    //console.log(chat);
    if(chat.data){
      dispatch(setAllChat(chat.data));
    }else{

    dispatch(setAllChat([]));
    }
    
  } catch (error) {
    let message = "มีไหน";
    dispatch(hasError(message));
    //console.log(error);
  }
};
export const sentChat = data => async dispatch => {
  let sentchat = await Axios.post(`${config.server.api}/api/messenger`, {
    room_id: data.room_id,
    message: data.message,
    username: data.username,
    type: data.type
  });

  let chat = await Axios.get(
    `${config.server.api}/api/messenger/${data.room_id}`
  );
  dispatch(setAllChat(chat.data));
};
const setAllChat = data => ({
  type: SET_ALL_CHAT,
  payload: data
});
