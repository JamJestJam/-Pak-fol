import { FC } from "react";
import { useSelector } from "react-redux";
import IBoxReducer from "../../../../Reduces/Box/IBoxReducer";
import IState from "../../../../Reduces/IState";
import constLenghts from "../../../../Tools/const";
import * as CSS from "./css";
import { anchorEnum } from "./Text/ISvgText";
import SvgText from "./Text/SvgText";

const BoxDraw: FC = (p) => {
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));
  if (box.data === undefined) return <></>;

  return (
    <CSS.SVG viewBox="0 0 876 430" stroke="black" fill="transparent">
      <rect height="124" width="200" y="50" x="200" />
      <rect height="124" width="200" y="50" x="0" />
      <rect height="124" width="200" y="50" x="400" />
      <rect height="124" width="200" y="50" x="600" />
      <rect height="124" width="200" y="50" x="0" />
      <rect height="124" width="200" y="50" x="0" />
      <rect height="124" width="200" y="174" x="200" />
      <rect height="124" width="200" y="174" x="0" />
      <rect height="124" width="200" y="174" x="400" />
      <rect height="124" width="200" y="174" x="600" />
      <rect height="124" width="200" y="174" x="0" />
      <rect height="124" width="200" y="174" x="0" />
      <rect height="124" width="200" y="298" x="200" />
      <rect height="124" width="200" y="298" x="0" />
      <rect height="124" width="200" y="298" x="400" />
      <rect height="124" width="200" y="298" x="600" />
      <rect height="124" width="200" y="298" x="0" />
      <rect height="124" width="200" y="298" x="0" />
      <rect height="124" width="76" y="174" x="800" />

      <SvgText
        x={100}
        y={40}
        text={`${box.boxX}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />
      <SvgText
        x={300}
        y={40}
        text={`${box.boxY}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />
      <SvgText
        x={500}
        y={40}
        text={`${box.boxX}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />
      <SvgText
        x={700}
        y={40}
        text={`${box.boxY}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />

      <SvgText
        x={100}
        y={112}
        text={`${box.data.boxA}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />
      <SvgText
        x={100}
        y={236}
        text={`${box.data.boxB}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />
      <SvgText
        x={100}
        y={360}
        text={`${box.data.boxA}mm`}
        anchor={anchorEnum.middle}
        fontSize={20}
      />

      <SvgText
        x={200}
        y={40}
        text={`${constLenghts.ciecia}mm ${constLenghts.ciecia}mm`}
        anchor={anchorEnum.middle}
        fontSize={10}
      />
      <SvgText
        x={400}
        y={40}
        text={`${constLenghts.ciecia}mm ${constLenghts.ciecia}mm`}
        anchor={anchorEnum.middle}
        fontSize={10}
      />
      <SvgText
        x={600}
        y={40}
        text={`${constLenghts.ciecia}mm ${constLenghts.ciecia}mm`}
        anchor={anchorEnum.middle}
        fontSize={10}
      />
      <SvgText
        x={838}
        y={164}
        text={`${constLenghts.jezyk}mm`}
        anchor={anchorEnum.middle}
        fontSize={10}
      />
    </CSS.SVG>
  );
};

export default BoxDraw;
