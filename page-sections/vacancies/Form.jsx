/* eslint-disable react/require-default-props */
// Dependencies
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AttachFile from "@material-ui/icons/AttachFile";
// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInputField from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import RenderHTML from "components/HTML/RenderHTML";
import CustomFileInput from "components/CustomFileInput/CustomFileInput";

// gql
import { VACANCIES_FORM_QUERY } from "gql/queries/vacancies";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const Form = ({ values, errors, handleChange, setFieldValue }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(VACANCIES_FORM_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.vacanciesIw) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    vacanciesIw: { form },
  } = data;

  return (
    <div id="section-form" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8} lg={11}>
          <h2 className={classes.title}>
            {form.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={form.subtitle[`sectionSubTitle${language}`]}
            className={classes.textCenter}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>
            {language === "_en" ? "Personal information" : "Datos Personales"}
          </h3>
          <GridContainer>
            <GridItem item xs={12} sm={5} md={5}>
              <TextInputField
                id="name"
                name="name"
                value={values.name}
                labelText={language === "_en" ? "Name(s)" : "Nombre(s)"}
                handleChange={handleChange}
                error={errors && !!errors.name}
                inputProps={{
                  name: "name",
                  placeholder: language === "_en" ? "Name(s)" : "Nombre(s)",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem item xs={12} sm={5} md={5}>
              <TextInputField
                id="apellidos"
                name="apellidos"
                value={values.apellidos}
                labelText={language === "_en" ? "Last names" : "Apellidos"}
                handleChange={handleChange}
                error={errors && !!errors.apellidos}
                inputProps={{
                  name: "apellidos",
                  placeholder: language === "_en" ? "Last names" : "Apellidos",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={2} md={2}>
              <TextInputField
                id="edad"
                name="edad"
                value={values.edad}
                labelText={language === "_en" ? "Age" : "Edad"}
                handleChange={handleChange}
                error={errors && !!errors.edad}
                inputProps={{
                  name: "edad",
                  placeholder: language === "_en" ? "Age" : "Edad",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem item xs={12} sm={12} md={12}>
              <TextInputField
                id="perfil"
                name="perfil"
                value={values.perfil}
                labelText={language === "_en" ? "Company" : "Perfil"}
                handleChange={handleChange}
                error={errors && !!errors.perfil}
                inputProps={{
                  name: "perfil",
                  placeholder: language === "_en" ? "Profile" : "Perfil",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>
            {language === "_en" ? "Contact information" : "Datos de Contacto"}
          </h3>
          <GridContainer>
            <GridItem item xs={12} sm={4} md={4}>
              <TextInputField
                id="celular"
                name="celular"
                value={values.celular}
                labelText={
                  language === "_en"
                    ? "Cell phone and / or home"
                    : "Teléfono celular y/o casa"
                }
                handleChange={handleChange}
                error={errors && !!errors.celular}
                inputProps={{
                  name: "celular",
                  placeholder:
                    language === "_en"
                      ? "Cell phone and / or home"
                      : "Teléfono celular y/o casa",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem item xs={12} sm={4} md={4}>
              <TextInputField
                id="email"
                name="email"
                value={values.email}
                labelText={language === "_en" ? "E mail" : "Correo Electrónico"}
                handleChange={handleChange}
                error={errors && !!errors.email}
                inputProps={{
                  name: "email",
                  placeholder:
                    language === "_en" ? "E mail" : "Correo Electrónico",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <TextInputField
                id="localidad"
                name="localidad"
                value={values.localidad}
                labelText={
                  language === "_en"
                    ? "Locality: municipality or mayor's office"
                    : "Localidad: municipio o alcaldía"
                }
                handleChange={handleChange}
                error={errors && !!errors.localidad}
                inputProps={{
                  name: "localidad",
                  placeholder:
                    language === "_en"
                      ? "Locality: municipality or mayor's office"
                      : "Localidad: municipio o alcaldía",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>
            {language === "_en"
              ? "Attach your Curriculum Vitae"
              : "Adjunta tu Curriculum Vitae"}
          </h3>
          <GridContainer>
            <GridItem item xs={12} sm={6} md={6}>
              <CustomFileInput
                id="archivoCarga-vacancies"
                value={values.archivoCarga ? values.archivoCarga.name : ""}
                fileInputProps={{
                  id: "archivoCarga",
                  name: "archivoCarga",
                  onChange: setFieldValue,
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Seleccionar archivo...",
                }}
                endButton={{
                  buttonProps: {
                    round: true,
                    color: "primary",
                    justIcon: true,
                    fileButton: true,
                  },
                  icon: <AttachFile />,
                }}
                error={errors && !!errors.archivoCarga}
              />
              <p className={classes.colorText} id="text">
                {language === "_en"
                  ? "Formato Word o PDF, RTF peso menor a 2000 KB "
                  : "Word or PDF format, RTF weight less than 2000 KB"}
              </p>
            </GridItem>
            <GridItem item xs={12} sm={6} md={6}>
              <TextInputField
                id="linkPDF"
                name="linkPDF"
                value={values.linkPDF}
                labelText={
                  language === "_en"
                    ? "Link to download"
                    : "Link para descargar"
                }
                handleChange={handleChange}
                error={errors && !!errors.linkPDF}
                inputProps={{
                  name: "linkPDF",
                  placeholder:
                    language === "_en"
                      ? "Link to download"
                      : "Link para descargar",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.mt4rem}>
        <Button
          type="submit"
          className={classes.learnMoreButton}
          round
          color="secondary"
        >
          {form.actionButton[`label${language}`]}
        </Button>
      </GridContainer>
    </div>
  );
};

Form.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    apellidos: PropTypes.string,
    edad: PropTypes.string,
    perfil: PropTypes.string,
    celular: PropTypes.string,
    email: PropTypes.string,
    localidad: PropTypes.string,
    archivoCarga: PropTypes.any.isRequired,
    linkPDF: PropTypes.string,
  }),
  errors: PropTypes.shape({
    name: PropTypes.string,
    apellidos: PropTypes.string,
    edad: PropTypes.string,
    perfil: PropTypes.string,
    celular: PropTypes.string,
    email: PropTypes.string,
    localidad: PropTypes.string,
    archivoCarga: PropTypes.string,
    linkPDF: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default Form;
