import styled from "styled-components";
import colors from "../../../Style/colors";

export const Contener = styled.div`
  margin: auto;
  width: 900px;
`;

export const Box = styled.div`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  max-width: 900px;
  background: ${colors.background2};
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  @media print {
    box-shadow: none;
  }
`;

export const Label = styled.h2`
  margin: 10px 0 0 0;
`;
