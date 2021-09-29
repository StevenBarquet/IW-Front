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
  divider,
  subTitle,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const technologyConsultingStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  floatRight,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  subTitle: {
    ...subTitle,
    fontSize: "1.8rem",
    fontFamily: `"Raleway", "Times New Roman", serif`,

    "@media (max-width: 736px)": {
      fontSize: "1.5rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
    },
  },
  captionContainer: {
    ...captionContainer,
    top: "35%",
    left: "15%",
    "@media (max-width: 1024px)": {
      top: "17%",
      left: "19%",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "368px",
    "@media (max-width: 736px)": {
      marginTop: "3rem",
    },
  },
});

export default technologyConsultingStyle;
