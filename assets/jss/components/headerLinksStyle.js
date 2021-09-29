/* eslint-disable prefer-template */
import {
  grayColor,
  whiteColor,
  bigStoneColor,
  valenciaColor,
  mlAuto,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro";

import tooltip from "assets/jss/components/tooltipsStyle";

const headerLinksStyle = (theme) => ({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll",
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: grayColor[14],
        },
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: bigStoneColor,
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "none",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "& span": {
      color: bigStoneColor,
    },
    "& span:hover,&:focus": {
      color: valenciaColor,
    },
    "&:hover,&:focus": {
      color: valenciaColor,
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px",
    },
  },
  selectedNavLink: {
    color: valenciaColor,
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px",
    },
    "& svg": {
      marginRight: "0px",
    },
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "none",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)",
    },
  },
  dropdownLink: {
    fontWeight: "700",
    color: bigStoneColor,
    "&:hover,&:focus": {
      color: valenciaColor,
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto",
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
  },
  mlAuto,
});

export default headerLinksStyle;
