// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/technology-consulting/Header";
import TaskOptimization from "page-sections/technology-consulting/TaskOptimization";
import OfferGuarantees from "page-sections/technology-consulting/OfferGuarantees";
import ConsultingOptions from "page-sections/technology-consulting/ConsultingOptions";
import SuccessStories from "page-sections/technology-consulting/SuccessStories";

// styles
import technologyConsultingStyle from "assets/jss/technologyConsultingStyle";

const useStyles = makeStyles(technologyConsultingStyle);

const TechnologyConsulting = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TaskOptimization />
        <OfferGuarantees />
        <ConsultingOptions />
        <SuccessStories />
      </main>
    </>
  );
};

export default withLayout(TechnologyConsulting);
