import { Formik } from "formik";
import { FC } from "react";
import styled from "styled-components";
import Box1 from "./Box1";
import Strech from "./Strech";

const InputConentener = styled.div`
  display: flex;
`;

export enum BoxType {
  "B" = "B",
  "C" = "C",
  "EB" = "EB",
  "BC" = "BC",
  "E" = "E",
}

const MainPage: FC = () => {
  return (
    <Formik
      initialValues={{
        Box: [560, 270, 230],
        Strecz: [1710, 518],
        type: BoxType.C,
      }}
      onSubmit={() => {}}
    >
      {({ values, handleChange }) => {
        const type: string[] = Object.keys(BoxType);
        const padding = 30;
        const sizeX = window.innerWidth - 3 * padding;
        const scale = sizeX / values.Strecz[0];

        return (
          <>
            Rozmiar pudełka
            <InputConentener>
              <input
                type="number"
                id="Box[0]"
                onChange={handleChange}
                value={values.Box[0]}
              />
              X
              <input
                type="number"
                id="Box[1]"
                onChange={handleChange}
                value={values.Box[1]}
              />
              X
              <input
                type="number"
                id="Box[2]"
                onChange={handleChange}
                value={values.Box[2]}
              />
            </InputConentener>
            Rozmiar strecza
            <InputConentener>
              <input
                type="number"
                id="Strecz[0]"
                onChange={handleChange}
                value={values.Strecz[0]}
              />
              X
              <input
                type="number"
                id="Strecz[1]"
                onChange={handleChange}
                value={values.Strecz[1]}
              />
            </InputConentener>
            Typ
            <InputConentener>
              <select
                defaultValue={values.type}
                onChange={handleChange}
                id="type"
              >
                {type.map((t, i) => {
                  return (
                    <option value={t} key={i}>
                      {t}
                    </option>
                  );
                })}
              </select>
            </InputConentener>
            <Box1 Box={values.Box} Scale={scale} Padding={padding} />
            <Strech
              Box={values.Box}
              Strecz={values.Strecz}
              Type={values.type}
              Scale={scale}
              Padding={padding}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default MainPage;
