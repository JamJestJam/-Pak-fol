import { Formik } from "formik";
import { FC } from "react";

const Format: FC = () => {
  return (
    <Formik
      initialValues={{
        formatX: 0,
        formatY: 0,
      }}
      onSubmit={(val) => {
        
      }}
    >
      {({ values, handleChange, submitForm, setFieldValue }) => {
        return (
          <></>
        );
      }}
    </Formik>
  );
};

export default Format;
