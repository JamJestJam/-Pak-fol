export default interface IBoxSize {
  boxX: number;
  boxY: number;
  boxZ: number;
  change: (e: React.ChangeEvent<any>) => void;
}
