// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { JOIN_US_SENDCV_QUERY } from "gql/queries/join-us";

// jss styles
import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const SendCV = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(JOIN_US_SENDCV_QUERY);
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
    joinUs: { sendCV },
  } = data;

  return (
    <div id="section-sendCV">
      <GridContainer
        justify="center"
        alignItems="center"
        className={classes.sectionWithBackgroundColor}
      >
        <GridItem xs={10} sm={5} md={5} lg={5}>
          <div className={classes.titleContainer}>
            <h1>{sendCV[`underlinedTitle${language}`]}</h1>
            <hr className={classes.divider} />
          </div>
        </GridItem>
        <GridItem xs={10} sm={6} md={4} lg={4}>
          <RenderHTML html={sendCV[`introductoryText${language}`]} />
          <GridItem
            xs={6}
            sm={4}
            md={3}
            className={`${classes.mlAuto} ${classes.mrAuto}`}
          >
            <Button onClick={(e) => e.preventDefault()} round color="secondary">
              {sendCV.actionButton[`label${language}`]}
            </Button>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SendCV;
