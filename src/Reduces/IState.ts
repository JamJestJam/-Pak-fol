import IBoxReducer from "./Box/IBoxReducer";
import IPageReducer from "./Page/IPageReducer";
import IFormatReducer from "./Format/IFormatReducer";

export default interface IState {
  page: IPageReducer;
  box: IBoxReducer;
  format: IFormatReducer;
}
