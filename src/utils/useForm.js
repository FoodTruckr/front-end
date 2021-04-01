import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setValues({
      initialValues,
    });
  };
  // const handleNestedChanges = (e) => {
  //   e.preventDefault();
  // }

  return [values, handleChanges, reset];
};

export default useForm;
