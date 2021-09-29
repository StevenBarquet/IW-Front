import React from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(blogStyle);

const SectionArticleText = ({ article }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();

  return (
    <div id="section-articleText">
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <RenderHTML
            className={classes.constentsArticle}
            html={article[`content${language}`]}
          />
          <br />
          <h4 className={classes.titleArticle}>
            {language === "_en" ? "Interware Expert" : "Experto Interware"}
          </h4>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img
                    src={`${apiUrl}${article.user.shereImage.url}`}
                    alt={article.user.shereImage.alternativeText}
                  />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <p className={classes.cardTitle}>{article.user.name}</p>
                <RenderHTML
                  className={classes.constents}
                  html={article.user[`description${language}`]}
                />
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionArticleText.defaultProps = {
  article: {
    content: "",
    user: {
      name: "",
      description: "",
      linkedin: "",
      shereImage: {
        url: "",
        alternativeText: "",
      },
    },
  },
};

SectionArticleText.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      linkedin: PropTypes.string,
      shereImage: PropTypes.shape({
        url: PropTypes.string,
        alternativeText: PropTypes.string,
      }),
    }),
  }),
};

export default SectionArticleText;
