/* eslint-disable react/require-default-props */
// Dependencies
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";
import Button from "components/CustomButtons/Button";
import Checkbox from "components/CustomCheckbox/Checkbox";
import CustomInput from "components/CustomInput/CustomInput";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_REQUEST_QUOTE_QUERY } from "gql/queries/specialized-services";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const useStyles = makeStyles(specializedServicesStyle);

const RequestQuote = ({ values, errors, handleChange }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_REQUEST_QUOTE_QUERY
  );
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

  if (!data.specializedService) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    specializedService: { requestQuote },
  } = data;

  return (
    <div id="section-request-quote" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle title={requestQuote.title[`sectionTitle${language}`]}>
          <>
            <RenderHTML
              html={
                requestQuote.introductoryText[`introductoryText${language}`]
              }
              className={classes.introductoryText}
            />
          </>
        </SectionTitle>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={5} md={4}>
          <CustomInput
            id="name"
            name="name"
            value={values.name}
            labelText={language === "_en" ? "Full name:" : "Nombre completo:"}
            handleChange={handleChange}
            inputProps={{
              name: "name",
              placeholder:
                language === "_en" ? "Full name:" : "Nombre completo:",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            error={errors && !!errors.name}
          />
        </GridItem>
        <GridItem xs={12} sm={5} md={6}>
          <CustomInput
            id="email"
            name="email"
            value={values.email}
            labelText={language === "_en" ? "Email:" : "Correo electronico:"}
            handleChange={handleChange}
            inputProps={{
              name: "email",
              placeholder:
                language === "_en" ? "Email:" : "Correo electronico:",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            error={errors && !!errors.email}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={5} md={6}>
          <CustomInput
            id="company"
            name="company"
            value={values.company}
            labelText={language === "_en" ? "Company:" : "Empresa"}
            handleChange={handleChange}
            inputProps={{
              name: "company",
              placeholder: language === "_en" ? "Company:" : "Empresa",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            error={errors && !!errors.company}
          />
        </GridItem>
        <GridItem xs={12} sm={5} md={4}>
          <CustomInput
            id="telephone"
            name="telephone"
            value={values.telephone}
            labelText={
              language === "_en"
                ? "Telephone contact:"
                : "Teléfono de contacto:"
            }
            handleChange={handleChange}
            inputProps={{
              name: "telephone",
              placeholder:
                language === "_en"
                  ? "Telephone contact:"
                  : "Teléfono de contacto:",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            error={errors && !!errors.telephone}
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <CustomInput
            id="description"
            name="description"
            value={values.description}
            labelText={
              language === "_en"
                ? "Indicate your need (# of vacancies, description, salary range, etc):"
                : "Indica tu necesidad (# de vacantes, descripción, rango salarial, etc):"
            }
            handleChange={handleChange}
            fullWidth
            multiline
            inputProps={{
              name: "description",
              placeholder:
                language === "_en"
                  ? "Indicate your need (# of vacancies, description, salary range, etc):"
                  : "Indica tu necesidad (# de vacantes, descripción, rango salarial, etc):",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            error={errors && !!errors.description}
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <Checkbox
            label={
              language === "_en"
                ? "Certe, inquam, pertinax non quo ignorare vos arbitrer, sed et caritatem, quae sunt vitae dicta sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil ut ratione intellegi posse et via procedat oratio."
                : "Certe, inquam, pertinax non quo ignorare vos arbitrer, sed et caritatem, quae sunt vitae dicta sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil ut ratione intellegi posse et via procedat oratio."
            }
            id="validate"
            name="validate"
            checked={values.validate}
            handleClick={handleChange}
            inputProps={{
              name: "validate",
              id: "validate",
            }}
            error={errors && !!errors.validate}
          />
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer justify="center">
        <Button type="submit" round color="secondary">
          {requestQuote.actionButton[`label${language}`]}
        </Button>
      </GridContainer>
    </div>
  );
};

RequestQuote.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    telephone: PropTypes.string,
    description: PropTypes.string,
    validate: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    telephone: PropTypes.string,
    description: PropTypes.string,
    validate: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default RequestQuote;
