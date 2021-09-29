// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
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

const SectionInterested = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      sort: "created_at:desc",
      limit: 3,
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
    <div
      id="section-SectionInterested"
      className={`${classes.section} ${classes.margin5rem}`}
    >
      <GridContainer justify="center">
        {articles &&
          articles.map((article) => (
            <GridItem key={article.id} xs={12} sm={5} md={3} lg={3} xl={2}>
              <Card plain blog>
                <CardHeader image plain>
                  <img
                    style={{
                      height: "180px",
                      width: "100%",
                      display: "block",
                    }}
                    src={`${apiUrl}${article.seo.shareImage.url}`}
                    alt={article.seo.shareImage.alternativeText}
                  />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url(" + `${apiUrl}${article.seo.shareImage.url}` + ")",
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h2 className={classes.cardTitle}>
                    <a href="#pablo">{article.seo[`metaTitle${language}`]}</a>
                  </h2>
                  <RenderHTML
                    html={article.seo[`metaDescription${language}`]}
                  />
                  <Link as={`/blog/${article.id}`} href="/blog/[id]">
                    <a href="#pablo">Leer más…</a>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
};

export default SectionInterested;
