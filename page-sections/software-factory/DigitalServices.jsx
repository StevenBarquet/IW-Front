// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_DIGITAL_SERVICES_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const useStyles = makeStyles(softwareFactoryStyle);

const DigitalServices = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SW_FACTORY_DIGITAL_SERVICES_QUERY);
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

  if (!data.softwareFactory) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    softwareFactory: { digitalServices },
  } = data;

  return (
    <div
      id="section-digital-services"
      className={`${classes.sectionWithBackgroundColor} ${classes.marginTop6rem}`}
    >
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={10} sm={5} md={5} lg={5}>
          <div className={classes.titleContainer}>
            <h1>{digitalServices.title[`sectionTitle${language}`]}</h1>
            <hr className={classes.divider} />
          </div>
        </GridItem>
        <GridItem xs={10} sm={6} md={4} lg={5}>
          <RenderHTML
            html={
              digitalServices.introductoryText[`introductoryText${language}`]
            }
          />
          <GridItem
            xs={6}
            sm={4}
            md={3}
            className={`${classes.mlAuto} ${classes.mrAuto}`}
          >
            <Button onClick={(e) => e.preventDefault()} round color="secondary">
              {digitalServices.actionButton[`label${language}`]}
            </Button>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default DigitalServices;
