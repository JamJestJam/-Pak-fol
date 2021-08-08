export default interface IInput {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
}
