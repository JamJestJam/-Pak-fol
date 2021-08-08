export default interface ISvgText {
  x: number;
  y: number;
  text: string;
  anchor: anchorEnum;
  fontSize: number;
}

export enum anchorEnum {
  start = "start",
  middle = "middle",
  end = "end",
}
