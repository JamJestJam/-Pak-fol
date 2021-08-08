import { FC } from "react";
import InputNumber from "../../../Common/Input/Number/InputNumber";
import IBoxSize from "./IBoxSize";

const BoxSize: FC<IBoxSize> = (p) => {
  return (
    <>
      <h1>Podaj rozmiar pudełka</h1>
      <InputNumber
        change={p.change}
        label="Długość pudełka w mm"
        id="boxX"
        value={p.boxX}
        minVal={1}
      />
      <InputNumber
        change={p.change}
        label="Szerokość pudełka w mm"
        id="boxY"
        value={p.boxY}
        minVal={1}
      />
      <InputNumber
        change={p.change}
        label="Wysokość pudełka w mm"
        id="boxZ"
        value={p.boxZ}
        minVal={1}
      />
    </>
  );
};

export default BoxSize;
