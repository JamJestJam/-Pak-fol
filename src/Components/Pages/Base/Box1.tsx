import { FC } from "react";

interface IBox1 {
  Box: number[];
  Scale: number;
  Padding: number;
}

const Box1: FC<IBox1> = (props) => {
  const x = (2 * props.Box[0] + 2 * props.Box[1]) * props.Scale;
  const y = props.Box[2] * props.Scale;
  const l1 = props.Box[0] * props.Scale;
  const l2 = (props.Box[0] + props.Box[1]) * props.Scale;
  const l3 = (2 * props.Box[0] + props.Box[1]) * props.Scale;

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
      <line
        x1={l1 + props.Padding}
        y1={props.Padding}
        x2={l1 + props.Padding}
        y2={y + props.Padding}
        stroke="black"
      />
      <line
        x1={l2 + props.Padding}
        y1={props.Padding}
        x2={l2 + props.Padding}
        y2={y + props.Padding}
        stroke="black"
      />
      <line
        x1={l3 + props.Padding}
        y1={props.Padding}
        x2={l3 + props.Padding}
        y2={y + props.Padding}
        stroke="black"
      />

      <text
        fill="black"
        fontSize={props.Padding}
        fontFamily="Verdana"
        x={(l1 + props.Padding) / 2}
        y={props.Padding - 5}
      >
        {props.Box[0]}
      </text>
      <text
        fill="black"
        fontSize={props.Padding}
        fontFamily="Verdana"
        x={(l1 + l2) / 2}
        y={props.Padding - 5}
      >
        {props.Box[1]}
      </text>
      <text
        fill="black"
        fontSize={props.Padding}
        fontFamily="Verdana"
        x={(l2 + l3) / 2}
        y={props.Padding - 5}
      >
        {props.Box[0]}
      </text>
      <text
        fill="black"
        fontSize={props.Padding}
        fontFamily="Verdana"
        x={(l3 + x) / 2}
        y={props.Padding - 5}
      >
        {props.Box[1]}
      </text>
      <text
        fill="black"
        fontSize={props.Padding}
        fontFamily="Verdana"
        x={props.Padding}
        y={(y + props.Padding * 2) / 2}
        horizAdvX="tak"
        vertAdvY="nie"
      >
        {props.Box[1]}
      </text>
    </svg>
  );
};

export default Box1;
