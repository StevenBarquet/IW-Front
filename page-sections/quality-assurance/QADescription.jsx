// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { QUALITY_QA_DESCRIPTION_QUERY } from "gql/queries/quality-assurance";

// jss styles
import qualityAssuranceStyle from "assets/jss/qualityAssuranceStyle";

const useStyles = makeStyles(qualityAssuranceStyle);

const QADescription = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(QUALITY_QA_DESCRIPTION_QUERY);
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
    qualityAssurance: { qaDescription },
  } = data;

  return (
    <div id="section-QADescription" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          legend={qaDescription.legend[`sectionLegendTitle${language}`]}
          title={qaDescription.title[`sectionTitle${language}`]}
          subTitle={qaDescription.subtitle[`sectionSubTitle${language}`]}
          effect
        />
      </GridContainer>
    </div>
  );
};

export default QADescription;
