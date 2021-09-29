// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// context
import { useSettings } from "context/Settings";

// components
import RenderHTML from "components/HTML/RenderHTML";

// gql
import { HOME_HEADER_QUERY } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(homeStyle);

const Header = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(HOME_HEADER_QUERY);
  const classes = useStyles();

  const sliderSettings = {
    autoplay: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
    home: { header },
  } = data;

  const ImageComponent = ({ image }) => (
    <div>
      <img
        src={`${apiUrl}${image.url}`}
        alt={image.alternativeText}
        className="slick-image"
      />
    </div>
  );

  ImageComponent.propTypes = {
    image: PropTypes.shape({}).isRequired,
  };

  return (
    <header id="header" className={classes.carouselContainer}>
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Carousel {...sliderSettings}>
          {header.small_images.map((image, key) => (
            <ImageComponent key={key} image={image} /> // eslint-disable-line react/no-array-index-key
          ))}
        </Carousel>
      </Hidden>
      <Hidden only={["xs", "md", "lg", "xl"]}>
        <Carousel {...sliderSettings}>
          {header.medium_images.map((image, key) => (
            <ImageComponent key={key} image={image} /> // eslint-disable-line react/no-array-index-key
          ))}
        </Carousel>
      </Hidden>
      <Hidden only={["xs", "sm"]}>
        <Carousel {...sliderSettings}>
          {header.large_images.map((image, key) => (
            <ImageComponent key={key} image={image} /> // eslint-disable-line react/no-array-index-key
          ))}
        </Carousel>
      </Hidden>
      <div className={classes.captionContainer}>
        <RenderHTML
          html={header[`caption${language}`]}
          className={classes.textOverlay}
        />
      </div>
    </header>
  );
};

export default Header;
