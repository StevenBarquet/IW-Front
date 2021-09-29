/* eslint-disable prefer-template */
import {
  container,
  primaryColor,
  grayColor,
} from "assets/jss/nextjs-material-kit-pro";

const footerStyle = {
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block",
      },
    },
    "& i": {
      fontSize: "20px",
    },
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none",
    },
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Raleway,Times New Roman,serif",
      marginBottom: "16px",
    },
    "& p": {
      color: grayColor[0],
    },
  },
  content: {
    textAlign: "left",
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative",
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Raleway,Times New Roman,serif",
  },
  pullCenter: {
    display: "inline-block",
    float: "none",
  },
  clearFix: {
    clear: "both",
  },
};
export default footerStyle;
