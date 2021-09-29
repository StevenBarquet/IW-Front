// Dependencies
import dynamic from "next/dynamic";
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_TALENT_ATTRACTION_QUERY } from "gql/queries/specialized-services";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

// components
const TalentAttractionCards = dynamic(
  import("page-sections/specialized-services/TalentAttractionCards")
);

const useStyles = makeStyles(specializedServicesStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const TalentAttraction = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_TALENT_ATTRACTION_QUERY
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
    specializedService: { talentAttraction },
  } = data;

  return (
    <div id="section-talent-attraction" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          title={talentAttraction.title[`sectionTitle${language}`]}
          effect
        >
          <RenderHTML
            html={
              talentAttraction.introductoryText[`introductoryText${language}`]
            }
            className={classes.introductoryText}
          />
        </SectionTitle>
      </GridContainer>
      <GridContainer justify="center" className={classes.margin8rem}>
        <SectionTitle
          title={
            talentAttraction.talentAttractionTitle[`sectionTitle${language}`]
          }
        >
          <GridContainer justify="center">
            <br />
            <TalentAttractionCards />
          </GridContainer>
        </SectionTitle>
      </GridContainer>
      <GridContainer justify="center" className={classes.margin8rem}>
        <GridItem xs={12} sm={6} md={4} lg={4}>
          <GridItem
            xs={12}
            sm={12}
            md={7}
            className={`${classes.margin8rem} ${classes.textCenter}`}
          >
            <h1>
              {talentAttraction.contactus.title[`sectionTitle${language}`]}
            </h1>
            <Button type="submit" round color="secondary">
              {talentAttraction.contactus.actionButton[`label${language}`]}
            </Button>
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <ScrollAnimation animateIn="bounceInRight" duration={3} animateOnce>
            <img
              src={`${apiUrl}${talentAttraction.contactus.sectionIcon.url}`}
              alt={talentAttraction.contactus.sectionIcon.alternativeText}
              style={{ width: "98%" }}
            />
          </ScrollAnimation>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default TalentAttraction;
