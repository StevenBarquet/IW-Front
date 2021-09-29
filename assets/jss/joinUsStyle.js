import {
  main,
  mainRaised,
  section,
  textCenter,
  title,
  divider,
  mlAuto,
  mrAuto,
  floatRight,
  textOverlay,
  captionContainer,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const joinUsStyle = () => ({
  main,
  mainRaised,
  section,
  textCenter,
  floatRight,
  divider,
  mlAuto,
  mrAuto,
  sectionWithBackgroundColor,
  title,
  captionContainer: {
    ...captionContainer,
    top: "36%",
    left: "18%",
    "@media (max-width: 1024px)": {
      top: "17%",
      left: "19%",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "600px",
    textAlign: "center",
    "& p": {
      fontSize: "2.8rem",
      fontWeight: "100",
    },
    "@media (max-width: 1024px)": {
      width: "400px",
      "& p": {
        fontSize: "1.9rem",
      },
      "& h1": {
        fontSize: "2rem",
      },
    },
    "@media (max-width: 736px)": {
      width: "450px",
      marginTop: "3rem",
      minHeight: "32px",
    },
  },
  introductoryText: {
    "& p": {
      color: "#15695b",
      fontWeight: 600,
      fontSize: "22px",
    },
    "& h2": {
      fontSize: "22px",
      margin: "0px",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1rem",
      },
      "& h2": {
        fontSize: "1rem",
      },
    },
  },
  sectionBackgroundColor: {
    "@media (max-width: 736px)": {
      ...sectionWithBackgroundColor,
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
    width: "420px",
  },
  dividerTags: {
    ...divider,
    borderTop: "1px solid #21646D",
    marginTop: "0.2rem !important",
  },
  lengthVacantText: {
    ...floatRight,
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "10px",
  },
  titleVacante: {
    "@media (max-width: 1024px)": {
      fontSize: "1.3rem",
    },
    color: "#225E66",
    fontWeight: 600,
    fontSize: "1.8rem",
    marginBottom: "19px",
  },
  contactText: {
    "@media (max-width: 1024px)": {
      fontSize: "0.9rem",
    },
    color: "#15695b",
    fontWeight: "bold",
    marginBottom: "5rem",
  },
  dividerGray: {
    ...divider,
    "@media (max-width: 1024px)": {
      borderTop: "8px solid rgba(17,27,46,0.6)",
    },
    borderTop: "10px solid rgba(17,27,46,0.6)",
  },
  displayNone: {
    "@media (max-width: 736px)": {
      display: "none",
    },
  },
  tagsButton: {
    outline: 0,
    color: "#262626",
    fontFamily: `"Raleway", "Times New Roman", serif`,
    backgroundPosition: "center center",
    border: "none",
    fontWeight: "600",
    paddingRight: "1rem",
    flexBasis: "20%",
    backgroundColor: "Transparent",
  },
  removeIcon: {
    color: "#525558",
    position: "absolute",
    marginLeft: "7px",
    bottom: "2px",
    fontSize: "17px",
    borderRadius: "8px",
    background: "rgb(17 46 17 / 14%)",
  },
});

export default joinUsStyle;
