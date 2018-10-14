import Axios from "axios";
import config from "../../config";
export const SET_USER = "SET_USER";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";
//server (axios)

export const login = data => async dispatch => {
  try {
    let user = await Axios.post(`${config.server.api}/api/user/login`, {
      email: data.email,
      password: data.password
    });
    await AsyncStorage.setItem("user", JSON.stringify(user.data));
    dispatch(setUser(user.data));
  } catch (error) {
    //AsyncStorage.removeItem("user");
    let message = "อีเมล์ หรือ รหัสผ่านไม่ถูกต้อง";
    dispatch(hasError(message));
  }
};
export const signup = data => async dispatch => {
  try {
    let user = await Axios.post(`${config.server.api}/api/user/signup`, data);
    await AsyncStorage.setItem("user", JSON.stringify(user.data));
      dispatch(setUser(user.data));
  } catch (error) {
    let message = "ข้อมูลไม่ถูกต้อง";
    dispatch(hasError(message));
    console.log(error);
  }
};

export const update = data => async dispatch => {
  let {
    id,
    name,
    lastname,
    password,
    tel,
    address,
    district,
    province
  } = data;
  if (
    !id ||
    !name ||
    !lastname ||
    !password ||
    !tel ||
    !address ||
    !district ||
    !province
  ) {
    let message = "กรุณากรอกข้อมูลให้ครบ !";
    dispatch(hasError(message));
    setTimeout(() => {
      dispatch(hasError(""));
    }, 3000);
    return false;
  }
  try {
    let user = await Axios.post(`${config.server.api}/api/user/update`, {
      user_id: id,
      name: name,
      lastname: lastname,
      password: password,
      tel: tel,
      address: address,
      district: district,
      province: province
    });
    console.log(user);
    if (user.data.id) {
      await AsyncStorage.setItem("user", JSON.stringify(user.data));
      //dispatch(setUser(user.data));
    } else {
      dispatch(setUser(user.data));
      let message = "แก้ไขเรียบร้อยแล้ว";
      dispatch(hasError(message));
      setTimeout(() => {
        dispatch(hasError(""));
      }, 3000);
    }
  } catch (error) {
    let message = "ข้อมูลไม่ถูกต้อง";
    dispatch(hasError(message));
    setTimeout(() => {
      dispatch(hasError(""));
    }, 3000);
    console.log(error);
  }
};
export const forgot = data => async dispatch => {
  try {
    let mail = await Axios.post(`${config.server.api}/api/user/forgot`, {
      email: data.email
    });
    // await AsyncStorage.setItem("user", JSON.stringify(user.data));
     //dispatch(setUser(mail.data));
  } catch (error) {
    //AsyncStorage.removeItem("user");
    let message = "อีเมล์ไม่ถูกต้อง";
    dispatch(hasError(message));
    setTimeout(() => {
      dispatch(hasError(""));
    }, 3000);
  }
};
export const setUser = data => ({
  type: SET_USER,
  payload: data
});
