import defaultState from "./default";
import * as types from "../../Actions/Box/boxType";
import IBoxTypes from "../../Actions/Box/IBoxTypes";

const pageSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.SET_BOX: {
      const paylod: IBoxTypes["SET_BOX"] = action;
      return {
        ...state,
        box: paylod.Box,
      };
    }
    default: {
      return state;
    }
  }
};

export default pageSwitch;