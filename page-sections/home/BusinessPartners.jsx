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
import { HOME_BUSINESS_PARTNERS } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

// components
const SectionBusinessPartnersCards = dynamic(
  import("page-sections/home/BusinessPartnersCards")
);

const useStyles = makeStyles(homeStyle);

const BusinessPartners = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(HOME_BUSINESS_PARTNERS);
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
    home: { businessPartners },
  } = data;

  return (
    <div id="section-partners" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={businessPartners.sectionIcon}
          legend={businessPartners.legend[`sectionLegendTitle${language}`]}
          title={businessPartners.title[`sectionTitle${language}`]}
          subTitle={businessPartners.subTitle[`sectionSubTitle${language}`]}
        >
          <GridContainer justify="center">
            <SectionBusinessPartnersCards />
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default BusinessPartners;
