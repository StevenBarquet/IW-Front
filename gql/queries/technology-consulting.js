import { gql } from "@apollo/client";

const TECHNOLOGY_CONSULTING_HEADER_QUERY = gql`
  query TechnologyConsultingHeader {
    technologyConsulting {
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

const TECHNOLOGY_CONSULTING_TASK_QUERY = gql`
  query TaskOptimization {
    technologyConsulting {
      taskOptimization {
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
        titleType {
          sectionTitle
          sectionTitle_en
        }
      }
    }
  }
`;

const TECHNOLOGY_CONSULTING_TASK_CARDS_QUERY = gql`
  query TaskOptimization {
    technologyConsulting {
      taskOptimizationCards {
        id
        front {
          frontCardTitle
          frontCardTitle_en
          brandImage {
            url
            alternativeText
          }
          partnerType
          partnerType_en
          allianceTime
          allianceTime_en
          buttonLabel
          buttonLabel_en
        }
        back {
          backCardTitle
          backCardTitle_en
          backCardListItems {
            id
            materialIcon
            description
            description_en
          }
        }
      }
    }
  }
`;

const TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY = gql`
  query TaskOptimization {
    technologyConsulting {
      offerGuarantees {
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

const TECHNOLOGY_CONSULTING_CONSULTING_QUERY = gql`
  query ConsultingOptions {
    technologyConsulting {
      consultingOptions {
        title {
          sectionTitle
          sectionTitle_en
        }
        carousel {
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

const TECHNOLOGY_CONSULTING_SUCCESSSTORIES_QUERY = gql`
  query SuccessStories {
    technologyConsulting {
      successStories {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        successStoriesCarousel {
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
  TECHNOLOGY_CONSULTING_HEADER_QUERY,
  TECHNOLOGY_CONSULTING_TASK_QUERY,
  TECHNOLOGY_CONSULTING_TASK_CARDS_QUERY,
  TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY,
  TECHNOLOGY_CONSULTING_CONSULTING_QUERY,
  TECHNOLOGY_CONSULTING_SUCCESSSTORIES_QUERY,
};
