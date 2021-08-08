import styled from "styled-components";
import colors from "../../../Style/colors";

export const Contener = styled.div`
  width: 800px;
  padding: 10px 0 0;
  margin: auto;
`;

export const Box = styled.div`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  background: ${colors.background2};
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
