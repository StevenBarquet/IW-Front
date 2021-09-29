// Dependencies
import { useQuery } from "@apollo/client";

// core-components
import RotatingCard from "components-sections/home/RotatingCard";

// gql
import { HOME_BUSINESS_PARTNERS_CARDS } from "gql/queries/home";

const BusinessPartnersCards = () => {
  const { loading, error, data } = useQuery(HOME_BUSINESS_PARTNERS_CARDS);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.home) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    home: { businessPartnersCards },
  } = data;

  return businessPartnersCards.map((card, index) => (
    <RotatingCard key={card.id} card={card} numCard={index} />
  ));
};

export default BusinessPartnersCards;
