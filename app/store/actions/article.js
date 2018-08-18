import Axios from "axios";
import config from "../../config";
export const SET_ARTICLES = "SET_ARTICLES";
//server (axios)
export const getArticles = () => async dispatch => {
  let articles = await Axios.get(`${config.server.api}/api/article`);
  dispatch(setArticles(articles.data));
};

const setArticles = data => ({
  type: SET_ARTICLES,
  payload: data
});
