// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_SERVICES_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(softwareFactoryStyle);

const FactoryServices = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(SW_FACTORY_SERVICES_QUERY);
  const classes = useStyles();

  const sliderSettings = {
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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

  if (!data.softwareFactory) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    softwareFactory: { factoryServices },
  } = data;

  return (
    <div id="section-factory-services" className={classes.section}>
      <h1 className={`${classes.title} ${classes.textCenter}`}>
        {factoryServices.title[`sectionTitle${language}`]}
      </h1>
      <br />
      <div>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {factoryServices.factoryServicesCarousel[
              `small_images${language}`
            ].map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
        <Hidden only={["xs", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {factoryServices.factoryServicesCarousel[
              `medium_images${language}`
            ].map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <Carousel {...sliderSettings}>
            {factoryServices.factoryServicesCarousel[
              `large_images${language}`
            ].map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
      </div>
    </div>
  );
};

export default FactoryServices;
