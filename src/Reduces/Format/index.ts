import defaultState from "./default";
import * as types from "../../Actions/Format/formatTypes";
import IFormatTypes from "../../Actions/Format/IFormatTypes";

const formatSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.SET_FORMAT: {
      const paylod: IFormatTypes["SET_FORMAT"] = action;
      return {
        ...state,
        format: paylod.format,
      };
    }
    default: {
      return state;
    }
  }
};

export default formatSwitch;
