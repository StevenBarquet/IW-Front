// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// context
import { useSettings } from "context/Settings";

// components
import Parallax from "components/Parallax/Parallax";
import RenderHTML from "components/HTML/RenderHTML";

// gql
import { VACANCIES_HEADER_QUERY } from "gql/queries/vacancies";

import vacanciesStyle from "assets/jss/vacanciesStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(vacanciesStyle);

const Header = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(VACANCIES_HEADER_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.vacanciesIw) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    vacanciesIw: { header },
  } = data;

  const Caption = () => (
    <div className={classes.captionContainer}>
      <RenderHTML
        html={header[`title${language}`]}
        className={classes.textOverlay}
      />
    </div>
  );

  return (
    <header id="header">
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Parallax image={`${apiUrl}${header.small_image.url}`} small />
      </Hidden>
      <Hidden only={["xs", "md", "lg", "xl"]}>
        <Parallax image={`${apiUrl}${header.medium_image.url}`} small />
      </Hidden>
      <Hidden only={["xs", "sm"]}>
        <Parallax image={`${apiUrl}${header.large_image.url}`} small />
      </Hidden>
      <Caption />
    </header>
  );
};

export default Header;
