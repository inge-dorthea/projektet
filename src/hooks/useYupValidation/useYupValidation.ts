import { useForm } from "react-hook-form"; // npm i react-hook-form
import { yupResolver } from "@hookform/resolvers/yup"; // npm i @hookform/resolvers

import schema from "@/hooks/useYupValidation/yup-schema/formValidationSchema"; // schema

// register = registering the right input fields with the right name in the schema
// handleSubmit = handles the submit on the form, so it doesn't submit without passing the schema rules
// errors = if the form data fail the schema rules, it will return the error message connected to the input field that failed

const useYupValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return { register, handleSubmit, errors };
};

export default useYupValidation;
