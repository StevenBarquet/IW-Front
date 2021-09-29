// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// Components core
import SectionTitle from "components-sections/SectionTitle";
import GridContainer from "components/Grid/GridContainer";

// context
import { useSettings } from "context/Settings";

// gql
import { QUALITY_SUCCESS_STORIES_QUERY } from "gql/queries/quality-assurance";

// jss styles
import qualityAssuranceStyle from "assets/jss/qualityAssuranceStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(qualityAssuranceStyle);

const QASuccessStories = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(QUALITY_SUCCESS_STORIES_QUERY);
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
    qualityAssurance: { successStoriesQA },
  } = data;

  return (
    <div id="section-success-stories" className={`${classes.section}`}>
      <GridContainer justify="center">
        <SectionTitle
          icon={successStoriesQA.sectionIcon}
          title={successStoriesQA.title[`sectionTitle${language}`]}
        />
      </GridContainer>
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Carousel {...sliderSettings}>
          {successStoriesQA.successStoriesQACarousel[
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
          {successStoriesQA.successStoriesQACarousel[
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
          {successStoriesQA.successStoriesQACarousel[
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
  );
};

export default QASuccessStories;
