import { FC } from "react";
import IButton from "./IButton";
import * as CSS from "./css";

const Button: FC<IButton> = (p) => {
  return (
    <CSS.Button id={p.id} onClick={p.click}>
      {p.label}
    </CSS.Button>
  );
};

export default Button;
