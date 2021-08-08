import { FC } from "react";
import * as CSS from "../css";
import IInputNumber from "./IInputNumber";

const InputNumber: FC<IInputNumber> = (p) => {
  const open = isNaN(p.value) || p.value.toString() === "";

  return (
    <CSS.Group>
      <CSS.Input
        open={!open}
        id={p.id}
        type="number"
        required
        value={p.value.toString()} 
        onChange={p.change}
        min={p.minVal}
        max={p.maxVal}
      />
      <CSS.Label>{p.label}</CSS.Label>
      <CSS.Bar></CSS.Bar>
    </CSS.Group>
  );
};

export default InputNumber;
