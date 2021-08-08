import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import setPage, { SetPage } from "../../../../Actions/Page/setPage";
import IBoxReducer from "../../../../Reduces/Box/IBoxReducer";
import IState from "../../../../Reduces/IState";
import { pageEnum } from "../../../../Types/page";
import * as CSS from "./css";

const LMenu: FC = (p) => {
  const dispatch = useDispatch();
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));

  const pageBox = () => {
    dispatch<SetPage>(setPage(pageEnum.Box));
  };
  const pageFormat = () => {
    if (box.data !== undefined) dispatch<SetPage>(setPage(pageEnum.Format));
    else alert("Musisz najpierw uzupełnić rozmiar pudełka");
  };
  const showPage = () => {
    if (box.data !== undefined) dispatch<SetPage>(setPage(pageEnum.Show));
    else alert("Musisz najpierw uzupełnić rozmiar pudełka");
  };
  const pagePrint = () => {
    if (box.data !== undefined) dispatch<SetPage>(setPage(pageEnum.Print));
    else alert("Musisz najpierw uzupełnić rozmiar pudełka");
  };
  const pageInvoice = () => {
    alert("Funkcjonalność jeszcze nie zaimplementowana");
  };

  return (
    <CSS.Container>
      <CSS.Element disabled={false} onClick={pageBox}>
        <CSS.BoxOpen />
        <span>Oblicz rozmiar pudełka </span>
      </CSS.Element>
      <CSS.Element disabled={box.data === undefined} onClick={pageFormat}>
        <CSS.FoldedPaper />
        <span>Wprowadź format</span>
      </CSS.Element>
      <CSS.Element disabled={box.data === undefined} onClick={showPage}>
        <CSS.ShowAlt />
        <span>Pokaż</span>
      </CSS.Element>
      <CSS.Element disabled={box.data === undefined} onClick={pagePrint}>
        <CSS.FillPrinter />
        <span>Wydrukuj</span>
      </CSS.Element>
      <CSS.Element disabled={true} onClick={pageInvoice}>
        <CSS.FileInvoice />
        <span>Wprowadź fakture</span>
      </CSS.Element>
    </CSS.Container>
  );
};

export default LMenu;
