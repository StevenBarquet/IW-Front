// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

// @material-ui/core components
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

// core-components
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// jss styles
import rotatingCardStyle from "assets/jss/components/rotatingCardStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(rotatingCardStyle);

const PartnerCard = ({ card: { front, back }, numCard }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const [activeRotate, setActiveRotate] = React.useState("");
  const classes = useStyles();

  const addStylesForRotatingCards = () => {
    const rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i += 1) {
      const rotatingCard = rotatingCards[i];
      const cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      const cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "370px";
      cardFront.style.width = "459px";
      cardBack.style.height = "370px";
      cardBack.style.width = "459px";
      const rotatingWrapper = rotatingCard.parentElement;
      const cardWidth = rotatingCard.parentElement.offsetWidth;
      const cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = `${cardHeight}px`;
      rotatingWrapper.style["margin-bottom"] = `${30}px`;
      cardFront.style.height = "370px";
      cardFront.style.width = "459px";
      cardBack.style.height = "370px";
      cardBack.style.width = "459px";
      cardFront.style.height = `${cardHeight + 35}px`;
      cardFront.style.width = `${cardWidth}px`;
      cardBack.style.height = `${cardHeight + 35}px`;
      cardBack.style.width = `${cardWidth}px`;
    }
  };

  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });

  const CardBackList = () =>
    back.backCardListItems.map((backCardListItem) => (
      <div key={backCardListItem.id}>
        <Icon>{backCardListItem.materialIcon}</Icon>
        <p>{backCardListItem[`description${language}`]}</p>
      </div>
    ));

  return (
    <GridItem xs={12} sm={6} md={6} lg={4}>
      <ScrollAnimation
        animateIn="bounceInUp"
        duration={numCard + 1}
        animateOnce
      >
        <div
          className={`${classes.rotatingCardContainer} ${classes.manualRotate} ${activeRotate}`}
        >
          <Card pricing className={classes.cardRotate}>
            <div className={classes.front}>
              <CardBody className={classes.cardBodyRotate} pricing plain>
                <legend className={classes.title}>
                  {front[`frontCardTitle${language}`]}
                </legend>
                <img
                  src={`${apiUrl}${front.brandImage.url}`}
                  alt="Partner Card"
                  style={{ maxWidth: "100%", display: "block", margin: "auto" }}
                />
                <div className={classes.cardBodyContent}>
                  <span>{front[`partnerType${language}`]}</span>
                  <p>{front[`allianceTime${language}`]}</p>
                </div>
              </CardBody>
              <CardFooter>
                <div style={{ width: "100%" }}>
                  <Button
                    link
                    className={classes.floatRight}
                    onClick={() => setActiveRotate(classes.activateRotate)}
                  >
                    {front[`buttonLabel${language}`]}
                  </Button>
                </div>
              </CardFooter>
            </div>
            <div className={classes.back}>
              <CardBody className={classes.cardBodyRotate}>
                <div className={classes.backContainer}>
                  <h2>{back[`backCardTitle${language}`]}</h2>
                  <div className={classes.backSolutionsList}>
                    <CardBackList />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className={classes.backFooterContainer}>
                  <IconButton
                    color="inherit"
                    aria-label={`rotating card ${front.frontCardTitle}`}
                    className={classes.floatRight}
                    onClick={() => setActiveRotate("")}
                  >
                    <Icon>replay</Icon>
                  </IconButton>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </GridItem>
  );
};

PartnerCard.defaultProps = {
  card: {
    front: {},
    back: {},
  },
  numCard: null,
};

PartnerCard.propTypes = {
  card: PropTypes.shape({
    front: PropTypes.shape({
      frontCardTitle: PropTypes.string,
      brandImage: PropTypes.shape({
        url: PropTypes.string,
      }),
      partnerType: PropTypes.string,
      allianceTime: PropTypes.string,
    }),
    back: PropTypes.shape({
      backCardTitle: PropTypes.string,
      backCardListItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          materialIcon: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    }),
  }),
  numCard: PropTypes.number,
};

export default PartnerCard;
