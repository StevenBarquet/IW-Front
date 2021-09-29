import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  floatRight,
  textCenter,
  mrAuto,
  mlAuto,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const homeStyle = (theme) => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  floatRight,
  textCenter,
  mrAuto,
  mlAuto,
  carouselContainer: {
    "@media (max-width: 576px)": {
      position: "static",
      display: "flex",
      flexDirection: "column",
    },
    position: "relative",
  },
  captionContainer,
  textOverlay,
  underlinedTitleContainer: {
    "@media (max-width: 576px)": {
      width: "auto",
    },
    width: "300px",
  },
  divider: {
    borderTop: "10px solid #00C7B1",
    marginTop: "-1.2rem",
    marginBottom: "2rem",
  },
  businessListContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
      display: "block",
      alignItems: "initial",
      justifyContent: "initial",
    },
    display: "flex",
    "& div": {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  businessLinesTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#21646D",
  },
  businessFeed: {
    marginTop: "16px",
    padding: "0",
    listStyleType: "none",
    "& li": {
      paddingBottom: "10px",
      "& div": {
        display: "flex",
        "& span": {
          marginRight: "16px",
          fontSize: "1.5rem",
          color: "#2e7b69",
        },
        "& a": {
          fontSize: "1.125rem",
          color: "#21646D",
        },
        "& a:hover": {
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
    },
  },
  technologyImplementationTitle: {
    opacity: 0.7,
    color: "#21646D",
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: "40px",
    textAlign: "center",
    "@media (max-width: 736px)": {
      marginBottom: "5rem",
      fontSize: "22px",
    },
  },
  marginTopDefault: {
    marginTop: "4rem",
  },
  technologyImplementation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default homeStyle;
