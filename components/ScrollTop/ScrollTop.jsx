import { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// core-components
import Button from "components/CustomButtons/Button";

const sectionScroll = {
  scrollTopStyle: {
    display: "none",
    cursor: "pointer",
    position: "fixed",
    top: "50%",
    right: "0",
    left: "4",
    marginRight: "2px",
    zIndex: 2,
    backgroundColor: "Transparent",
    "@media (max-width: 1024px)": {
      display: "block",
      zIndex: 3,
    },
  },
  btnScroll: {
    borderRadius: "30px",
    height: "58px",
    width: "58px",
    border: "none",
    background: "#3db49e69 !important",
  },
  diplayNone: {
    display: "none",
  },
};

const useStyles = makeStyles(sectionScroll);

const ScrollTop = () => {
  const classes = useStyles();
  const [scrollNone, setScrollNone] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY <= 700) {
        setScrollNone(true);
      } else {
        setScrollNone(false);
      }
    };
  }, []);

  const irArriba = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={scrollNone ? classes.diplayNone : classes.scrollTopStyle}>
      <Button color="primary" className={classes.btnScroll} onClick={irArriba}>
        <ArrowUpwardIcon
          fontSize="large"
          style={{ color: "#262626", fontSize: 40 }}
        />
      </Button>
    </div>
  );
};

export default ScrollTop;
