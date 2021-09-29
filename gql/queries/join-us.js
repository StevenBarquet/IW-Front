import { gql } from "@apollo/client";

const JOIN_US_HEADER_QUERY = gql`
  query Header {
    joinUs {
      header {
        small_image {
          id
          url
          alternativeText
        }
        medium_image {
          id
          url
          alternativeText
        }
        large_image {
          id
          url
          alternativeText
        }
        title
        title_en
      }
    }
  }
`;

const JOIN_US_TEAM_QUERY = gql`
  query JoinTeam {
    joinUs {
      joinTeam {
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

const JOIN_US_SENDCV_QUERY = gql`
  query SendCV {
    joinUs {
      sendCV {
        underlinedTitle
        underlinedTitle_en
        introductoryText
        introductoryText_en
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

const JOIN_US_VACANCIES_QUERY = gql`
  query Vacancies($where: JSON, $limit: Int, $start: Int, $sort: String) {
    vacanciesCount
    vacancies(where: $where, limit: $limit, start: $start, sort: $sort) {
      id
      tags {
        id
        name
        name_en
      }
      title
      title_en
      age
      age_en
      gender
      gender_en
      scholarship
      scholarship_en
      workZone
      workZone_en
      specificRequirements
      specificRequirements_en
      contact
    }
  }
`;

const JOIN_US_TAGS_QUERY = gql`
  query tags {
    tags {
      id
      name
      name_en
    }
  }
`;

export {
  JOIN_US_HEADER_QUERY,
  JOIN_US_TEAM_QUERY,
  JOIN_US_SENDCV_QUERY,
  JOIN_US_TAGS_QUERY,
  JOIN_US_VACANCIES_QUERY,
};
