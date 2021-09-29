// Dependencies
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropDown from "components/CustomDropDown/CustomDropDown";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import MAIN_HEADER_QUERY from "gql/queries/header";

// jss styles
import headerLinksStyle from "assets/jss/components/headerLinksStyle";

const useStyles = makeStyles(headerLinksStyle);

const HeaderLinks = () => {
  const { loading, error, data } = useQuery(MAIN_HEADER_QUERY);
  const router = useRouter();
  const { defaultSettings, changeSettings } = useSettings();
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

  if (!data.navigationMenu) {
    return <span>¡Revisar CMS!</span>;
  }

  const { navigationMenu } = data;

  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      {navigationMenu.body.map((navigationMenuItem) => {
        if (navigationMenuItem.__typename === "ComponentPageLink") {
          return (
            <ListItem
              key={navigationMenuItem.path}
              className={classes.listItem}
            >
              <Link href={navigationMenuItem.path}>
                <a
                  className={classNames(classes.navLink, {
                    [classes.selectedNavLink]:
                      router.pathname === navigationMenuItem.path,
                  })}
                >
                  {navigationMenuItem[`label${defaultSettings.language}`]}
                </a>
              </Link>
            </ListItem>
          );
        }

        return (
          <ListItem key={navigationMenuItem.id} className={classes.listItem}>
            <CustomDropDown
              buttonText={
                navigationMenuItem[`topLabel${defaultSettings.language}`]
              }
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              navDropdown
              link
              dropdownList={navigationMenuItem.nestedLinks.map((nestedLink) => (
                <Link href={nestedLink.path}>
                  <a>{nestedLink[`label${defaultSettings.language}`]}</a>
                </Link>
              ))}
              onClick={(e) => router.push(e.props.href)}
            />
          </ListItem>
        );
      })}
      <ListItem className={classes.listItem}>
        <div>
          <Button
            onClick={() => changeSettings({ language: "" })}
            disabled={!defaultSettings.language}
            color="transparent"
            className={classes.navLink}
          >
            ES
          </Button>
          <Button
            onClick={() => changeSettings({ language: "_en" })}
            disabled={defaultSettings.language === "_en"}
            color="transparent"
            className={classes.navLink}
          >
            EN
          </Button>
        </div>
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
