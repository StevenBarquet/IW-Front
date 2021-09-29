import {
  main,
  mainRaised,
  section,
  title,
  sectionWithBackgroundColor,
  captionContainer,
  textOverlay,
  textCenter,
  divider,
} from "assets/jss/nextjs-material-kit-pro";

const specializedServicesStyle = () => ({
  section,
  main,
  textCenter,
  mainRaised,
  title,
  divider,
  sectionWithBackgroundColor,
  captionContainer: {
    ...captionContainer,
    "@media (max-width: 1024px)": {
      top: "17%",
      left: "19%",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "550px",
    "@media (max-width: 1024px)": {
      width: "400px",
      "& p": {
        fontSize: "1.9rem",
      },
    },
    "@media (max-width: 736px)": {
      margin: "3rem 0px",
      width: "450px",
      "& h1": {
        fontSize: "2rem",
      },
    },
  },
  introductoryText: {
    ...textCenter,
    marginTop: "3rem",
    "& p": {
      fontSize: "1.8rem",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1.4rem",
      },
    },
  },
  margin8rem: {
    marginTop: "6rem",
    "@media (max-width: 736px)": {
      marginTop: "3rem",
    },
  },
  animationBounceInRight: {
    animation: "bounceInRight",
    animationDuration: "3s",
  },
});

export default specializedServicesStyle;
