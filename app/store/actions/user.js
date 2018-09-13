import Axios from "axios";
import config from "../../config";
export const SET_USER = "SET_USER";
import { AsyncStorage } from "react-native";
import { hasError } from "./app";
//server (axios)

export const login = data => async dispatch => {
  let { email, password } = data;
  if (!email || !password) {
    let message = "กรุณากรอกข้อมูลให้ครบ !";
    dispatch(hasError(message));
    return false;
  }
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
    console.log(error);
  }
};
export const signup = data => async dispatch =>{
  let {name ,lastname ,email ,password ,image ,tel ,address ,district ,province} = data;
  if (!name || !lastname || !email || !password || !image || !tel || !address || !district || !province){
    let message = "กรุณากรอกข้อมูลให้ครบ !";
    dispatch(hasError(message));
    return false;
  }
  try {
    let user = await Axios.post(`${config.server.api}/api/user/signup`,data);
    //console.log(user.data.id)
    if (user.data.id){
      await AsyncStorage.setItem("user", JSON.stringify(user.data));
     //dispatch(setUser(user.data));
    }
    else{
      let message = "สมัครเรียบร้อยแล้ว";
    dispatch(hasError(message));
    }
    
  }catch (error){
    let message = "ข้อมูลไม่ถูกต้อง";
    dispatch(hasError(message));
    console.log(error);
  }
}
export const setUser = data => ({
  type: SET_USER,
  payload: data
});
