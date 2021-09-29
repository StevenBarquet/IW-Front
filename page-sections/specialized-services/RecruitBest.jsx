// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// core components
import GridContainer from "components/Grid/GridContainer";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_RECRUITBEST_QUERY } from "gql/queries/specialized-services";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const useStyles = makeStyles(specializedServicesStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const RecruitBest = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_RECRUITBEST_QUERY
  );
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

  if (!data.specializedService) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    specializedService: { recruitBest },
  } = data;

  return (
    <div id="section-recruit-Best" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle title={recruitBest.title[`sectionTitle${language}`]}>
          <>
            <RenderHTML
              html={recruitBest.introductoryText[`introductoryText${language}`]}
              className={classes.introductoryText}
            />
          </>
        </SectionTitle>
      </GridContainer>
      <div className={classes.margin8rem} />
      <div>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {recruitBest.carousel[`small_images${language}`].map((image) => (
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
            {recruitBest.carousel[`medium_images${language}`].map((image) => (
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
            {recruitBest.carousel[`large_images${language}`].map((image) => (
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

export default RecruitBest;
