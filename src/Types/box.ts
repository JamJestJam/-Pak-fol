export default interface IBox {
  boxX: number;
  boxY: number;
  boxZ: number;
  boxType: boxEnum;

  data?: {
    width: number;
    height: number;

    boxA: number;
    boxB: number;
  };
}

export enum boxEnum {
  undef = "Nie wybrano",
  B = "B",
  C = "C",
  EB = "EB",
  BC = "BC",
  E = "E",
}
