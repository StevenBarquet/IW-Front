// Dependencies
import { useQuery } from "@apollo/client";

// core-components
import RotatingCard from "components-sections/home/RotatingCard";

// gql
import { TECHNOLOGY_CONSULTING_TASK_CARDS_QUERY } from "gql/queries/technology-consulting";

const TaskOptimizationCard = () => {
  const { loading, error, data } = useQuery(
    TECHNOLOGY_CONSULTING_TASK_CARDS_QUERY
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

  if (!data.technologyConsulting) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    technologyConsulting: { taskOptimizationCards },
  } = data;

  return taskOptimizationCards.map((card, index) => (
    <RotatingCard key={card.id} card={card} numCard={index} />
  ));
};

export default TaskOptimizationCard;
