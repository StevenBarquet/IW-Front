import { gql } from "@apollo/client";

const FORM_EMAIL_QUERY = gql`
  mutation sendEmail($input: EmailInput) {
    sendEmail(input: $input) {
      data
      page
      content
      filename
    }
  }
`;

export { FORM_EMAIL_QUERY };
