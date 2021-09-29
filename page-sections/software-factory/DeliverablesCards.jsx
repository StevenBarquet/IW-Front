// Dependencies
import { useQuery } from "@apollo/client";

// core-components
import RotatingCard from "components-sections/home/RotatingCard";

// gql
import { SW_FACTORY_DELIVERABLES_CARDS_QUERY } from "gql/queries/software-factory";

const DeliverablesCards = () => {
  const { loading, error, data } = useQuery(
    SW_FACTORY_DELIVERABLES_CARDS_QUERY
  );

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

  if (!data.softwareFactory) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    softwareFactory: { deliverablesCards },
  } = data;

  return deliverablesCards.map((card, index) => (
    <RotatingCard key={card.id} card={card} numCard={index} />
  ));
};

export default DeliverablesCards;
