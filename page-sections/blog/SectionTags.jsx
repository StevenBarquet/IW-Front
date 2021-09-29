// Dependencies
import * as yup from "yup";
import { Formik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardHeader from "components/Card/CardHeader";
import Badge from "components/Badge/Badge";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_TAGS_QUERY } from "gql/queries/blog";
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const initialValues = {
  inscribete: "",
};

const schema = yup.object().shape({
  inscribete: yup.string().notRequired(),
});

const SectionTags = ({ articleImg }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const [createRegistry] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const { inscribete } = values;

    try {
      const { data } = await createRegistry({
        variables: {
          input: {
            page: "boletin",
            data: {
              inscribete,
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
  const { loading, error, data } = useQuery(BLOG_TAGS_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.tagsBlogs) {
    return <span>¡Revisar CMS!</span>;
  }

  const { tagsBlogs } = data;

  return (
    <GridItem xs={12} sm={10} md={articleImg ? 12 : 3}>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <CardHeader image plain>
          <img
            src={`${apiUrl}${data.blog.bannersBlog.bannerUp.url}`}
            alt={data.blog.bannersBlog.bannerDown.alternativeText}
          />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${apiUrl}${data.blog.bannersBlog.bannerUp.url})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <CardHeader image plain>
          <img
            src={`${apiUrl}${data.blog.bannersBlog.bannerDown.url}`}
            alt={data.blog.bannersBlog.bannerDown.alternativeText}
          />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${apiUrl}${data.blog.bannersBlog.bannerDown.url})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <h2>
          {language === "_en" ? "Interware Newsletter" : "Boletín Interware"}
        </h2>
        <hr />
        <h3>
          {language === "_en"
            ? "Sign up for our newsletter"
            : "Inscríbete a nuestro boletín"}
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmitForm}
          enableReinitialize
          validateOnChange={false}
        >
          {({ handleChange, handleSubmit, values: { inscribete } }) => {
            return (
              <form onSubmit={handleSubmit}>
                <CustomInput
                  id="inscribete"
                  name="inscribete"
                  value={inscribete}
                  labelText={language === "_en" ? "Sign up" : "Inscríbete"}
                  handleChange={handleChange}
                  inputProps={{
                    name: "inscribete",
                    placeholder: language === "_en" ? "Sign up" : "Inscríbete",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <Button
                  color="primary"
                  className={classes.btnBoletin}
                  round
                  type="submit"
                >
                  {language === "_en" ? "Send" : "Enviar"}
                </Button>
              </form>
            );
          }}
        </Formik>
      </GridItem>
      <br />
      <GridItem xs={12} sm={12} md={12}>
        <h2>Tags</h2>
        <hr />
        <GridContainer>
          {tagsBlogs &&
            tagsBlogs.map((tag) => (
              <div style={{ margin: "3px" }} key={tag.id}>
                <Badge color="primary">
                  <Link href="/blog">
                    <span>{tag[`name${language}`]}</span>
                  </Link>
                </Badge>
              </div>
            ))}
        </GridContainer>
      </GridItem>
    </GridItem>
  );
};

SectionTags.defaultProps = {
  articleImg: false,
};

SectionTags.propTypes = {
  articleImg: PropTypes.bool,
};

export default SectionTags;
