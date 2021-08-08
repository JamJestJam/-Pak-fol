import styled from "styled-components";
import colors from "../../../Style/colors";
import IShow from "./IShow";
import IValid from "./IValid";

export const Content = styled.div`
  position: relative;
`;

export const Visible = styled.div`
  position: relative;
  height: 16px;
  background-color: ${colors.dark};
  border-radius: 4px;
  height: 16px;
  cursor: pointer;
  padding: 12px 14px;
`;

export const Label = styled.div<IValid>`
  color: ${(p) => (p.valid ? colors.effect : colors.error)};
`;

export const Value = styled.div``;

export const Arrows = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 12px;
  padding: 9px 14px;
  display: flex;
  flex-direction: column;

  svg {
    flex: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
  }
`;

export const Invisible = styled.div<IShow>`
  background-color: ${colors.dark};
  position: absolute;
  width: 100%;
  transition: 0.3s ease-in-out all;
  transform-origin: 50% 0;
  transform: scaleY(${(p) => (p.open ? "100%" : "0%")});
  top: calc(100% + 5px);
  border-radius: 5px;

  div {
    padding: 12px 14px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.darker};
    }
  }
`;
