import { FC } from "react";
import { useSelector } from "react-redux";
import IFormatReducer from "../../../../Reduces/Format/IFormatReducer";
import IState from "../../../../Reduces/IState";
import BigiHorizontal from "./BigiHorizontal/BigiHorizontal";
import BigiVertical from "./BigiVertical/BigiVertical";
import * as CSS from "./css";
const Bigi: FC = () => {
  const { format } = useSelector<IState, IFormatReducer>((GS) => ({
    ...GS.format,
  }));
  console.log(format);
  const lenght =
    format.data === undefined ? 0 : format.data.countX * format.data.countY;

  return (
    <CSS.Table>
      <thead>
        <tr>
          <td>Pudełko</td>
          <td colSpan={5}>Poziomo</td>
          <td colSpan={3}>Pionowo</td>
        </tr>
        <tr>
          <td>Lp.</td>
          <td>b1</td>
          <td>b2</td>
          <td>b3</td>
          <td>b4</td>
          <td>n</td>
          <td>b1</td>
          <td>b2</td>
          <td>n</td>
        </tr>
      </thead>
      <tbody>
        {format.data === undefined ? (
          <tr>
            <td>1</td>
            <BigiHorizontal skip={0} />
            <BigiVertical skip={0} />
          </tr>
        ) : (
          [...Array(lenght)].map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <BigiHorizontal skip={i % (format.data?.countX || 1)} />
              <BigiVertical skip={Math.floor(i / (format.data?.countX || 1))} />
            </tr>
          ))
        )}
      </tbody>
    </CSS.Table>
  );
};

export default Bigi;
