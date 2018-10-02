import Axios from "axios";
import config from "../../config";
export const SET_ALL_MEDIA = "SET_ALL_MEDIA";
//server (axios)
export const getAllMedia = () => async dispatch => {
  let media = await Axios.get(`${config.server.api}/api/media`);
  dispatch(setAllMedia(media.data));
};

const setAllMedia = data => ({
  type: SET_ALL_MEDIA,
  payload: data
});
