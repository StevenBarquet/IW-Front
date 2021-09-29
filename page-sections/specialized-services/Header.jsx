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
import { SPECIALIZED_SERVICES_HEADER_QUERY } from "gql/queries/specialized-services";

import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(specializedServicesStyle);

const Header = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SPECIALIZED_SERVICES_HEADER_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.specializedService) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    specializedService: { header },
  } = data;

  const Caption = () => (
    <div className={classes.captionContainer}>
      <RenderHTML
        html={header[`caption${language}`]}
        className={classes.textOverlay}
      />
    </div>
  );

  return (
    <header id="header">
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Parallax
          image={`${apiUrl}${header.small_image.url}`}
          className={classes.blockedImage}
          small
        />
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
