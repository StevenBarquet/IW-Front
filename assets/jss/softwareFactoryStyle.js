import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const softwareFactoryStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  captionContainer: {
    ...captionContainer,
    top: "34%",
    left: "21%",
    "@media (max-width: 1024px)": {
      top: "17%",
      left: "19%",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "372px",
    "@media (max-width: 736px)": {
      marginTop: "3rem",
    },
  },
  swDescription: {
    ...textCenter,
    margin: "4rem 0rem",
    minHeight: "32px",
    color: "#383838",
    "& p": {
      fontSize: "1.8rem",
      color: "#383838",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1.3rem",
        color: "#383838",
        minHeight: "32px",
      },
    },
  },
  titleContainer: {
    "@media (max-width: 1024px)": {
      width: "300px",
      "& h1": {
        fontSize: "2.2rem",
      },
    },
    "@media (max-width: 576px)": {
      width: "auto",
      "& h1": {
        textAlign: "center",
      },
    },
    width: "462px",
  },
  marginTop6rem: {
    marginTop: "6rem",
    "@media (max-width: 1024px)": {
      marginTop: "3rem",
    },
  },
});

export default softwareFactoryStyle;
