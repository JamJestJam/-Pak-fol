export default interface ISelect {
    change: (field: string, value: any) => void;
    value: string;
    elements: string[];
    label: string;
    id: string;
}
