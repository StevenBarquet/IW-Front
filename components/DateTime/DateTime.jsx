/* eslint-disable func-names */
// Dependencies
import PropTypes from "prop-types";
import Datetime from "react-datetime";

// @material-ui/icons
import EventIcon from "@material-ui/icons/Event";
import AlarmRoundedIcon from "@material-ui/icons/AlarmRounded";

// core components
import CustomInput from "components/CustomInput/CustomInput";

const CustomDateTime = ({
  id,
  day,
  name,
  value,
  onChange,
  placeholder,
  isInvalid,
  timeFormat,
  disabled,
  labelText,
  isValidDate,
  formikWrapper,
}) => {
  const renderInput = (props) => {
    const yesterday = Datetime.moment().subtract(day, "day");
    const valid = function (current) {
      return current.isAfter(yesterday);
    };

    const endAdornment = () => {
      if (timeFormat) {
        return (
          <AlarmRoundedIcon style={{ color: disabled ? "#777" : "#3DB49E" }} />
        );
      }
      return <EventIcon style={{ color: disabled ? "#777" : "#3DB49E" }} />;
    };
    return (
      <CustomInput
        id={id}
        labelText={labelText}
        disabled={disabled}
        inputProps={{
          ...props,
          placeholder,
          disabled,
          endadornment: endAdornment(),
        }}
        formControlProps={{
          fullWidth: true,
        }}
        error={isInvalid}
        formikWrapper={formikWrapper}
        isValidDate={isValidDate ? valid : false}
      />
    );
  };
  return (
    <>
      <Datetime
        value={value}
        onChange={(e) => onChange({ target: { name, value: e } })}
        timeFormat={timeFormat}
        renderInput={renderInput}
        closeOnSelect
        dateFormat={!timeFormat}
        disabled={disabled}
      />
    </>
  );
};

CustomDateTime.defaultProps = {
  id: "",
  day: null,
  name: "",
  value: "",
  labelText: "",
  onChange: () => {},
  placeholder: "",
  isInvalid: false,
  timeFormat: false,
  disabled: false,
  formikWrapper: false,
  isValidDate: false,
};

CustomDateTime.propTypes = {
  id: PropTypes.string,
  day: PropTypes.number,
  name: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValidDate: PropTypes.bool,
  timeFormat: PropTypes.bool,
  disabled: PropTypes.bool,
  formikWrapper: PropTypes.bool,
};

export default CustomDateTime;
