// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// sections
import Header from "page-sections/home/Header";
import SectionAboutUs from "page-sections/home/AboutUs";
import SectionExperience from "page-sections/home/Experience";
import TechnologyImplementation from "page-sections/home/TechnologyImplementation";
import SectionBusinessPartners from "page-sections/home/BusinessPartners";
import SectionTheyTrust from "page-sections/home/TheyTrust";

// apollo
import { initializeApollo } from "libs/apollo";

// gql
import { HOME_HEADER_QUERY, HOME_ABOUT_US_QUERY } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionAboutUs />
        <SectionExperience />
        <TechnologyImplementation />
        <SectionBusinessPartners />
        <SectionTheyTrust />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOME_HEADER_QUERY,
  });

  await apolloClient.query({
    query: HOME_ABOUT_US_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default withLayout(HomePage);
