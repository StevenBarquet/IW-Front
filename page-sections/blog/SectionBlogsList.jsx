// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import PropTypes from "prop-types";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_ARTICLES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const SectionBlogsList = ({ showImage, id }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { data, loading, error } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      where: showImage ? {} : { id_nin: [id] },
      sort: "created_at:desc",
      limit: showImage ? 5 : 3,
    },
  });
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

  if (!data.articles) {
    return <span>¡Revisar CMS!</span>;
  }

  const { articles } = data;

  return (
    <GridItem
      xs={12}
      sm={showImage ? 8 : 12}
      md={showImage ? 6 : 12}
      lg={showImage ? 6 : 12}
    >
      <h2 className={classes.title}>
        {language === "_en" ? "Featured" : "Destacados"}
      </h2>
      <hr />
      {articles &&
        articles.map((article) => (
          <Card key={article.id} plain blog>
            <GridContainer>
              {showImage && (
                <GridItem
                  xs={8}
                  sm={5}
                  md={3}
                  className={`${classes.imageArticle}`}
                >
                  <CardHeader image plain>
                    <img
                      src={`${apiUrl}${article.seo.shareImage.url}`}
                      alt={article.seo.shareImage.alternativeText}
                      style={{
                        height: "110px",
                        width: "100%",
                        display: "block",
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${`${apiUrl}${article.seo.shareImage.url}`})`,
                        opacity: "1",
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${`${apiUrl}${article.seo.shareImage.url}`})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
              )}
              <GridItem xs={12} sm={showImage ? 7 : 11} md={showImage ? 7 : 11}>
                <p className={classes.cardCategory}>{article.tags.name}</p>
                <h2 className={classes.cardTitle}>
                  {article.seo[`metaTitle${language}`]}
                </h2>
                <RenderHTML html={article.seo[`metaDescription${language}`]} />
                <Link as={`/blog/${article.id}`} href="/blog/[id]">
                  <a href="#interware">
                    {language === "_en" ? "Read more..." : "Leer más..."}
                  </a>
                </Link>
              </GridItem>
              <hr />
            </GridContainer>
          </Card>
        ))}
    </GridItem>
  );
};

SectionBlogsList.defaultProps = {
  showImage: false,
  id: "",
};

SectionBlogsList.propTypes = {
  showImage: PropTypes.bool,
  id: PropTypes.string,
};

export default SectionBlogsList;
