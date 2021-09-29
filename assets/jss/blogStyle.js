import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  floatRight,
  textCenter,
  cardTitle,
  whiteColor,
  mlAuto,
  mrAuto,
  title,
  coloredShadow,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const blogStyle = () => ({
  main,
  mainRaised,
  section,
  mlAuto,
  mrAuto,
  title,
  sectionWithBackgroundColor,
  floatRight,
  textCenter,
  cardTitle: {
    ...cardTitle,
    fontSize: "1.5rem",
  },
  coloredShadow,
  captionContainer: {
    ...captionContainer,
    left: "45%",
    top: "50%",
    "@media (max-width: 1024px)": {
      left: "37% !important",
      top: "60% !important",
    },
    "@media (max-width: 736px)": {
      left: "45% !important",
      top: "90% !important",
    },
  },
  textOverlay: {
    ...textOverlay,
    "& p": {
      ...textCenter,
      fontSize: "2.8rem",
      color: whiteColor,
    },
    ...textCenter,
    color: whiteColor,
  },
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  cardCategory: {
    fontSize: "1rem !important",
    color: "#3DB49E",
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0",
    },
  },
  redes: {
    "& ul": {
      padding: 0,
    },
    "& a": {
      color: "#166F5E",
    },
    "& span": {
      color: "#166F5E",
      fontWeight: "700",
    },
    "& ul:not($socialButtons) li a": {
      color: "#111b2e",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "0.75rem",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    "& small": {
      fontSize: "75%",
      color: "#111B2E",
    },
  },
  socialButtons: {
    "& li": {
      display: "inline-block",
    },
  },
  margin5rem: {
    marginBottom: "5rem",
  },
  marginTop5rem: {
    marginTop: "5rem",
  },
  imageArticle: {
    "@media (max-width: 736px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  date: {
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "9px",
    left: "32px",
    textTransform: "uppercase",
  },
  titleArticle: {
    fontWeight: 600,
    color: "#21646D",
    fontSize: "2rem",
  },
  constentsArticle: {
    "& h1": {
      color: "#383838",
      fontSize: "2.5rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      fontWeight: "bold",
      letterSpacing: 0,
      lineHeight: "50px",
    },
    "& h2": {
      color: "#111B2E",
      fontSize: "1.75rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      letterSpacing: 0,
      lineHeight: "38px",
    },
    "& h3": {
      color: "#111B2E",
      fontSize: "1.5rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      letterSpacing: 0,
      lineHeight: "34px",
    },
    "& h4": {
      color: "#111B2E",
      fontSize: "1.125rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      fontWeight: 600,
      letterSpacing: 0,
    },
    "& h5": {
      color: "#111B2E",
      fontSize: "1rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      fontWeight: 600,
      letterSpacing: 0,
    },
    "& h6": {
      color: "#111B2E",
      fontSize: "1rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      fontStyle: "italic",
      fontWeight: 500,
    },
    "& p": {
      color: "#111B2E",
      fontSize: "1rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
      letterSpacing: 0,
      lineHeight: "30px",
    },
    "& a": {
      fontFamily: `"Raleway", "Times New Roman", serif`,
      fontSize: "1.5rem",
      fontStyle: "italic",
      fontWeight: "bold",
      letterSpacing: 0,
      lineHeight: "30px",
      textAlign: "center",
    },
    "& ul": {
      "&li": {
        fontFamily: `"Raleway", "Times New Roman", serif`,
        opacity: 0.8,
        color: "#111B2E",
        fontSize: "16px",
        letterSpacing: 0,
        lineHeight: "40px",
      },
    },
    "@media (max-width: 1024px)": {
      "& h1": {
        fontSize: "2rem",
      },
      "& h2": {
        fontSize: "1.7rem",
      },
      "& img": {
        width: "87%",
      },
    },
  },
});

export default blogStyle;
