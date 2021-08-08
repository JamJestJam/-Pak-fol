import styled from "styled-components";
import colors from "../../../../Style/colors";
import { FaBoxOpen } from "react-icons/fa";
import { GiFoldedPaper } from "react-icons/gi";
import { AiFillPrinter } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import {BiShowAlt} from "react-icons/bi";
import IElement from "./IElements";

export const Container = styled.div`
  background-color: ${colors.darker};
  /* height: 100%; */
  width: 130px;

  @media print{
    display: none;
  }
`;

export const ShowAlt = styled(BiShowAlt)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const FileInvoice = styled(FaFileInvoice)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const BoxOpen = styled(FaBoxOpen)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const FoldedPaper = styled(GiFoldedPaper)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const FillPrinter = styled(AiFillPrinter)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const Element = styled.div<IElement>`
  background-color: ${(p) => (p.disabled ? colors.background1 : colors.dark)};
  aspect-ratio: 1/1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  transition: 0.3s ease all;
  padding: 3px;

  & > span {
    text-align: center;
  }

  &:hover {
    ${(p) => (p.disabled ? "" : `color: ${colors.background2}`)};
    ${(p) => (p.disabled ? "" : `background-color: ${colors.effect}`)};
  }
`;
