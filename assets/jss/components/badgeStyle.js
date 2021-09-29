import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  grayColor,
} from "assets/jss/nextjs-material-kit-pro";

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "600",
    cursor: "default",
    lineHeight: "1",
    color: "#262626",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
  },
  primary: {
    backgroundColor: primaryColor[0],
  },
  warning: {
    backgroundColor: warningColor[0],
  },
  danger: {
    backgroundColor: dangerColor[0],
  },
  success: {
    backgroundColor: successColor[0],
  },
  gray: {
    backgroundColor: grayColor[7],
  },
};

export default badgeStyle;
