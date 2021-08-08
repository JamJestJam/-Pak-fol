import { FC } from "react";
import { useSelector } from "react-redux";
import IBoxReducer from "../../../../../Reduces/Box/IBoxReducer";
import IState from "../../../../../Reduces/IState";
import constLenghts from "../../../../../Tools/const";
import IBigi from "../IBigi";

const BigiHorizontal: FC<IBigi> = (p) => {
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));
  if (box.data === undefined) return <></>;

  const prev = box.data.width * p.skip;
  const b1 = box.boxX + constLenghts.ciecia + prev;
  const b2 = b1 + box.boxY + 2 * constLenghts.ciecia;
  const b3 = b2 + box.boxX + 2 * constLenghts.ciecia;
  const b4 = b3 + box.boxY + constLenghts.ciecia;
  const b5 = b4 + constLenghts.jezyk;

  return (
    <>
      <td>{b1}mm</td>
      <td>{b2}mm</td>
      <td>{b3}mm</td>
      <td>{b4}mm</td>
      <td>{b5}mm</td>
    </>
  );
};

export default BigiHorizontal;
