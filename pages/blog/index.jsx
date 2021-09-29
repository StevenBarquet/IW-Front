// Dependencies
import { useState } from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// jss styles
import blogStyle from "assets/jss/blogStyle";

// sections
import Header from "page-sections/blog/Header";
import SectionPills from "page-sections/blog/SectionPills";
import SectionTeams from "page-sections/blog/SectionTeams";

const useStyles = makeStyles(blogStyle);

const HomePage = () => {
  const [categoryID, setcategoryID] = useState("");
  const [btnHome, setbtnHome] = useState(true);
  const classes = useStyles();

  const articleCategory = (categoty) => {
    if (categoty === "ALL") {
      setcategoryID("");
      setbtnHome(false);
    } else if (categoty === "HOME") {
      setbtnHome(true);
    } else {
      setcategoryID(categoty.id);
      setbtnHome(false);
    }
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills
          categoryID={categoryID}
          btnHome={btnHome}
          articleCategory={articleCategory}
        />
        <SectionTeams />
      </main>
    </>
  );
};

export default withLayout(HomePage);
