import { Dispatch } from "redux";
import IFormat from "../../Types/format";
import * as types from "./formatTypes";

const removeFormat = (

): Promise<IFormat> =>
  ((dispatch: Dispatch) => {
    dispatch({
        type: types.SET_FORMAT,
        format: {
          formatX: Number.NaN,
          formatY: Number.NaN,
          data: undefined,
        },
    })
  }) as any;

export default removeFormat;
export type RemoveFormat = ReturnType<typeof removeFormat>;
