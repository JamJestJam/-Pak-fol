import { Formik } from "formik";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import setBox, { SetBox } from "../../../Actions/Box/setBox";
import removeFormat, {
  RemoveFormat,
} from "../../../Actions/Format/removeFormat";
import setPage, { SetPage } from "../../../Actions/Page/setPage";
import IBoxReducer from "../../../Reduces/Box/IBoxReducer";
import IState from "../../../Reduces/IState";
import { pageEnum } from "../../../Types/page";
import Button from "../../Common/Button/Button";
import BoxSize from "./BoxSize/BoxSize";
import BoxType from "./BoxType/BoxType";
import * as CSS from "./css";

const InputBox: FC = (p) => {
  const dispatch = useDispatch();
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));

  return (
    <Formik
      initialValues={{
        boxX: box.boxX,
        boxY: box.boxY,
        boxZ: box.boxZ,
        type: box.boxType,
      }}
      onSubmit={(val) => {
        if (isNaN(val.boxX) || isNaN(val.boxY) || isNaN(val.boxZ)) {
          alert("Proszę uzupełnić dane");
        } else if (val.boxX < 1 || val.boxY < 1 || val.boxZ < 1) {
          alert("Podane wartości muszą być większe lub równe 1");
        } else if (val.type === "Nie wybrano") {
          alert("Nie wybrano typu pudełka");
        } else {
          dispatch<SetBox>(setBox(val.boxX, val.boxY, val.boxZ, val.type));
          dispatch<RemoveFormat>(removeFormat());
          dispatch<SetPage>(setPage(pageEnum.Show));
        }
      }}
    >
      {({ values, handleChange, submitForm, setFieldValue }) => {
        return (
          <CSS.Contener>
            <CSS.Box>
              <BoxSize
                boxX={values.boxX}
                boxY={values.boxY}
                boxZ={values.boxZ}
                change={handleChange}
              />
              <BoxType change={setFieldValue} boxType={values.type} />
              <Button label="Przejdz dalej" id="" click={submitForm}>
                Przejdź dalej
              </Button>
            </CSS.Box>
          </CSS.Contener>
        );
      }}
    </Formik>
  );
};

export default InputBox;
