// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";
import CarouselInfo from "components-sections/CarouselInfo";

// gql
import { ROBOT_BENEFITS_QUERY } from "gql/queries/robot";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const Benefits = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(ROBOT_BENEFITS_QUERY);
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
    robot: { benefits },
  } = data;

  return (
    <div id="section-benefits" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={benefits.sectionIcon}
          legend={benefits.legend[`sectionLegendTitle${language}`]}
          title={benefits.title[`sectionTitle${language}`]}
        >
          <CarouselInfo infoArea={benefits.InfoArea} />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default Benefits;
