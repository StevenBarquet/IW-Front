/* eslint-disable no-param-reassign */

// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################

const hexToRgb = (input) => {
  input += "";
  input = input.replace("#", "");
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    const first = input[0];
    const second = input[1];
    const last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(
    last,
    16
  )}`;
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const primaryColor = ["#3DB49E", "#55C098", "#6ECB97"];
const secondaryColor = ["#fafafa", "#F4F3ED"];
const warningColor = ["#F09F54", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#D9373E", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const grayColor = [
  "#999",
  "#3C4858",
  "#eee",
  "#343434",
  "#585858",
  "#232323",
  "#ddd",
  "#6c757d",
  "#333",
  "#212121",
  "#777",
  "#D2D2D2",
  "#AAA",
  "#495057",
  "#e5e5e5",
  "#555",
];

const greenColor = ["#21646D"];

const whiteColor = "#FFF";
const blackColor = "#000";
const pinterestColor = "#cc2127";
const behanceColor = "#474D56";
const orangeColor = "#B95900";
const dribbbleColor = "#ea4c89";

const valenciaColor = "#D9373E";
const pampasColor = "#F4F3ED";
const mineShaftColor = "#383838";
const bigStoneColor = "#111B2E";
const blackcolor = "#373736";

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: `0 1px 4px 0 rgba(${hexToRgb(blackColor)}, 0.14)`,
  borderRadius: "3px",
  color: `rgba(${hexToRgb(blackColor)}, 0.87)`,
  background: whiteColor,
};

const defaultFont = {
  fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

const boxShadow = {
  boxShadow: `0 10px 30px -12px rgba(${hexToRgb(
    blackColor
  )}, 0.42), 0 4px 25px 0px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
};

const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
    primaryColor[0]
  )}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(primaryColor[0])}, 0.2)`,
};

const successBoxShadow = {
  boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
    successColor[0]
  )}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(successColor[0])}, 0.2)`,
};

const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
    warningColor[0]
  )}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(warningColor[0])}, 0.2)`,
};

const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
    dangerColor[0]
  )}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(dangerColor[0])}, 0.2)`,
};

const warningCardHeader = {
  color: whiteColor,
  background: `linear-gradient(60deg, ${warningColor[1]}, ${warningColor[2]})`,
  ...warningBoxShadow,
};

const successCardHeader = {
  color: whiteColor,
  background: `linear-gradient(60deg, ${successColor[1]}, ${successColor[2]})`,
  ...successBoxShadow,
};

const dangerCardHeader = {
  color: whiteColor,
  background: `linear-gradient(60deg, ${dangerColor[1]}, ${dangerColor[2]})`,
  ...dangerBoxShadow,
};

const primaryCardHeader = {
  color: whiteColor,
  background: `linear-gradient(60deg, ${primaryColor[1]}, ${primaryColor[2]})`,
  ...primaryBoxShadow,
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const legend = {
  color: valenciaColor,
  textTransform: "uppercase",
  textAlign: "center !important",
  marginTop: "16px",
  letterSpacing: "0.3em !important",
};

const title = {
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "700",
  marginTop: "16px",
  marginBottom: "16px",
  minHeight: "32px",
  fontFamily: `"Raleway", "Times New Roman", serif`,
};

const subTitle = {
  color: mineShaftColor,
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "400",
  marginTop: "16px",
  marginBottom: "15px",
  minHeight: "32px",
  fontFamily: `"Raleway", "Times New Roman", serif`,
  "@media (max-width: 576px)": {
    fontSize: "1.3rem",
  },
};

const captionContainer = {
  "@media (max-width: 576px)": {
    textAlign: "center",
    position: "static",
    transform: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  left: "25%",
  transform: "translate(-25%, -50%)",
  top: "40%",
  position: "absolute",
  zIndex: "1",
};

const textOverlay = {
  width: "400px",
  "& p": {
    fontSize: "2.8rem",
    fontWeight: "100",
    clear: "both",
    display: "block",
  },
};

const cardTitle = {
  "&, & a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto",
  },
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
};

const main = {
  "@media (max-width: 576px)": {
    position: "static",
  },
  background: whiteColor,
  position: "relative",
  zIndex: "3",
};

const mainRaised = {
  "@media (max-width: 576px)": {
    margin: "0",
    boxShadow: "0px 15px 10px -15px rgba(0, 0, 0, 0.2)",
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px",
  },
  margin: "-50px 30px 0px",
  borderRadius: "10px",
  boxShadow: `0 16px 24px 2px rgba(${hexToRgb(
    blackColor
  )}, 0.14), 0 6px 30px 5px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
};

const section = {
  paddingTop: "48px",
  paddingBottom: "34px",
};

const sectionWithBackgroundColor = {
  marginLeft: "0",
  marginRight: "0",
  paddingTop: "48px",
  paddingBottom: "34px",
  backgroundColor: pampasColor,
};

const sectionDark = {
  backgroundColor: grayColor[3],
  background: `radial-gradient(ellipse at center,${grayColor[4]} 0,${grayColor[5]} 100%)`,
};

const description = {
  color: grayColor[0],
};

const mlAuto = {
  marginLeft: "auto",
};

const mrAuto = {
  marginRight: "auto",
};

const floatRight = {
  float: "right",
};

const textCenter = {
  textAlign: "center",
};

const centerImage = {
  display: "block",
  marginLeft: "auto !important",
  marginRight: "auto !important",
};

const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px",
};

const divider = {
  borderTop: "10px solid #00C7B1",
  marginTop: "-1.2rem",
  marginBottom: "2rem",
};

const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important",
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0",
};

export {
  // variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  orangeColor,
  successColor,
  grayColor,
  greenColor,
  whiteColor,
  blackColor,
  pinterestColor,
  behanceColor,
  dribbbleColor,
  valenciaColor,
  blackcolor,
  pampasColor,
  bigStoneColor,
  primaryBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  primaryCardHeader,
  cardHeader,
  title,
  subTitle,
  captionContainer,
  textOverlay,
  cardTitle,
  description,
  cardSubtitle,
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  sectionDark,
  divider,
  mlAuto,
  mrAuto,
  floatRight,
  textCenter,
  centerImage,
  btnLink,
  coloredShadow,
  hexToRgb,
  legend,
};
