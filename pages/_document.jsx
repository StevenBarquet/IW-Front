// Dependencies
import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ServerStyleSheets } from "@material-ui/styles";

const webDescription =
  "En InterWare creemos que podemos hacer un mundo empresarial más eficaz e inteligente por medio de la tecnología. Generamos proyectos TI que te ayuden a aumentar el valor de tu negocio buscando y encontrando la satisfacción total de sus clientes.";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="application-name"
            content="InterWare de México S.A. de C.V."
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="InterWare de México S.A. de C.V."
          />
          <meta name="description" content={webDescription} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          /> */}
          <meta name="msapplication-TileColor" content="#00C7B1" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#00C7B1" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#00C7B1"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="author" content="InterWare de México" />

          {/* Fonts and iconography */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <script
            src="https://kit.fontawesome.com/ccaa22cd11.js"
            crossOrigin="anonymous"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.interware.com.mx" />
          <meta
            name="twitter:title"
            content="InterWare de México S.A.de C.V."
          />
          <meta name="twitter:description" content={webDescription} />
          <meta
            name="twitter:image"
            content="https://www.interware.com.mx/icons/android-chrome-192x192.png"
          />
          <meta
            name="twitter:creator"
            content="israel.lopez@interware.com.mx"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="InterWare de México S.A. de C.V."
          />
          <meta property="og:description" content={webDescription} />
          <meta
            property="og:site_name"
            content="InterWare de México S.A. de C.V."
          />
          <meta
            property="og:url"
            content="https://www.interware.com.mx/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          {/* script del comentarios Facebook */}
          <div id="fb-root" />
          <script
            async
            defer
            // Crossorigin="anonymous"
            src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0"
            nonce="mPqzJT8d"
          />
          <div id="fb-root" />
          {/* script del compartir Linkedin */}
          <script
            async
            src="https://static.addtoany.com/menu/page.js"
            lang="es_Es"
          />
          {/* script del compartir Facebook */}
          <div id="fb-root" />
          <script
            async
            defer
            // Crossorigin="anonymous"
            src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0"
            nonce="bFoqUfk4"
          />
          <div id="page-transition" />
          <Main />
          <NextScript />
          {/* <!-- Start of HubSpot Embed Code --> */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/3443027.js"
          />
          {/* <!-- End of HubSpot Embed Code --> */}
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
