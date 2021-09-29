// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "context/Settings";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// gql
import { ROBOT_FUNTIONING_QUERY } from "gql/queries/robot";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const Functioning = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(ROBOT_FUNTIONING_QUERY);
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

  if (!data.robot) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    robot: { funtioning },
  } = data;

  return (
    <div id="section-funtioning" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle icon={funtioning.header.sectionIcon}>
          <RenderHTML
            html={
              funtioning.header.introductoryText[`introductoryText${language}`]
            }
            className={classes.swDescription}
          />
        </SectionTitle>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={9}>
          <h2 className={classes.title}>
            {funtioning.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={funtioning.introductoryText[`introductoryText${language}`]}
            className={classes.introductoryText}
          />
          <div className={classes.featuresSection} />
        </GridItem>
        <GridItem xs={12} sm={10} md={9}>
          <div className={classes.iframeContainer}>
            <iframe
              height="650"
              src={funtioning.urlYoutube}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen=""
              title="Tesla"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Functioning;
