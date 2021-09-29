// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { HOME_ABOUT_US_QUERY } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const SectionAboutUs = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(HOME_ABOUT_US_QUERY);
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

  if (!data.home) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    home: { aboutUs },
  } = data;

  return (
    <div id="section-about" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          legend={aboutUs.legend[`sectionLegendTitle${language}`]}
          title={aboutUs.title[`sectionTitle${language}`]}
          effect
        >
          <>
            <RenderHTML
              html={aboutUs.introductoryText[`introductoryText${language}`]}
              className={classes.textCenter}
            />
            <Button
              onClick={(e) => e.preventDefault()}
              className={classes.floatRight}
              link
              round
            >
              {aboutUs.actionButton[`label${language}`]}
            </Button>
          </>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default SectionAboutUs;
