import { Dispatch } from "redux";
import typeHeight from "../../Components/Pages/Show/typeHeight";
import typeWidth from "../../Components/Pages/Show/typeWidth";
import constLenghts from "../../Tools/const";
import round from "../../Tools/round";
import IBox, { boxEnum } from "../../Types/box";
import * as types from "./boxType";

const setBox = (
  boxX: number,
  boxY: number,
  boxZ: number,
  boxType: boxEnum
): Promise<IBox> =>
  ((dispatch: Dispatch) => {
    const boxA = round(boxY / 2 + typeWidth(boxType), 0);
    const boxB = boxZ + typeHeight(boxType);

    const height = boxA * 2 + boxB;
    const width =
      2 * (boxX + boxY) + 6 * constLenghts.ciecia + constLenghts.jezyk;

    dispatch({
      type: types.SET_BOX,
      Box: {
        boxX: boxX,
        boxY: boxY,
        boxZ: boxZ,
        boxType: boxType,
        data: {
          width: width,
          height: height,

          boxA: boxA,
          boxB: boxB,
        },
      },
    });
  }) as any;

export default setBox;
export type SetBox = ReturnType<typeof setBox>;
