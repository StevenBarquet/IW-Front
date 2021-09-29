// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import paginationStyle from "assets/jss/components/paginationStyle";

const useStyles = makeStyles(paginationStyle);

const Pagination = (props) => {
  const { pages, color, className } = props;
  const classes = useStyles();
  const paginationClasses = classNames(classes.pagination, className);
  return (
    <ul className={paginationClasses}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.text]: true,
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            <Button
              onClick={prop.onClick}
              className={paginationLink}
              disabled={prop.disabled}
            >
              {prop.text}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

Pagination.defaultProps = {
  color: "primary",
  className: "",
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  className: PropTypes.string,
};

export default Pagination;
