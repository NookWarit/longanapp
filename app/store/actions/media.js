import Axios from "axios";
import config from "../../config";
export const SET_ALL_MEDIA = "SET_ALL_MEDIA";
//server (axios)
export const getAllMedia = () => async dispatch => {
  let media = await Axios.get(`${config.server.api}/api/media`);
  dispatch(setAllMedia(media.data));
};
export const findMediaByKeyword = keyword => async dispatch => {
  let findMedia = await Axios.post(`${config.server.api}/api/media`,{
    title: keyword
  });
  dispatch(setAllMedia(findMedia.data));
};
const setAllMedia = data => ({
  type: SET_ALL_MEDIA,
  payload: data
});
