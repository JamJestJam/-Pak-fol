import { Dispatch } from "redux";
import IPage, { pageEnum } from "../../Types/page";
import * as types from "./pageTypes";

const setPage = (page: pageEnum): Promise<IPage> =>
  ((dispatch: Dispatch) => {
    dispatch({
      type: types.SET_PAGE,
      page: {
        page: page
      }
    });
  }) as any;

export default setPage;
export type SetPage = ReturnType<typeof setPage>;
