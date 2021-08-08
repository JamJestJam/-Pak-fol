import { FC } from "react";
import BigiHorizontal from "./BigiHorizontal/BigiHorizontal";
import BigiVertical from "./BigiVertical/BigiVertical";
import * as CSS from "./css";
const Bigi: FC = () => {
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
        <tr>
          <td>1</td>
          <BigiHorizontal />
          <BigiVertical />
        </tr>
      </tbody>
    </CSS.Table>
  );
};

export default Bigi;
