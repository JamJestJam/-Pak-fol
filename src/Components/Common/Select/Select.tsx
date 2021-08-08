import React, { FC } from "react";
import * as CSS from "./css";
import ISelect from "./ISelect";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const Select: FC<ISelect> = (p) => {
  const [open, setOpen] = useState(false);

  const click = (e: React.MouseEvent<HTMLDivElement>) => {
    const tmp = e.currentTarget;
    const val = tmp.dataset.val === undefined ? "" : tmp.dataset.val;

    p.change(p.id, val);
  };

  const hide = () => {
    setOpen(false);
  };

  const show = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("click", hide);
    return () => {
      document.removeEventListener("click", hide);
    };
  }, []);

  return (
    <CSS.Content>
      <CSS.Label valid={p.elements.includes(p.value)}>
        Wybierz typ pudełka
      </CSS.Label>
      <CSS.Visible onClick={show}>
        <CSS.Value>{p.value}</CSS.Value>
        <CSS.Arrows>
          <AiOutlineArrowUp />
          <AiOutlineArrowDown />
        </CSS.Arrows>
      </CSS.Visible>
      <CSS.Invisible open={open}>
        {p.elements.map((ele, id) => {
          return (
            <div key={id} onClick={click} data-val={ele}>
              {ele}
            </div>
          );
        })}
      </CSS.Invisible>
    </CSS.Content>
  );
};

export default Select;
