import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Badge from "components/Badge/Badge";

// context
import { useSettings } from "context/Settings";

import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const SectionArticleInfo = ({ article }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();
  const languageDate = language === "_en" ? "en" : "es";
  return (
    <div id="section-articleInfo" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
              <div className={classes.blogTags}>
                Tags:{" "}
                {article.tags.map((tag) => (
                  <Badge key={tag.id} color="primary">
                    <Link href="/blog">
                      <span className={classes.tag}>
                        {tag[`name${language}`]}
                      </span>
                    </Link>
                  </Badge>
                ))}
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <div>
                <p className={classes.date}>
                  {moment(article.created_at)
                    .locale(languageDate)
                    .format("MMMM/YYYY")}
                </p>
              </div>
            </GridItem>
          </GridContainer>
          <hr />
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionArticleInfo.defaultProps = {
  article: {
    tags: [],
    created_at: "",
  },
};

SectionArticleInfo.propTypes = {
  article: PropTypes.shape({
    created_at: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default SectionArticleInfo;
