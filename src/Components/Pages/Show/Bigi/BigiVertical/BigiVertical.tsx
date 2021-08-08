import { FC } from "react";
import { useSelector } from "react-redux";
import IBoxReducer from "../../../../../Reduces/Box/IBoxReducer";
import IState from "../../../../../Reduces/IState";
import IBigi from "../IBigi";

const BigiVertical: FC<IBigi> = (p) => {
  const { box } = useSelector<IState, IBoxReducer>((GS) => ({
    ...GS.box,
  }));
  if (box.data === undefined) return <></>;

  const prev = box.data.height * p.skip;
  const b1 = box.data.boxA + prev;
  const b2 = b1 + box.data.boxB;
  const b3 = b2 + box.data.boxA;

  return (
    <>
      <td>{b1}mm</td>
      <td>{b2}mm</td>
      <td>{b3}mm</td>
    </>
  );
};

export default BigiVertical;
