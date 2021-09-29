import { gql } from "@apollo/client";

const SW_FACTORY_HEADER_QUERY = gql`
  query SoftwareFactory {
    softwareFactory {
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

const SW_FACTORY_TIMEMARKET_QUERY = gql`
  query TimeMarket {
    softwareFactory {
      timeMarket {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
      }
    }
  }
`;

const SW_FACTORY_SERVICES_QUERY = gql`
  query FactoryServices {
    softwareFactory {
      factoryServices {
        title {
          sectionTitle
          sectionTitle_en
        }
        factoryServicesCarousel {
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

const SW_FACTORY_BENEFITS_QUERY = gql`
  query Benefits {
    softwareFactory {
      benefits {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        benefitsNavPills {
          tabIcon
          introductoryText {
            introductoryText
            introductoryText_en
          }
        }
      }
    }
  }
`;
const SW_FACTORY_DELIVERABLES_QUERY = gql`
  query Deliverables {
    softwareFactory {
      deliverables {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
      }
    }
  }
`;

const SW_FACTORY_DELIVERABLES_CARDS_QUERY = gql`
  query DeliverablesCards {
    softwareFactory {
      deliverablesCards {
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

const SW_FACTORY_DIGITAL_SERVICES_QUERY = gql`
  query DigitalServices {
    softwareFactory {
      digitalServices {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

export {
  SW_FACTORY_HEADER_QUERY,
  SW_FACTORY_TIMEMARKET_QUERY,
  SW_FACTORY_SERVICES_QUERY,
  SW_FACTORY_BENEFITS_QUERY,
  SW_FACTORY_DELIVERABLES_QUERY,
  SW_FACTORY_DELIVERABLES_CARDS_QUERY,
  SW_FACTORY_DIGITAL_SERVICES_QUERY,
};
