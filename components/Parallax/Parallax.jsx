// Dependencies
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import parallaxStyle from "assets/jss/parallaxStyle";

const useStyles = makeStyles(parallaxStyle);

const Parallax = (props) => {
  const windowScrollTop = 0;
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`
  );

  const resetTransform = () => {
    // eslint-disable-next-line no-shadow
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const { className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
};

Parallax.defaultProps = {
  className: "",
  style: {},
  image: "",
  small: false,
};

Parallax.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.shape({}),
  image: PropTypes.string,
  small: PropTypes.bool,
};

export default Parallax;
