// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ScrollTop from "components/ScrollTop/ScrollTop";

// images
import Logo from "assets/img/logo.svg";

// jss styles
import styles from "assets/jss/footerStyle";

const useStyles = makeStyles(styles);

const withLayout = (Page) => {
  return () => {
    const classes = useStyles();
    return (
      <>
        <Header
          color="white"
          brand={<Logo />}
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
        />
        <div style={{ marginTop: "60px" }}>
          <Page />
          <ScrollTop />
        </div>
        <Footer
          big
          content={( // eslint-disable-line prettier/prettier
            <div>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://interware.com.mx"
                  rel="noreferrer"
                  target="_blank"
                >
                  InterWare de México
                </a>{" "}
                Todos los derechos reservados.
              </div>
            </div>
          )} // eslint-disable-line prettier/prettier
        >
          <div className={classes.footer}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={3} md={3} lg={3}>
                <span>Nuestros servicios</span>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#tiscareno">Consultoría</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Desarrollo</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Fábrica de Software</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Capacitación</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Servicios Especializados</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Head Hunting</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Automatización</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Middleware</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3} lg={3}>
                <span>Links de interés</span>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#tiscareno">InterWare Blog</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Trabaja con Nosotros</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3} lg={3}>
                <span>Contáctanos</span>
                <p>
                  Oficinas CDMX
                  <small>
                    Av. Insurgentes Sur 1602, Crédito Constructor, Benito
                    Juárez, 03940 Ciudad de México
                  </small>
                </p>
                <span>contacto@interware.com.mx</span>
              </GridItem>
              <GridItem xs={12} sm={3} md={3} lg={3}>
                <span>Síguenos en:</span>
                <ul className={classes.socialButtons}>
                  <li>
                    <span className="fa-stack" style={{ verticalAlign: "top" }}>
                      <i
                        className="far fa-circle fa-stack-2x"
                        aria-hidden="true"
                      />
                      <i
                        className="fab fa-linkedin-in fa-stack-1x"
                        aria-hidden="true"
                      />
                    </span>
                  </li>
                  <li>
                    <span className="fa-stack" style={{ verticalAlign: "top" }}>
                      <i
                        className="far fa-circle fa-stack-2x"
                        aria-hidden="true"
                      />
                      <i
                        className="fab fa-facebook-f fa-stack-1x"
                        aria-hidden="true"
                      />
                    </span>
                  </li>
                </ul>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#tiscareno">Términos y condiciones</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Política de Privacidad</a>
                  </li>
                  <li>
                    <a href="#tiscareno">Mapa del Sitio</a>
                  </li>
                </ul>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
      </>
    );
  };
};

export default withLayout;
