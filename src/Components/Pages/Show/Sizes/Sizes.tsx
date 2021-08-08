import { FC } from "react";
import { useSelector } from "react-redux";
import IBoxReducer from "../../../../Reduces/Box/IBoxReducer";
import IState from "../../../../Reduces/IState";
import round from "../../../../Tools/round";
import * as CSS from "./css";

const Sizes: FC = () => {
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));
  if (box.data === undefined) return <></>;

  const field = box.data?.height * box.data?.width;
  const fieldM = round(field * Math.pow(10, -6), 16);

  return (
    <CSS.Content>
      <span>
        Pudełko o bokach <b>{box.boxX}mm</b> x <b>{box.boxY}mm</b> x{" "}
        <b>{box.boxZ}mm</b> i typie <b>{box.boxType}</b>
      </span>
      <br />
      <span>
        Rozmiar pojędyczęgo pudełka to <b>{box.data?.width}mm</b> na{" "}
        <b>{box.data?.height}mm</b>
      </span>
      <br />
      <span>
        Pole pojędynczego pudełka to {field}mm<sup>2</sup> czyli{" "}
        <b>
          {fieldM}m<sup>2</sup>
        </b>
      </span>
    </CSS.Content>
  );
};

export default Sizes;
