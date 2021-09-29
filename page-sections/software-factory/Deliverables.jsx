// Dependencies
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import SectionTitle from "components-sections/SectionTitle";
import GridContainer from "components/Grid/GridContainer";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_DELIVERABLES_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

// components
const DeliverablesCards = dynamic(
  import("page-sections/software-factory/DeliverablesCards")
);

const useStyles = makeStyles(softwareFactoryStyle);

const Deliverables = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SW_FACTORY_DELIVERABLES_QUERY);
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
    softwareFactory: { deliverables },
  } = data;

  return (
    <div id="section-deliverables" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={deliverables.sectionIcon}
          title={deliverables.title[`sectionTitle${language}`]}
        >
          <GridContainer justify="center">
            <DeliverablesCards />
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default Deliverables;
