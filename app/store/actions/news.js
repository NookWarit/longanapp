import Axios from "axios";
import config from "../../config";
export const SET_NEWS = "SET_NEWS";
export const SET_ALL_NEWS = "SET_ALL_NEWS";
//server (axios)
export const getAllNews = () => async dispatch => {
  let news = await Axios.get(`${config.server.api}/api/news`);
  dispatch(setAllNews(news.data));
};
export const findNewsByKeyword = keyword => async dispatch => {
  let findnews = await Axios.post(`${config.server.api}/api/news/findNews`,{
    title: keyword
  });
  dispatch(setAllNews(findnews.data));
};

const setAllNews = data => ({
  type: SET_ALL_NEWS,
  payload: data
})
