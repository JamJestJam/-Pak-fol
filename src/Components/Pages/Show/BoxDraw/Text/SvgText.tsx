import { FC } from "react";
import ISvgText from "./ISvgText";

const SvgText: FC<ISvgText> = (p) => {
  return (
    <text
      text-anchor={p.anchor}
      y={p.y}
      x={p.x}
      stroke-width="0"
      fill="#000000" 
      fontSize={`${p.fontSize}px`}
      alignment-baseline="middle"
    >
      {p.text}
    </text>
  );
};

export default SvgText;
