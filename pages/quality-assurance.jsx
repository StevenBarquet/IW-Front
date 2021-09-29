// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/quality-assurance/Header";
import QADescription from "page-sections/quality-assurance/QADescription";
import QAOffer from "page-sections/quality-assurance/QAOffer";
import QAofferGuarantees from "page-sections/quality-assurance/QAofferGuarantees";
import QASuccessStories from "page-sections/quality-assurance/QASuccessStories";

// styles
import qualityAssuranceStyle from "assets/jss/qualityAssuranceStyle";

const useStyles = makeStyles(qualityAssuranceStyle);

const QualityAssurance = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <QADescription />
        <QAOffer />
        <QAofferGuarantees />
        <QASuccessStories />
      </main>
    </>
  );
};

export default withLayout(QualityAssurance);
