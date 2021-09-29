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

const qualityAssuranceStyle = () => ({
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
    top: "35%",
    left: "15%",
    "@media (max-width: 1024px)": {
      top: "17%",
      left: "19%",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "376px",
    "@media (max-width: 736px)": {
      marginTop: "3rem",
    },
  },
});

export default qualityAssuranceStyle;
