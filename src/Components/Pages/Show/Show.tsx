import { FC } from "react";
import Bigi from "./Bigi/Bigi";
import BoxDraw from "./BoxDraw/BoxDraw";
import * as CSS from "./css";
import Sizes from "./Sizes/Sizes";

const Show: FC = () => {
  return (
    <CSS.Contener>
      <CSS.Box>
        <Sizes />
        <CSS.Label>Rysunek</CSS.Label>
        <BoxDraw />
        <CSS.Label>Bigi</CSS.Label>
        <Bigi />
      </CSS.Box>
    </CSS.Contener>
  );
};

export default Show;
