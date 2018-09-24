import Axios from "axios";
import config from "../../config";
export const SET_ARTICLES = "SET_ARTICLES";
export const SET_ALL_ARTICLES = "SET_ALL_ARTICLES";
//server (axios)
export const getAllArticles = () => async dispatch => {
  let articles = await Axios.get(`${config.server.api}/api/article`);
  dispatch(setAllArticles(articles.data));
};
export const findArticleByKeyword = keyword => async dispatch => {
  let findarticle = await Axios.post(`${config.server.api}/api/article`,{
    title: keyword
  });
  dispatch(setNews(findarticle.data));
};


const setArticles = data => ({
  type: SET_ARTICLES,
  payload: data
});
const setAllArticles = data => ({
  type: SET_ALL_ARTICLES,
  payload: data
});
