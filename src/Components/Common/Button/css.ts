import styled from "styled-components";
import colors from "../../../Style/colors";

export const Button = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: ${colors.effect};
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 5px;

  &:hover{
    background-color: darken(${colors.effect}, 100%);
  }
`;
