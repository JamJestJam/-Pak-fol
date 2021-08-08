import { Formik } from "formik";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import setFormat, { SetFormat } from "../../../Actions/Format/setFormat";
import setPage, { SetPage } from "../../../Actions/Page/setPage";
import IBoxReducer from "../../../Reduces/Box/IBoxReducer";
import IFormatReducer from "../../../Reduces/Format/IFormatReducer";
import IState from "../../../Reduces/IState";
import { pageEnum } from "../../../Types/page";
import Button from "../../Common/Button/Button";
import InputNumber from "../../Common/Input/Number/InputNumber";
import * as CSS from "./css";

const Format: FC = () => {
  const dispatch = useDispatch();
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));
  const { format } = useSelector<IState, IFormatReducer>((GS) => ({
    ...GS.format,
  }));
  if (box.data === undefined) return <></>;

  return (
    <Formik
      initialValues={{
        formatX: format.formatX,
        formatY: format.formatY,
      }}
      onSubmit={(val) => {
        if (isNaN(val.formatX) || isNaN(val.formatY)) {
          alert("Proszę uzupełnić dane");
        } else if (box.data === undefined) {
          alert("Nie wykryto pudełka");
        } else if (val.formatX < box.data?.width) {
          alert(
            "Szerokość formatu nie może być mniejsza od szerokości pudełka"
          );
        } else if (val.formatX < box.data?.height) {
          alert("Wysokość formatu nie może być mniejsza od Wysokości pudełka");
        } else {
          dispatch<SetFormat>(
            setFormat(val.formatX, val.formatY, box.data.width, box.data.height)
          );
          dispatch<SetPage>(setPage(pageEnum.Show));
        }
      }}
    >
      {({ values, handleChange, submitForm, setFieldValue }) => {
        return (
          <CSS.Contener>
            <CSS.Box>
              <h1>Podaj rozmiar formatu</h1>
              <InputNumber
                change={handleChange}
                label="Długość formatu w mm"
                id="formatX"
                value={values.formatX}
                minVal={box.data?.width}
              />
              <InputNumber
                change={handleChange}
                label="Szerokość formatu w mm"
                id="formatY"
                value={values.formatY}
                minVal={box.data?.height}
              />
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

export default Format;
