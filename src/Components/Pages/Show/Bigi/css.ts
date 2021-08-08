import styled from "styled-components";
import colors from "../../../../Style/colors";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 880px;
  box-shadow: 0 0 20px ${colors.Shadow};

  thead tr {
    background-color: ${colors.darker};
    color: ${colors.background1};
    text-align: center;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody {
    tr {
      border-bottom: 1px solid ${colors.effect};
    }
    tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    tr:last-of-type {
      border-bottom: 2px solid ${colors.effect};
    }
  }

  @media print {
    box-shadow: none;
    border: 1px solid ${colors.Shadow};
    background-color: ${colors.background2};

    thead tr {
      background-color: ${colors.darker};
      color: black;
    }

    thead {
      border-bottom: 1px solid ${colors.Shadow};
    }

    tbody {
      tr {
        border-color: ${colors.Shadow};
      }
      tr:nth-of-type(even) {
        background-color: ${colors.background1};
      }
      tr:last-of-type {
        border-color: ${colors.Shadow};
      }
    }
  }
`;
