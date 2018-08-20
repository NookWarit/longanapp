import Axios from "axios";
import config from "../../config";
export const SET_NEWSS = "SET_NEWSS";
//server (axios)
export const getNewss = () => async dispatch => {
  let newss = await Axios.get(`${config.server.api}/api/news`);
  dispatch(setNewss(newss.data));
};

const setNewss = data => ({
  type: SET_NEWSS,
  payload: data
});
