import { Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";

const Last = styled.div`
  position: relative;
  border-top: 1px solid black;
  text-align: center;
`;

const Padd = styled.div`
  padding: 10px;
`;

const All = styled(Last)`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
`;

const Border = styled(Last)`
  border-left: 1px solid black;
  padding: 10px;
`;

const BorderR = styled(Border)`
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-right: 1px solid black;
`;

const OnTop = styled.div`
  top: calc(0% - 20px);
  position: absolute;
  width: 100%;
  left: 0;
`;

const OnTopR = styled(OnTop)`
  text-align: right;
`;

interface IRMenu {
  value: {
    boxX: number;
    boxY: number;
    boxZ: number;
    cartonX: number;
    cartonY: number;
    type: string;
    label: string;
    value: number;
  };
}

const Klapy = (typ: string): number => {
  switch (typ) {
    case "B":
      return 3;
    case "C":
      return 4;
    case "EB":
      return 5;
    case "BC":
      return 5;
    case "E":
      return 2;
    default:
      return 0;
  }
};

const Wysokosc = (typ: string): number => {
  switch (typ) {
    case "B":
      return 8;
    case "C":
      return 10;
    case "EB":
      return 12;
    case "BC":
      return 15;
    case "E":
      return 6;
    default:
      return 0;
  }
};

const round = (num: number, dec: number) => {
  const f = Math.pow(10, dec);
  return Math.round(num * f) / f;
};

const castResults = (val: IRMenu, x: number, y: number) => {
  const p = val.value;

  const inCartonX = Math.floor(p.cartonX / x);
  const inCartonY = Math.floor(p.cartonY / y);
  const carton = inCartonX * inCartonY;
  const boxX = inCartonX * x;
  const boxY = inCartonY * y;
  const box = boxX * boxY;
  const restLenX = p.cartonX - boxX;
  const restLenY = p.cartonY - boxY;

  const restX = restLenX * boxY;
  const restY = restLenY * boxX;
  const restXY = restLenX * restLenY;
  const rest = round(restX + restY + restXY, 2);

  let rez = "";

  switch (p.label) {
    case "Ile pudełek":
      if (p.value === 0) rez = "wprowadź liczbe";
      else if (carton === 0) rez = "w kartonie nie mieści się pudełko";
      else
        rez = `Aby stworzyć ${p.value} pudełek potrzeba ${Math.ceil(
          p.value / carton
        )} kartonów, czyli ${
          Math.ceil(p.value / carton) * p.cartonX * p.cartonY
        }mm^2 kartonu`;
      break;
    case "Ile m^2 pudełek":
    case "Ile kartonów":
      if (p.value === 0) rez = "wprowadź liczbe";
      else if (carton === 0) rez = "w kartonie nie mieści się pudełko";
      else rez = `Używając ${p.value} kartonów jesteśmy w stanie stworzyć ${p.value*carton} pudełek`;
      break;
    case "Ile m^2 kartonów":
    default:
  }

  return {
    capX: inCartonX,
    capY: inCartonY,
    boxX: boxX,
    boxY: boxY,
    box: box,
    restLenX: restLenX,
    restLenY: restLenY,
    restX: restX,
    restY: restY,
    restXY: restXY,
    rest: rest,
    rez: rez,
  };
};

const RMenu: FC<IRMenu> = (props) => {
  const p = props.value;

  const zagiecia = 6;
  const jezyk = 32;
  const gora1 = p.boxX;
  const gora2 = p.boxY;

  const klapy = round(p.boxY / 2 + Klapy(p.type), 0);
  const wysokosc = p.boxZ + Wysokosc(p.type);

  const x = 2 * (gora1 + gora2) + jezyk + 3 * zagiecia;
  const y = 2 * klapy + wysokosc;
  const cm2 = round(x * y * 0.01, 2);

  const b1 = p.boxX + 3;
  const b2 = b1 + p.boxY + 6;
  const b3 = b2 + p.boxX + 6;
  const b4 = b3 + p.boxY + 3;
  const b5 = b4 + jezyk;

  const rezult = castResults(props, x, y);

  return (
    <Grid item xs={9}>
      <br></br>
      <Grid container spacing={0}>
        <Grid item container xs={11}>
          <Grid item xs={3}>
            <Border>
              &nbsp;
              <OnTop>{gora1}</OnTop>
              <OnTopR>{zagiecia}</OnTopR>
              {klapy}
            </Border>
          </Grid>
          <Grid item xs={3}>
            <Border>
              &nbsp;
              <OnTop>{gora2}</OnTop>
              <OnTopR>{zagiecia}</OnTopR>
            </Border>
          </Grid>
          <Grid item xs={3}>
            <Border>
              &nbsp;
              <OnTop>{gora1}</OnTop>
              <OnTopR>{zagiecia}</OnTopR>
            </Border>
          </Grid>
          <Grid item xs={3}>
            <BorderR>
              &nbsp;<OnTop>{gora2}</OnTop>
            </BorderR>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;{wysokosc}</Border>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;</Border>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;</Border>
          </Grid>
          <Grid item xs={3}>
            <BorderR>&nbsp;</BorderR>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;{klapy}</Border>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;</Border>
          </Grid>
          <Grid item xs={3}>
            <Border>&nbsp;</Border>
          </Grid>
          <Grid item xs={3}>
            <BorderR>&nbsp;</BorderR>
          </Grid>
          <Grid item xs={12}>
            <Last />
          </Grid>
        </Grid>
        <Grid item container xs={1}>
          <Grid item xs={12}>
            <Padd>&nbsp;</Padd>
          </Grid>
          <Grid item xs={12}>
            <All>
              &nbsp;
              <OnTop>{jezyk}</OnTop>
            </All>
          </Grid>

          <Grid item xs={12}>
            <Padd>&nbsp;</Padd>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6">Bigi</Typography>
      1){b1}<br />
      2){b2}<br />
      3){b3}<br />
      4){b4}<br />
      n){b5}<br />
      <Typography variant="h6">Rozmiar</Typography>
      Długość: {y} mm
      <br />
      Szerokość: {x} mm
      <br />
      Pudełko ma: {cm2} cm<sup>2</sup>
      <Typography variant="h6">Wyniki</Typography>
      <br />
      <Grid container spacing={0}>
        <Grid item container xs={1}>
          <Grid item xs={12}>
            <Padd>{rezult.boxY}mm</Padd>
          </Grid>
          <Grid item xs={12}>
            <Padd>{rezult.restLenY}mm</Padd>
          </Grid>
        </Grid>
        <Grid item container xs={11}>
          <Grid item xs={6}>
            <Border>
              {rezult.box}mm^2 <OnTop>{rezult.boxX}mm</OnTop>
            </Border>
          </Grid>
          <Grid item xs={6}>
            <BorderR>
              {rezult.restX}mm^2 <OnTop>{rezult.restLenX}mm</OnTop>
            </BorderR>
          </Grid>
          <Grid item xs={6}>
            <Border>{rezult.restY}mm^2</Border>
          </Grid>
          <Grid item xs={6}>
            <BorderR>{rezult.restXY}mm^2</BorderR>
          </Grid>
          <Grid item xs={12}>
            <Last />
          </Grid>
        </Grid>
      </Grid>
      W kartonie o wymiarach {p.cartonX} na {p.cartonY} mieści się{" "}
      {rezult.capX * rezult.capY} pudełek i zostaje {rezult.rest} mm^2 odpadków
      <br />
      {rezult.rez}
    </Grid>
  );
};

export default RMenu;
