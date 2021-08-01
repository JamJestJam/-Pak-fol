import { Grid } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import LMenu from "./Components/LMenu/LMenu";
import RMenu from "./Components/RMenu/RMenu";

function App() {
  return (
    <Grid container xs={12} spacing={3}>
      <Formik
        initialValues={{
          boxX: 420,
          boxY: 260,
          boxZ: 460,
          cartonX: 1420,
          cartonY: 740,
          type: "B",
          label: "Ile pudełek",
          value: 0
        }}
        onSubmit={() => {}}
      >
        {({ values, handleChange }) => {
          return (
            <>
              <LMenu value={values} change={handleChange}/>
              <RMenu value={values}/>
            </>
          );
        }}
      </Formik>
    </Grid>   
  );
}

export default App;
