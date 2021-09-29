// Dependencies
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_CATEGORIES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const Menu = ({ articleCategory, categoryID, btnHome }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(BLOG_CATEGORIES_QUERY);
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

  if (!data.categories) {
    return <span>¡Revisar CMS!</span>;
  }

  const { categories } = data;

  return (
    <div id="section-menu" className={classes.margin5rem}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
          <Button
            onClick={() => articleCategory("HOME", false)}
            link
            disabled={btnHome}
          >
            {!language ? "Inicio" : "Home"}
          </Button>
          <Button
            onClick={() => articleCategory("ALL", false)}
            link
            disabled={!categoryID && !btnHome}
          >
            {!language ? "Todos" : "All"}
          </Button>
          {categories &&
            categories.map((category) => {
              return (
                <span key={category.id}>
                  <Button
                    onClick={() => articleCategory(category, false)}
                    link
                    disabled={categoryID === category.id && !btnHome}
                  >
                    {category[`name${language}`]}
                  </Button>
                </span>
              );
            })}
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

Menu.defaultProps = {
  categoryID: "",
  btnHome: true,
};

Menu.propTypes = {
  categoryID: PropTypes.string,
  btnHome: PropTypes.bool,
  articleCategory: PropTypes.func.isRequired,
};

export default Menu;
