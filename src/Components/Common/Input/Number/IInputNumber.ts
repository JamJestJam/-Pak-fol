import IInput from "../IInput";

export default interface IInputNumber extends IInput{
    value: number;
    minVal?: number;
    maxVal?: number;
};
