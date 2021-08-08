import { FC } from "react";
import { boxEnum } from "../../../../Types/box";
import IBoxType from "./IBoxType";
import * as CSS from "./css";
import Select from "../../../Common/Select/Select";

const BoxType: FC<IBoxType> = (p) => {
  const ele: string[] = [];
  for (let item in boxEnum) {
    if (isNaN(Number(item))) {
      ele.push(item);
    }
  }

  const elements = ele.filter((a) => {
    return a !== "undef";
  });

  return (
    <CSS.Content>
      <Select
        id="type"
        change={p.change}
        label="Wybierz typ pudełka"
        value={p.boxType.toString()}
        elements={elements}
      />
    </CSS.Content>
  );
};

export default BoxType;
