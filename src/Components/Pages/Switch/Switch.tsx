import { FC } from "react";
import { useSelector } from "react-redux";
import IState from "../../../Reduces/IState";
import IPageReducer from "../../../Reduces/Page/IPageReducer";
import { pageEnum } from "../../../Types/page";
import LMenu from "./LMenu/LMenu";
import * as CSS from "./css";
import InputBox from "../InputBox/InputData";
import Show from "../Show/Show";
import Format from "../Format/Format";

const Switch: FC = (p) => {
  const { page } = useSelector<IState, IPageReducer>((GS) => ({
    ...GS.page,
  }));

  const pageSwitch = () => {
    switch (page.page) {
      case pageEnum.Box:
        return <InputBox />;
      case pageEnum.Show:
        return <Show />;
      case pageEnum.Format:
        return <Format />;
      case pageEnum.Print:
        setTimeout(() => {
          window.print();
        }, 100);
        return <Show />;
      default:
        return <div>Error 404</div>;
    }
  };

  return (
    <CSS.Container>
      <LMenu />
      {pageSwitch()}
    </CSS.Container>
  );
};

export default Switch;
