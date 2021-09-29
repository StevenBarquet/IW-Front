// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/footerStyle";

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const { children, content, theme, big, className } = props;
  const classes = useStyles();
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: "transparent",
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  big: PropTypes.bool,
  content: PropTypes.node.isRequired,
};

export default Footer;
