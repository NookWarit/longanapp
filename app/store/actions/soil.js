import Axios from "axios";
import config from "../../config";
export const SET_SOIl = "SET_SOIl";

export const getSoil = data => async dispatch => {
  let soilvalue = await Axios.post(`${config.server.api}/api/soil`, {
    value: data.value
  });
  dispatch(setSoil(soilvalue.data));
};
const setSoil = data => ({
  type: SET_SOIl,
  payload: data
});
