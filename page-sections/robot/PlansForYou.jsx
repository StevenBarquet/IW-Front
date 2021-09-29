// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Button from "components/CustomButtons/Button";

// gql
import { ROBOT_PLANSFORYOU_QUERY } from "gql/queries/robot";

import robotStyles from "assets/jss/robotStyles";

// context
import { useSettings } from "context/Settings";

const useStyles = makeStyles(robotStyles);

const PlansForYou = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(ROBOT_PLANSFORYOU_QUERY);
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

  if (!data.robot) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    robot: { plansForYou },
  } = data;

  return (
    <div id="section-plansForYou" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={plansForYou.sectionIcon}
          legend={plansForYou.legend[`sectionLegendTitle${language}`]}
          title={plansForYou.title[`sectionTitle${language}`]}
        >
          <>
            <GridContainer className={`${classes.margimTop7rem}`}>
              {plansForYou.cardsPlans.map((item, index) => {
                return (
                  <GridItem xs={12} sm={12} md={6} lg={4} key={item.id}>
                    {index !== 1 && <br />}
                    <ScrollAnimation
                      animateIn="bounceInUp"
                      duration={index + 1}
                      animateOnce
                    >
                      <Card pricing className={classes.margimTop4rem}>
                        <CardHeader
                          className={classes.cardPosition}
                          image
                          plain
                        >
                          <div className={classes.backgroundContainer}>
                            <p className={classes.textBackground}>
                              {item[`sectionTitle${language}`]}
                            </p>
                          </div>
                        </CardHeader>
                        <CardBody pricing plain>
                          <h1 className={classes.cardTitle}>
                            {item[`sectionSubTitle${language}`]}
                          </h1>
                          <RenderHTML
                            className={classes.textDescription6rem}
                            html={item[`description${language}`]}
                          />
                        </CardBody>
                      </Card>
                    </ScrollAnimation>
                  </GridItem>
                );
              })}
            </GridContainer>
            <br />
            <GridContainer justify="center">
              <Button color="secondary" round>
                {plansForYou.actionButton[`label${language}`]}
              </Button>
            </GridContainer>
          </>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default PlansForYou;
