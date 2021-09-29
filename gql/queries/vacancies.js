import { gql } from "@apollo/client";

const VACANCIES_HEADER_QUERY = gql`
  query Header {
    vacanciesIw {
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
const VACANCIES_SEARCH_QUERY = gql`
  query Search {
    vacanciesIw {
      search {
        searchField
        searchField_en
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

const VACANCIES_FORM_QUERY = gql`
  query Form {
    vacanciesIw {
      form {
        title {
          sectionTitle
          sectionTitle_en
        }
        subtitle {
          sectionSubTitle
          sectionSubTitle_en
        }
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

export { VACANCIES_HEADER_QUERY, VACANCIES_SEARCH_QUERY, VACANCIES_FORM_QUERY };
