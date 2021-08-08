import IFormatReducer from "./IFormatReducer";

const defaultState = (): IFormatReducer => ({
  format: {
    formatX: Number.NaN,
    formatY: Number.NaN,
    data: undefined
  },
});

export default defaultState;
