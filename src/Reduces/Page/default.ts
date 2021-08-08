import { pageEnum } from "../../Types/page";
import IPageReducer from "./IPageReducer";

const defaultState = (): IPageReducer => ({
  page: {
    page: pageEnum.Box,
  },
});

export default defaultState;
