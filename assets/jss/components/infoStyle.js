import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  grayColor,
  title,
} from "assets/jss/nextjs-material-kit-pro";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px",
    "@media (max-width: 736px)": {
      padding: "93px 0 30px",
    },
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px",
  },
  primary: {
    color: primaryColor[0],
  },
  warning: {
    color: warningColor[0],
  },
  danger: {
    color: dangerColor[0],
  },
  success: {
    color: successColor[0],
  },
  gray: {
    color: grayColor[0],
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem",
  },
  descriptionWrapper: {
    color: "#3D3D3D",
    overflow: "hidden",
  },
  title: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    fontSize: "1.3rem",
  },
  description: {
    color: "#3D3D3D",
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: "#3D3D3D",
      fontSize: "14px",
    },
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
};

export default infoStyle;
