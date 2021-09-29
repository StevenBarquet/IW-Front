const style = {
  footer: {
    "& span": {
      color: "#2e7b69",
      fontWeight: "700",
    },
    "& ul": {
      marginTop: "16px",
      li: {
        display: "inline-block",
      },
    },
    "& p": {
      marginTop: "16px",
      color: "#2e7b69",
      fontWeight: "700",
      "& small": {
        display: "block",
      },
    },
    "& ul:not($socialButtons) li a": {
      color: "#111b2e",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "0.75rem",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    "& small": {
      fontSize: "75%",
      color: "#111B2E",
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none",
    },
  },
  pullCenter: {
    display: "inline-block",
    float: "none",
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important",
      },
    },
  },
  socialButtons: {
    "& li": {
      display: "inline-block",
    },
  },
  copyRight: {
    padding: "15px 0px",
  },
};

export default style;
