// Dependencies
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/robot/Header";
import Functioning from "page-sections/robot/Functioning";
import Benefits from "page-sections/robot/Benefits";
import Form from "page-sections/robot/Form";
import PlansForYou from "page-sections/robot/PlansForYou";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/robot/formConfig";

// apollo
import { initializeApollo } from "libs/apollo";

// gql
import { ROBOT_HEADER_QUERY, ROBOT_FUNTIONING_QUERY } from "gql/queries/robot";
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// styles
import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const RobotPage = () => {
  const classes = useStyles();
  const [createRegistry] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const { nombre, email, empresa, automatizacion } = values;
    try {
      const { data } = await createRegistry({
        variables: {
          input: {
            page: "robotIW",
            data: {
              nombre,
              email,
              empresa,
              automatizacion,
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
        <Functioning />
        <Benefits />
        <PlansForYou />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Form {...props} />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ROBOT_HEADER_QUERY,
  });

  await apolloClient.query({
    query: ROBOT_FUNTIONING_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default withLayout(RobotPage);
