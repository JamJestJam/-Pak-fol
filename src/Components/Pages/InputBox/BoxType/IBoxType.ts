import { boxEnum } from "../../../../Types/box";

export default interface IBoxType {
  change: (field: string, value: any) => void;
  boxType: boxEnum;
}
