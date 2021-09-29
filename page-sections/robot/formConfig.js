// Dependencies
import * as yup from "yup";

const initialValues = {
  nombre: "",
  empresa: "",
  email: "",
  automatizacion: "",
};

const schema = yup.object().shape({
  nombre: yup.string().required("Este es un campo requerido"),
  empresa: yup.string().required("Este es un campo requerido"),
  email: yup.string().required("Este es un campo requerido"),
  automatizacion: yup.string().required("Este es un campo requerido"),
});

export { initialValues, schema };
