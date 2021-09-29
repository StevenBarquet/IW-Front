import {
  whiteColor,
  blackColor,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro";

const partnersSection = {
  rotatingCardContainer: {
    perspective: "800px",
    "& $cardRotate $back": {
      transform: "rotateY(180deg)",
      zIndex: "5",
      textAlign: "center",
      width: "100%",
      height: "100%",
      paddingBottom: "0.5rem",
    },
    "&:not($manualRotate):hover $cardRotate": {
      transform: "rotateY(180deg)",
    },
    "&$manualRotate$activateRotate $cardRotate": {
      transform: "rotateY(180deg)",
    },
    "& $cardRotate $front": {
      zIndex: "2",
      position: "relative",
    },
    "& $cardRotate $front, & $cardRotate $back": {
      backfaceVisibility: "hidden",
      boxShadow:
        // eslint-disable-next-line prefer-template
        "0 2px 2px 0 rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 1px 5px 0 rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)",
      position: "absolute",
      backgroundColor: whiteColor,
      borderRadius: "6px",
      top: "0",
      left: "0",
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "center",
      MsFlexLinePack: "center",
      alignContent: "center",
      display: "flex",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column",
    },
  },
  front: {},
  back: {
    color: whiteColor,
    background: "radial-gradient(circle, #21646D 0%, #0E2243 100%)",
  },
  activateRotate: {},
  manualRotate: {},
  cardRotate: {
    transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
    transformStyle: "preserve-3d",
    position: "relative",
    background: "transparent",
  },
  cardBodyRotate: {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    MsFlexLinePack: "center",
    alignContent: "center",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    flexDirection: "column",
  },
  title: {
    paddingTop: "16px",
    textAlign: "center",
  },
  cardBodyContent: {
    padding: "2rem 0",
    fontSize: "20px",
    textAlign: "center",
    "& span": {
      opacity: 0.8,
      color: "#21646D",
      fontWeight: 700,
      lineHeight: "24px",
    },
    "& p": {
      fontSize: "20px",
    },
  },
  backContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      fontWeight: "700",
      marginBottom: "15px",
    },
  },
  backSolutionsList: {
    "& div": {
      display: "flex",
      overflow: "hidden",
      paddingBottom: "6px",
      maxWidth: 350,
      paddingLeft: "16px",
      "& span": {
        marginRight: "16px",
        color: "#fff",
      },
      "& > p": {
        color: "#fff",
      },
    },
  },
  backFooterContainer: {
    width: "100%",
    "& button": {
      backgroundColor: "rgba(17,27,46,0.6)",
      display: "block",
      margin: "auto",
    },
  },
  floatRight: {
    float: "right",
  },
};

export default partnersSection;
