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

// gql
import { JOIN_US_TEAM_QUERY } from "gql/queries/join-us";

import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const JoinTeam = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(JOIN_US_TEAM_QUERY);
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

  if (!data.joinUs) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    joinUs: { joinTeam },
  } = data;

  return (
    <div id="section-join-team" className={classes.section}>
      <GridContainer
        justify="center"
        className={classes.sectionBackgroundColor}
      >
        <GridItem xs={12} sm={10} md={9} className={classes.textCenter}>
          <h2 className={classes.title}>
            {joinTeam.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={joinTeam.introductoryText[`introductoryText${language}`]}
            className={classes.introductoryText}
          />
          <div className={classes.featuresSection} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default JoinTeam;
