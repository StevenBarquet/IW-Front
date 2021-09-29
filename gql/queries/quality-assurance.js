import { gql } from "@apollo/client";

const QUALITY_HEADER_QUERY = gql`
  query QualityAssurance {
    qualityAssurance {
      header {
        large_image {
          url
          alternativeText
        }
        medium_image {
          url
          alternativeText
        }
        small_image {
          url
          alternativeText
        }
        title
        title_en
      }
    }
  }
`;

const QUALITY_QA_DESCRIPTION_QUERY = gql`
  query QADescription {
    qualityAssurance {
      qaDescription {
        legend {
          sectionLegendTitle
          sectionLegendTitle_en
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        subtitle {
          sectionSubTitle
          sectionSubTitle_en
        }
      }
    }
  }
`;

const QUALITY_QA_OFFER_QUERY = gql`
  query QAOffer {
    qualityAssurance {
      qaOffer {
        title {
          sectionTitle
          sectionTitle_en
        }
        qaOfferCarousel {
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
          small_images_en {
            id
            url
            alternativeText
          }
          medium_images_en {
            id
            url
            alternativeText
          }
          large_images_en {
            id
            url
            alternativeText
          }
        }
      }
    }
  }
`;

const QUALITY_QA_OFFERGUATANTES_QUERY = gql`
  query OfferGuaranteesQA {
    qualityAssurance {
      offerGuaranteesQA {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        infoArea {
          id
          sectionIcon {
            url
            alternativeText
          }
          title
          title_en
        }
      }
    }
  }
`;

const QUALITY_SUCCESS_STORIES_QUERY = gql`
  query SuccessStories {
    qualityAssurance {
      successStoriesQA {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        successStoriesQACarousel {
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
          small_images_en {
            id
            url
            alternativeText
          }
          medium_images_en {
            id
            url
            alternativeText
          }
          large_images_en {
            id
            url
            alternativeText
          }
        }
      }
    }
  }
`;

export {
  QUALITY_HEADER_QUERY,
  QUALITY_QA_DESCRIPTION_QUERY,
  QUALITY_QA_OFFER_QUERY,
  QUALITY_QA_OFFERGUATANTES_QUERY,
  QUALITY_SUCCESS_STORIES_QUERY,
};
