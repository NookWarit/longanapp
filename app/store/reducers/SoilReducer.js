import update from "immutability-helper";
import { SET_SOIl } from "../actions/soil";

const initailState = {
  value: ""
};

const SoilReducer = (state = initailState, action) => {
  switch (action.type) {
    case SET_SOIl:
      return update(state, { value: { $set: action.payload } });
    default:
      return state;
  }
};
export default SoilReducer;
