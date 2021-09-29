/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-wrap-multilines */
// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

import style from "assets/jss/components/customCheckboxRadioSwitchStyle";
import basicsStyle from "assets/jss/components/customInputStyle";

const useStyles = makeStyles(style);
const useStylesInput = makeStyles(basicsStyle);

const CustomCheckbox = ({
  label,
  key,
  checked,
  handleClick,
  inputProps,
  error,
  success,
  disabled,
}) => {
  const classes = useStyles();
  const classesInput = useStylesInput();
  const labelClasses = classNames({
    [` ${classesInput.labelRootError}`]: error,
    [` ${classesInput.labelRootSuccess}`]: success && !error,
  });

  return (
    <FormControl fullWidth className={classes.selectFormControl}>
      <FormControlLabel
        control={
          <Checkbox
            key={key}
            checked={checked}
            tabIndex={-1}
            onClick={handleClick}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot,
            }}
            inputProps={inputProps}
            disabled={disabled}
          />
        }
        classes={{
          disabled: classes.disabledCheckboxAndRadio,
        }}
        label={
          <Typography
            classes={{
              root: `${classes.label} ${classes.classesInput} ${labelClasses}`,
            }}
          >
            {label}
          </Typography>
        }
      />
      {error ? (
        <Clear
          className={`${classesInput.feedback} ${classesInput.labelRootError}`}
        />
      ) : success ? (
        <Check
          className={`${classesInput.feedback} ${classesInput.labelRootSuccess}`}
        />
      ) : null}
    </FormControl>
  );
};

CustomCheckbox.defaultProps = {
  label: "",
  key: "CustomCheckbox",
  inputProps: {},
  error: false,
  success: false,
  disabled: false,
};

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  key: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  inputProps: PropTypes.shape({}),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CustomCheckbox;
