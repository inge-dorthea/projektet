import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "@/yup-schema/formValidationSchema";

const useYupValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return { register, handleSubmit, errors };
};

export default useYupValidation;
