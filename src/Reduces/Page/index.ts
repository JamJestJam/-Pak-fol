import defaultState from "./default";
import * as types from "../../Actions/Page/pageTypes";
import IPageTypes from "../../Actions/Page/IPageTypes";

const pageSwitch = (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.SET_PAGE: {
      const paylod: IPageTypes["SET_PAGE"] = action;
      return {
        ...state,
        page: paylod.page,
      };
    }
    default: {
      return state;
    }
  }
};

export default pageSwitch;