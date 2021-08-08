import { combineReducers } from "redux";
import page from "./Page";
import box from "./Box";

const Reducers = combineReducers({
  page,
  box,
});

export default Reducers;
