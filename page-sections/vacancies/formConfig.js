// Dependencies
import * as yup from "yup";

const initialValues = {
  name: "",
  apellidos: "",
  edad: "",
  perfil: "",
  celular: "",
  email: "",
  localidad: "",
  archivoCarga: "",
  linkPDF: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Este es un campo requerido"),
  apellidos: yup.string().required("Este es un campo requerido"),
  edad: yup.string().required("Este es un campo requerido"),
  perfil: yup.string().required("Este es un campo requerido"),
  celular: yup.string().required("Este es un campo requerido"),
  email: yup.string().required("Este es un campo requerido"),
  localidad: yup.string().required("Este es un campo requerido"),
  archivoCarga: yup.string().when("linkPDF", {
    is: (val) => val === undefined,
    then: yup.string().required("Es un campo requerido"),
  }),
  linkPDF: yup.string().notRequired(),
});

export { initialValues, schema };
