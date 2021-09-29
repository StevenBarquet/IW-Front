// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/infoStyle";

const useStyles = makeStyles(styles);

const InfoArea = (props) => {
  const { title, description, className } = props;
  const classes = useStyles();
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined,
  });

  return (
    <div className={infoAreaClasses}>
      <div className={classes.descriptionWrapper}>
        <p className={classes.title}>{title}</p>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
};

InfoArea.defaultProps = {
  className: "",
};

InfoArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default InfoArea;
