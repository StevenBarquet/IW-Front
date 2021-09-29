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
import { QUALITY_QA_OFFER_QUERY } from "gql/queries/quality-assurance";

// jss styles
import qualityAssuranceStyle from "assets/jss/qualityAssuranceStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(qualityAssuranceStyle);

const QAOffer = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(QUALITY_QA_OFFER_QUERY);
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

  if (!data.qualityAssurance) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    qualityAssurance: { qaOffer },
  } = data;

  return (
    <div id="section-QAOffer" className={classes.section}>
      <h1 className={`${classes.title} ${classes.textCenter}`}>
        {qaOffer.title[`sectionTitle${language}`]}
      </h1>
      <br />
      <div>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {qaOffer.qaOfferCarousel[`small_images${language}`].map((image) => (
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
            {qaOffer.qaOfferCarousel[`medium_images${language}`].map(
              (image) => (
                <div key={image.id}>
                  <img
                    src={`${apiUrl}${image.url}`}
                    alt={image.alternativeText}
                    className="slick-image"
                  />
                </div>
              )
            )}
          </Carousel>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <Carousel {...sliderSettings}>
            {qaOffer.qaOfferCarousel[`large_images${language}`].map((image) => (
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

export default QAOffer;
