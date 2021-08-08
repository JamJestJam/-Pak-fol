import { Dispatch } from "redux";
import IFormat from "../../Types/format";
import * as types from "./formatTypes";

const setFormat = (
  formatX: number,
  formatY: number,
  width: number,
  height: number
): Promise<IFormat> =>
  ((dispatch: Dispatch) => {
    if (formatX < width || formatY < height)
      dispatch({
        type: types.SET_FORMAT,
        format: {
          formatX: formatX,
          formatY: formatY,
          data: undefined,
        },
      });
    else {
      const countX = Math.floor(formatX / width);
      const countY = Math.floor(formatY / height);
      dispatch({
        type: types.SET_FORMAT,
        format: {
          formatX: formatX,
          formatY: formatY,
          data: {
            countX: countX,
            countY: countY,
          },
        },
      });
    }
  }) as any;

export default setFormat;
export type SetFormat = ReturnType<typeof setFormat>;
