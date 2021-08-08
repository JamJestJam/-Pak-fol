import { boxEnum } from "../../Types/box";
import IBoxReducer from "./IBoxReducer";

const defaultState = (): IBoxReducer => ({
  box: {
    boxX: Number.NaN,
    boxY: Number.NaN,
    boxZ: Number.NaN,
    boxType: boxEnum.undef,
    data: undefined
  },
});

export default defaultState;
