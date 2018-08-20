import update from "immutability-helper";
import { SET_NEWSS } from "../actions/news";

const initialState = {
    newss : []
};
const NewsReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SET_NEWSS:
            return update(state ,{newss: { $push: action.payload}}) ;
            break;
    
        default:
           return state;
    }
}
export default NewsReducer;