// Dependencies
import { useQuery } from "@apollo/client";

// core-components
import RotatingCard from "components-sections/home/RotatingCard";

// gql
import { SPECIALIZED_SERVICES_TALENT_ATTRACTION_CARDS_QUERY } from "gql/queries/specialized-services";

const TalentAttractionCards = () => {
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_TALENT_ATTRACTION_CARDS_QUERY
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

  if (!data.specializedService) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    specializedService: { talentAttractionCards },
  } = data;

  return talentAttractionCards.map((card, index) => (
    <RotatingCard key={card.id} card={card} numCard={index} />
  ));
};

export default TalentAttractionCards;
