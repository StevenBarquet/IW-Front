/* eslint-disable no-undef */
// Dependencies
import { useState } from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/vacancies/Header";
import SearchVacancies from "page-sections/vacancies/SearchVacancies";
import Form from "page-sections/vacancies/Form";

// gql
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/vacancies/formConfig";

// jss styles
import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const Vacancies = () => {
  const classes = useStyles();
  const [archivoData, setarchivoData] = useState();
  const [uploadFile] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const {
      archivoCarga,
      name,
      apellidos,
      edad,
      celular,
      email,
      localidad,
      linkPDF,
    } = values;

    const getBase64 = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        cb(reader.result);
      };
    };

    getBase64(archivoCarga, async (result) => {
      try {
        const { data } = await uploadFile({
          variables: {
            input: {
              content: result.replace(/^data:.+;base64,/, ""),
              filename: archivoCarga.name,
              page: "vacantes",
              data: {
                name,
                email,
                apellidos,
                edad,
                celular,
                localidad,
                linkPDF,
              },
            },
          },
        });
        setSubmitting(false);
        setarchivoData();
        resetForm();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      return result;
    });
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SearchVacancies />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Form
                {...props}
                archivoData={archivoData}
                setarchivoData={setarchivoData}
              />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withLayout(Vacancies);
