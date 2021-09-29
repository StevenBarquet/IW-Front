// Dependencies
import PropTypes from "prop-types";
import getConfig from "next/config";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import RenderHTML from "components/HTML/RenderHTML";

import robotStyles from "assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const CarouselInfo = ({ infoArea }) => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const classes = useStyles();

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: "ondemand",
    adaptiveHeight: false,
    speed: 1700,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderComponent = () => {
    return infoArea.map((item) => {
      return (
        <GridItem
          xs={12}
          sm={10}
          md={4}
          key={item.id}
          className={classes.cardFeatures}
        >
          <img
            className={classes.imgFeature}
            src={`${apiUrl}${item.sectionIcon.url}`}
            alt={item.sectionIcon.alternativeText}
          />
          <InfoArea
            vertical
            icon={TrendingUpIcon}
            title={item[`title${language}`]}
            description={
              <RenderHTML html={item[`descriptionTexts${language}`]} />
            }
            iconColor="warning"
          />
        </GridItem>
      );
    });
  };

  return (
    <>
      <GridContainer className={`${classes.mt8rem} ${classes.listaInfoArea}`}>
        {renderComponent()}
      </GridContainer>
      <GridContainer className={classes.carousel}>
        <GridItem xs={12} sm={12} md={9}>
          <Carousel {...sliderSettings}>{renderComponent()}</Carousel>
        </GridItem>
      </GridContainer>
    </>
  );
};

CarouselInfo.defaultProps = {
  infoArea: [],
};

CarouselInfo.propTypes = {
  infoArea: PropTypes.arrayOf(PropTypes.shape({})),
};

export default CarouselInfo;
