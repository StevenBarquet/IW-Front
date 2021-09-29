const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px",
    "@media (max-width: 830px)": {
      height: "0vh",
      minHeight: "24vh",
      maxHeight: "20px",
    },
  },
};

export default parallaxStyle;
