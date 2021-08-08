import styled from "styled-components";
import colors from "../../../Style/colors";
import fontSize from "../../../Style/fonts";
import IInputCSS from "./IInputCSS";

export const Group = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  color: ${colors.Shadow};
  font-size: ${fontSize[18]};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${colors.effect};
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

export const Input = styled.input<IInputCSS>`
  font-size: ${fontSize[18]};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.Shadow};

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    top: -20px;
    font-size: 14px;
    color: ${colors.effect};
  } 

  & ~ ${Label} {
    ${(p) => (p.open ? `top: -20px;` : "")}
    ${(p) => (p.open ? `font-size: 14px;` : "")}
    ${(p) => (p.open ? `color: ${colors.effect};` : "")}
  }

  &:invalid ~ ${Label} {
    color: ${colors.error};
  }

  &:focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
    width: 50%;
  }
`;
