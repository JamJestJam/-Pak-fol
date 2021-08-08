import { FC } from "react";
import * as CSS from "../css";
import IInputText from "./IInputText";

const InputText: FC<IInputText> = (p) => {
  return (
    <CSS.Group>
      <CSS.Input
        id={p.id}
        type="text"
        required
        value={p.value}
        onChange={p.change}
        open={true}
      />
      <CSS.Label>{p.label}</CSS.Label>
      <CSS.Bar />
    </CSS.Group>
  );
};

export default InputText;
