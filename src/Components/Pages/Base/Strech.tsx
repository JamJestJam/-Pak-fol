import { FC } from "react";
import { BoxType } from "./MainPage";

interface IStrech {
  Box: number[];
  Strecz: number[];
  Type: BoxType;
  Scale: number;
  Padding: number;
}

const Strech: FC<IStrech> = (props) => {
  const x = props.Strecz[0] * props.Scale;
  const y = props.Strecz[1] * props.Scale;

  return (
    <svg
      width={window.innerWidth - props.Padding}
      height={y + 3 * props.Padding}
    >
      <rect
        x={props.Padding}
        y={props.Padding}
        width={x}
        height={y}
        strokeWidth="1"
        stroke="black"
        fill="transparent"
      />
    </svg>
  );
};

export default Strech;
