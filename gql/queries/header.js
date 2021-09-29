// Dependencies
import { gql } from "@apollo/client";

const MAIN_HEADER_QUERY = gql`
  query NavigationMenu {
    navigationMenu {
      body {
        __typename
        ... on ComponentPageLink {
          id
          label
          label_en
          path
        }
        ... on ComponentPageDropdown {
          id
          topLabel
          topLabel_en
          nestedLinks {
            id
            label
            label_en
            path
          }
        }
      }
    }
  }
`;

export default MAIN_HEADER_QUERY;
