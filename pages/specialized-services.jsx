// Dependencies
import classNames from "classnames";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/specialized-services/Header";
import TalentScout from "page-sections/specialized-services/TalentScout";
import TalentAttraction from "page-sections/specialized-services/TalentAttraction";
import RecruitBest from "page-sections/specialized-services/RecruitBest";
import RequestQuote from "page-sections/specialized-services/RequestQuote";

// gql
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// InicialValues & Schema
import {
  initialValues,
  schema,
} from "page-sections/specialized-services/formConfig";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const useStyles = makeStyles(specializedServicesStyle);

const SpecializedServices = () => {
  const classes = useStyles();
  const [createRegistry] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const { name, email, company, telephone, description } = values;

    try {
      const { data } = await createRegistry({
        variables: {
          input: {
            page: "ServiciosEspecializados",
            data: {
              name,
              email,
              company,
              telephone,
              description,
            },
          },
        },
      });
      setSubmitting(false);
      resetForm();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TalentScout />
        <TalentAttraction />
        <RecruitBest />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <RequestQuote {...props} />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withLayout(SpecializedServices);
