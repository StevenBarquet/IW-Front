// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/typographyStyle";

const useStyles = makeStyles(styles);

const Danger = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.defaultFontStyle} ${classes.dangerText}`}>
      {children}
    </div>
  );
};

Danger.defaultProps = {
  children: {},
};

Danger.propTypes = {
  children: PropTypes.node,
};

export default Danger;
