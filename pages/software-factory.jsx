// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/software-factory/Header";
import TimeMarket from "page-sections/software-factory/TimeMarket";
import FactoryServices from "page-sections/software-factory/FactoryServices";
import Benefits from "page-sections/software-factory/Benefits";
import Deliverables from "page-sections/software-factory/Deliverables";
import DigitalServices from "page-sections/software-factory/DigitalServices";

// styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const useStyles = makeStyles(softwareFactoryStyle);

const SoftwareFactory = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TimeMarket />
        <FactoryServices />
        <Benefits />
        <Deliverables />
        <DigitalServices />
      </main>
    </>
  );
};

export default withLayout(SoftwareFactory);
