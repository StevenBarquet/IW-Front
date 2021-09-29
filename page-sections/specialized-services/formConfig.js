// Dependencies
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  company: "",
  telephone: "",
  description: "",
  validate: false,
};

const schema = yup.object().shape({
  name: yup.string().required("Este es un campo requerido"),
  email: yup.string().required("Este es un campo requerido"),
  company: yup.string().required("Este es un campo requerido"),
  telephone: yup.string().required("Este es un campo requerido"),
  description: yup.string().required("Este es un campo requerido"),
  validate: yup
    .boolean()
    .oneOf([true], "Deben aceptarse los términos y condiciones.")
    .required("Este es un campo requerido"),
});

export { initialValues, schema };
