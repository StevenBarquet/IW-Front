/* eslint-disable no-nested-ternary */
// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

// core components
import InputLabel from "components/InputLabel/InputLabel";

import styles from "assets/jss/components/customSelectStyle";
import stylesInput from "assets/jss/components/customInputStyle";
import basicsStyle from "assets/jss/components/basicsStyle";

const useStylesSelect = makeStyles(styles);
const useStylesInput = makeStyles(stylesInput);
const useStyles = makeStyles(basicsStyle);

const CustomSelect = ({
  multiple,
  id,
  name,
  value,
  label,
  noOptionText,
  handleChange,
  options,
  disabled,
  error,
  success,
}) => {
  const classesSelect = useStylesSelect();
  const classesInput = useStylesInput();
  const classes = useStyles();

  const labelClasses = classNames({
    [` ${classesSelect.labelRootError}`]: error,
    [` ${classesSelect.labelRootSuccess}`]: success && !error,
  });

  return (
    <FormControl
      fullWidth
      className={`Custom-Select  ${classes.selectFormControl}`}
    >
      <InputLabel
        htmlFor={`htmlFor-select-${name}`}
        label={label}
        className={`${classes.classesSelect} ${labelClasses}`}
      />
      <Select
        multiple={multiple}
        MenuProps={{
          className: classes.selectMenu,
          disabled: classesInput.disabled,
        }}
        classes={{
          select: classes.select,
        }}
        value={value}
        onChange={handleChange}
        inputProps={{
          id,
          name,
          disabled,
        }}
      >
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
          }}
          value=""
        >
          {noOptionText || "Selecciona una opción"}
        </MenuItem>
        {options.map((option) => (
          // eslint-disable-next-line react/jsx-indent
          <MenuItem
            key={`Custom-Select-${option.value}`}
            classes={{
              root: classes.selectMenuItem,
              selected: multiple
                ? classes.selectMenuItemSelectedMultiple
                : classes.selectMenuItemSelected,
            }}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error ? (
        <Clear
          style={{ right: "2rem" }}
          className={`${classesInput.feedback} ${classesInput.labelRootError}`}
        />
      ) : success ? (
        <Check
          style={{ right: "2rem" }}
          className={`${classesInput.feedback} ${classesInput.labelRootSuccess}`}
        />
      ) : null}
    </FormControl>
  );
};

CustomSelect.defaultProps = {
  multiple: false,
  options: [],
  disabled: false,
  label: "",
  noOptionText: "",
  error: false,
  success: false,
};

CustomSelect.propTypes = {
  multiple: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  label: PropTypes.string,
  noOptionText: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default CustomSelect;
