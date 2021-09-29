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
import { QUALITY_QA_OFFERGUATANTES_QUERY } from "gql/queries/quality-assurance";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const QAofferGuarantees = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(QUALITY_QA_OFFERGUATANTES_QUERY);
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

  if (!data.qualityAssurance) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    qualityAssurance: { offerGuaranteesQA },
  } = data;

  return (
    <div id="section-QAofferGuarantees" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={offerGuaranteesQA.sectionIcon}
          title={offerGuaranteesQA.title[`sectionTitle${language}`]}
        >
          <CarouselInfo infoArea={offerGuaranteesQA.infoArea} />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default QAofferGuarantees;
