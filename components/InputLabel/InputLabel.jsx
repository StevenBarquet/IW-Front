// Dependencies
import { string } from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import basicsStyle from "assets/jss/basicsStyle";

const useStyles = makeStyles(basicsStyle);

const CustomInputLabel = ({ htmlFor, label, className }) => {
  const classes = useStyles();
  return (
    <InputLabel
      htmlFor={htmlFor}
      className={`${classes.selectLabel} ${className}`}
    >
      {label}
    </InputLabel>
  );
};

CustomInputLabel.propTypes = {
  htmlFor: string.isRequired,
  label: string.isRequired,
  className: string,
};

export default CustomInputLabel;
