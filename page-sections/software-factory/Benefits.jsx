// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import NavPills from "components/NavPills/NavPills";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_BENEFITS_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const useStyles = makeStyles(softwareFactoryStyle);

const Benefits = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SW_FACTORY_BENEFITS_QUERY);
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
    softwareFactory: { benefits },
  } = data;

  const tags = () => {
    return benefits.benefitsNavPills.map((tag) => ({
      tabIcon: tag.tabIcon,
      tabContent: (
        <RenderHTML
          html={tag.introductoryText[`introductoryText${language}`]}
          className={classes.swDescription}
        />
      ),
    }));
  };

  return (
    <div id="section-benefits" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={benefits.sectionIcon}
          title={benefits.title[`sectionTitle${language}`]}
        >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <NavPills alignCenter tabs={tags()} />
            </GridItem>
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default Benefits;
