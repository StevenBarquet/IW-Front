import {
  legend,
  title,
  subTitle,
  mlAuto,
  mrAuto,
  centerImage,
} from "assets/jss/nextjs-material-kit-pro";

const sectionTitleStyle = {
  legend,
  mlAuto,
  mrAuto,
  title: {
    ...title,
    "@media (max-width: 830px)": {
      fontSize: "2.500rem",
    },
  },
  subTitle,
  subTitleColor: {
    ...subTitle,
    color: "#21646D",
  },
  animationFlipInX: {
    animation: "flipInX",
    animationDuration: "3s",
  },

  animationSlideInUp: {
    animation: "slideInUp",
    animationDuration: "3s",
  },
  centerImage,
};

export default sectionTitleStyle;
