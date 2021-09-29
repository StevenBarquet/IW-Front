// Dependencies
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/components/customFileInputStyle";

const useStyles = makeStyles(styles);

const CustomFileInput = (props) => {
  const hiddenFile = React.createRef();
  const onFocus = (e) => {
    hiddenFile.current.click(e);
  };
  const {
    id,
    value,
    error,
    endButton,
    startButton,
    inputProps,
    formControlProps,
    multiple,
    fileInputProps,
    disabled,
  } = props;
  const classes = useStyles();
  const addFile = (e) => {
    if (fileInputProps.onChange) {
      fileInputProps.onChange(e.currentTarget.name, e.currentTarget.files[0]);
    }
  };

  if (inputProps && inputProps.type && inputProps.type === "file") {
    inputProps.type = "text";
  }
  let buttonStart;
  let buttonEnd;
  if (startButton) {
    buttonStart = (
      <Button size="sm" disabled={disabled} {...startButton.buttonProps}>
        {startButton.icon !== undefined ? startButton.icon : null}
        {startButton.text !== undefined ? startButton.text : null}
      </Button>
    );
  }
  if (endButton) {
    buttonEnd = (
      <Button size="sm" disabled={disabled} {...endButton.buttonProps}>
        {endButton.icon !== undefined ? endButton.icon : null}
        {endButton.text !== undefined ? endButton.text : null}
      </Button>
    );
  }
  return (
    <div className={classes.inputFileWrapper}>
      <input
        {...fileInputProps}
        type="file"
        className={classes.inputFile}
        multiple={multiple}
        ref={hiddenFile}
        onChange={addFile}
        disabled={disabled}
      />
      <CustomInput
        id={id}
        formControlProps={{
          ...formControlProps,
        }}
        inputProps={{
          ...inputProps,
          onClick: onFocus,
          value,
          endadornment: buttonEnd,
          startadornment: buttonStart,
          disabled,
        }}
        error={error}
      />
    </div>
  );
};

CustomFileInput.defaultProps = {
  multiple: false,
  disabled: false,
  error: false,
};

CustomFileInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  endButton: PropTypes.object,
  error: PropTypes.bool,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool,
  fileInputProps: PropTypes.object,
  disabled: PropTypes.bool,
};

export default CustomFileInput;
