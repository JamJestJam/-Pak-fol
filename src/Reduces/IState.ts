import IBoxReducer from "./Box/IBoxReducer";
import IPageReducer from "./Page/IPageReducer";

export default interface IState {
  page: IPageReducer;
  box: IBoxReducer;
}
