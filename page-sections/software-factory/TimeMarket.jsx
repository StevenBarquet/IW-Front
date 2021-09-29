// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_TIMEMARKET_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const useStyles = makeStyles(softwareFactoryStyle);

const TimeMarket = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SW_FACTORY_TIMEMARKET_QUERY);
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
    softwareFactory: { timeMarket },
  } = data;

  return (
    <div id="section-time-market" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          title={timeMarket.title[`sectionTitle${language}`]}
          effect
        >
          <RenderHTML
            html={timeMarket.introductoryText[`introductoryText${language}`]}
            className={classes.swDescription}
          />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default TimeMarket;
