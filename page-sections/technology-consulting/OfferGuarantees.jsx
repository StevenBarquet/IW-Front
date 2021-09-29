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
import { TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY } from "gql/queries/technology-consulting";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const OfferGuarantees = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(
    TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY
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

  if (!data.technologyConsulting) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    technologyConsulting: { offerGuarantees },
  } = data;

  return (
    <div id="section-offer-guarantees" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={offerGuarantees.sectionIcon}
          title={offerGuarantees.title[`sectionTitle${language}`]}
        >
          <CarouselInfo infoArea={offerGuarantees.infoArea} />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default OfferGuarantees;
