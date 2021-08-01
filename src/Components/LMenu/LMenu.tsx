import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FC } from "react";

interface ILMenu {
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
  change: (e: React.ChangeEvent<any>) => void;
}

const LMenu: FC<ILMenu> = (props) => {
  const p = props.value;
  const c = props.change;
  return (
    <Grid item xs={3}>
      <Typography variant="h6">Rozmiar formatu</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            type="number"
            label="Długość X"
            fullWidth
            value={p.cartonX}
            onChange={c}
            id="cartonX"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Długość Y"
            fullWidth
            value={p.cartonY}
            onChange={c}
            id="cartonY"
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6">Rozmiary pudełka</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            label="Długość"
            fullWidth
            value={p.boxX}
            onChange={c}
            id="boxX"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            label="Szerokość"
            fullWidth
            value={p.boxY}
            onChange={c}
            id="boxY"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            label="Wysokość"
            fullWidth
            value={p.boxZ}
            onChange={c}
            id="boxZ"
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6">Typ pudełka</Typography>
      <RadioGroup aria-label="" name="type" value={p.type} onChange={c}>
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="C" control={<Radio />} label="C" />
        <FormControlLabel value="EB" control={<Radio />} label="EB" />
        <FormControlLabel value="BC" control={<Radio />} label="BC" />
        <FormControlLabel value="E" control={<Radio />} label="E" />
      </RadioGroup>
      <br />
      <Typography variant="h6">Zamówienie</Typography>
      <Select
        name="label"
        value={p.label}
        onChange={c}
        fullWidth
      >
        <MenuItem value="Ile pudełek">Ile pudełek</MenuItem>
        {/* <MenuItem value="Ile m^2 pudełek">Ile m^2 pudełek</MenuItem> */}
        <MenuItem value="Ile kartonów">Ile kartonów</MenuItem>
        {/* <MenuItem value="Ile m^2 kartonów">Ile m^2 kartonów</MenuItem> */}
      </Select>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField type="number" id="value" label={p.label} fullWidth value={p.value} onChange={c} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LMenu;
