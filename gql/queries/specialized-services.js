import { gql } from "@apollo/client";

const SPECIALIZED_SERVICES_HEADER_QUERY = gql`
  query SpecializedServicesHeader {
    specializedService {
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
        caption
        caption_en
      }
    }
  }
`;

const SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY = gql`
  query SpecializedServicesHeader {
    specializedService {
      talentScout {
        talentScoutTitle
        talentScoutTitle_en
        talentScoutIntroduction
        talentScoutIntroduction_en
        talentScoutSearchField
        talentScoutSearchField_en
      }
    }
  }
`;

const SPECIALIZED_SERVICES_TALENT_ATTRACTION_QUERY = gql`
  query TalentAttraction {
    specializedService {
      talentAttraction {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
        talentAttractionTitle {
          sectionTitle
          sectionTitle_en
        }
        contactus {
          sectionIcon {
            url
            alternativeText
          }
          title {
            sectionTitle
            sectionTitle_en
          }
          actionButton {
            label
            label_en
          }
        }
      }
    }
  }
`;

const SPECIALIZED_SERVICES_TALENT_ATTRACTION_CARDS_QUERY = gql`
  query TalentAttractionCards {
    specializedService {
      talentAttractionCards {
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

const SPECIALIZED_SERVICES_RECRUITBEST_QUERY = gql`
  query RecruitBest {
    specializedService {
      recruitBest {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
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

const SPECIALIZED_SERVICES_REQUEST_QUOTE_QUERY = gql`
  query RequestQuote {
    specializedService {
      requestQuote {
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
        checkboxTitle
        checkboxTitle_en
      }
    }
  }
`;

export {
  SPECIALIZED_SERVICES_HEADER_QUERY,
  SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY,
  SPECIALIZED_SERVICES_TALENT_ATTRACTION_QUERY,
  SPECIALIZED_SERVICES_TALENT_ATTRACTION_CARDS_QUERY,
  SPECIALIZED_SERVICES_RECRUITBEST_QUERY,
  SPECIALIZED_SERVICES_REQUEST_QUOTE_QUERY,
};
