// Dependencies
import Link from "next/link";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { HOME_OUR_EXPERIENCE_QUERY } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const Experience = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(HOME_OUR_EXPERIENCE_QUERY);
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
    home: { ourExperience },
  } = data;

  const BusinessLinesList = () =>
    ourExperience.businessListItems.map((listItem) => (
      <li key={listItem.id}>
        <div>
          <Icon>{listItem.materialIcon}</Icon>
          <Link href={listItem.path}>
            <a>{listItem[`description${language}`]}</a>
          </Link>
        </div>
      </li>
    ));

  return (
    <div id="section-experience">
      <GridContainer
        justify="center"
        alignItems="center"
        className={classes.sectionWithBackgroundColor}
      >
        <GridItem item xs={10} sm={8} md={4} lg={5}>
          <div className={classes.underlinedTitleContainer}>
            <h1>{ourExperience[`underlinedTitle${language}`]}</h1>
            <hr className={classes.divider} />
          </div>
          <RenderHTML
            html={ourExperience[`introductoryText${language}`]}
            className={classes.experienceDescription}
          />
        </GridItem>
        <GridItem xs={10} sm={8} md={4} lg={5}>
          <div className={classes.businessListContainer}>
            <div>
              <span className={classes.businessLinesTitle}>
                {ourExperience[`businessListTitle${language}`]}
              </span>
              <ul className={classes.businessFeed}>
                <BusinessLinesList />
              </ul>
            </div>
          </div>
          <Button
            onClick={(e) => e.preventDefault()}
            className={classes.floatRight}
            link
            round
          >
            {ourExperience.actionButton[`label${language}`]}
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Experience;
