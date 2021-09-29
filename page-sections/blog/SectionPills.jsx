// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components+
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import RenderHTML from "components/HTML/RenderHTML";

// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_ARTICLES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

import Menu from "page-sections/blog/Menu";
import SectionInterested from "page-sections/blog/SectionInterested";
import SectionBlogsList from "page-sections/blog/SectionBlogsList";
import SectionTags from "page-sections/blog/SectionTags";
import CarouselHeader from "page-sections/blog/CarouselHeader";

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const SectionPills = ({ categoryID, btnHome, articleCategory }) => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data, fetchMore } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      where: categoryID ? { category: { id_in: [categoryID] } } : {},
      limit: 4,
      start: 0,
      where_count: categoryID ? { category: categoryID } : {},
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

  const { articles, articlesCount } = data;

  const onLoadMore = () => {
    fetchMore({
      variables: {
        where: categoryID ? { category: { id_in: [categoryID] } } : {},
        limit: articles.length + 4,
        start: articles.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return {
          ...previousResult,
          articles: [...previousResult.articles, ...fetchMoreResult.articles],
        };
      },
    });
  };

  return (
    <div id="section-pills" className={classes.section}>
      <Menu
        articleCategory={articleCategory}
        categoryID={categoryID}
        btnHome={btnHome}
      />
      {!btnHome ? (
        <>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto}`}
          >
            <GridContainer>
              {articles &&
                articles.map((article) => (
                  <GridItem key={article.id} xs={12} sm={12} md={6}>
                    <Card
                      raised
                      background
                      style={{
                        backgroundImage:
                          "url(" +
                          `${apiUrl}${article.seo.shareImage.url}` +
                          ")",
                      }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>
                          {article.category.name}
                        </h6>
                        <h3 className={classes.cardTitle}>
                          {article.seo[`metaTitle${language}`]}
                        </h3>
                        <RenderHTML
                          html={article.seo[`metaDescription${language}`]}
                        />
                        <Link as={`/blog/${article.id}`} href="/blog/[id]">
                          <Button round color="transparent">
                            <FormatAlignLeft className={classes.icons} />
                            {language === "_en"
                              ? "Read more..."
                              : "Leer más..."}
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
            </GridContainer>
          </GridItem>
          {articles.length < articlesCount && (
            <GridItem md={12}>
              <Button
                link
                style={{ display: "block", margin: "auto" }}
                onClick={onLoadMore}
              >
                {!language ? "Cargar más..." : "Load more..."}
              </Button>
            </GridItem>
          )}
        </>
      ) : (
        <>
          <CarouselHeader />
          <SectionInterested />
          <GridContainer justify="center">
            <SectionBlogsList showImage />
            <SectionTags />
          </GridContainer>
        </>
      )}
    </div>
  );
};

SectionPills.defaultProps = {
  categoryID: "",
  btnHome: true,
};

SectionPills.propTypes = {
  categoryID: PropTypes.string,
  btnHome: PropTypes.bool,
  articleCategory: PropTypes.func.isRequired,
};

export default SectionPills;
