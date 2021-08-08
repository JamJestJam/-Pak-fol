import { combineReducers } from "redux";
import page from "./Page";
import box from "./Box";
import format from "./Format";

const Reducers = combineReducers({
  page,
  box,
  format
});

export default Reducers;
