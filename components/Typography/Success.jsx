// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/typographyStyle";

const useStyles = makeStyles(styles);

const Success = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.defaultFontStyle} ${classes.successText}`}>
      {children}
    </div>
  );
};

Success.defaultProps = {
  children: {},
};

Success.propTypes = {
  children: PropTypes.node,
};

export default Success;
