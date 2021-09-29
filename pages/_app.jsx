// Dependencies
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";

import { useApollo } from "libs/apollo";

// loader component
import PageChange from "components/PageChange/PageChange";

// context
import { SettingsProvider } from "context/Settings";

// Styles
import "assets/scss/nextjs-material-kit-pro.scss";
import "animate.css/animate.min.css";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>InterWare de México - Soluciones tecnológicas</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <SettingsProvider>
          <Component {...pageProps} />
        </SettingsProvider>
      </ApolloProvider>
    </>
  );
};

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialApolloState: PropTypes.shape({}),
  }).isRequired,
};

export default App;
