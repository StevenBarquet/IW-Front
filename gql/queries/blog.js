// Dependencies
import { gql } from "@apollo/client";

const BLOG_HEADER_QUERY = gql`
  query Header {
    blog {
      header {
        small_image {
          url
          alternativeText
        }
        medium_image {
          url
          alternativeText
        }
        large_image {
          url
          alternativeText
        }
        title
        title_en
      }
    }
  }
`;

const BLOG_CAROUSEL_HEADER_QUERY = gql`
  query CarouselBlog {
    blog {
      carouselBlog {
        small_images {
          id
          url
          alternativeText
        }
        medium_images {
          id
          url
          alternativeText
        }
        large_images {
          id
          url
          alternativeText
        }
        caption
        caption_en
      }
    }
  }
`;

const BLOG_ARTICLES_QUERY = gql`
  query Articles(
    $where: JSON
    $limit: Int
    $start: Int
    $sort: String
    $where_count: JSON
  ) {
    articlesCount(where: $where_count)
    articles(where: $where, limit: $limit, start: $start, sort: $sort) {
      id
      content
      content_en
      created_at
      tags {
        id
        name
        name_en
      }
      user {
        name
        lastName
        description
        description_en
        linkedin
        shereImage {
          url
          alternativeText
        }
      }
      category {
        id
        name
      }
      seo {
        metaTitle
        metaTitle_en
        metaDescription
        metaDescription_en
        shareImage {
          url
          alternativeText
        }
      }
    }
  }
`;

const BLOG_ARTICLE_QUERY = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      content
      content_en
      created_at
      tags {
        id
        name
        name_en
      }
      user {
        name
        lastName
        description
        description_en
        linkedin
        shereImage {
          url
          alternativeText
        }
      }
      category {
        id
        name
      }
      seo {
        metaTitle
        metaTitle_en
        metaDescription
        metaDescription_en
        shareImage {
          url
          alternativeText
        }
      }
    }
  }
`;

const BLOG_CATEGORIES_QUERY = gql`
  query categories {
    categories {
      id
      name
      name_en
    }
  }
`;

const BLOG_TEAMS_QUERY = gql`
  query Teams {
    teams {
      id
      name
      lastName
      description
      description_en
      specialty {
        name
        name_en
      }
      facebook
      linkedin
      shereImage {
        url
        alternativeText
      }
    }
  }
`;

const BLOG_TAGS_QUERY = gql`
  query Tags {
    tagsBlogs {
      id
      name
      name_en
    }
    blog {
      bannersBlog {
        bannerUp {
          url
          alternativeText
        }
        bannerDown {
          url
          alternativeText
        }
      }
    }
  }
`;

export {
  BLOG_HEADER_QUERY,
  BLOG_ARTICLES_QUERY,
  BLOG_CATEGORIES_QUERY,
  BLOG_TEAMS_QUERY,
  BLOG_TAGS_QUERY,
  BLOG_CAROUSEL_HEADER_QUERY,
  BLOG_ARTICLE_QUERY,
};
