// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

// core-components
import GridItem from "components/Grid/GridItem";

import sectionTitleStyle from "assets/jss/components/sectionTitleStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(sectionTitleStyle);

// eslint-disable-next-line no-shadow
const SectionTitle = ({
  legend,
  title,
  subTitle,
  icon,
  effect,
  children,
  changeColor,
}) => {
  const classes = useStyles();

  const Icon = () => {
    return (
      <ScrollAnimation animateIn="slideInUp" animateOnce>
        <div>
          <img
            src={`${apiUrl}${icon.url}`}
            alt={icon.alternativeText}
            className={classes.centerImage}
          />
        </div>
      </ScrollAnimation>
    );
  };

  return (
    <GridItem xs={12} sm={12} md={8} lg={10}>
      {icon && <Icon />}
      {legend && <p className={classes.legend}>{legend}</p>}
      {title &&
        (effect ? (
          <ScrollAnimation animateIn="flipInX" duration={2} animateOnce>
            <h1 className={classes.title}>{title}</h1>
          </ScrollAnimation>
        ) : (
          <h1 className={classes.title}>{title}</h1>
        ))}
      {subTitle && (
        <h2 className={changeColor ? classes.subTitleColor : classes.subTitle}>
          {subTitle}
        </h2>
      )}
      {children}
    </GridItem>
  );
};

SectionTitle.defaultProps = {
  legend: "",
  title: "",
  subTitle: "",
  icon: null,
  children: null,
  changeColor: false,
  effect: false,
};

SectionTitle.propTypes = {
  legend: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  effect: PropTypes.bool,
  changeColor: PropTypes.bool,
  children: PropTypes.element,
};

export default SectionTitle;
