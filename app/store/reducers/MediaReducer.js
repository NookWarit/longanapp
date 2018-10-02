import update from "immutability-helper";
import { SET_ALL_MEDIA } from "../actions/media";

const initialState = {
  media: []
};
const MediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MEDIA:
      return update(state, { media: { $set: action.payload } });
    default:
      return state;
  }
};
export default MediaReducer;
