// Dependencies
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { TECHNOLOGY_CONSULTING_TASK_QUERY } from "gql/queries/technology-consulting";

// jss styles
import technologyConsultingStyle from "assets/jss/technologyConsultingStyle";

// components
const TaskOptimizationCard = dynamic(
  import("page-sections/technology-consulting/TaskOptimizationCard")
);

const useStyles = makeStyles(technologyConsultingStyle);

const TaskOptimization = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(TECHNOLOGY_CONSULTING_TASK_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.technologyConsulting) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    technologyConsulting: { taskOptimization },
  } = data;

  return (
    <div id="section-taskOptimization" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          legend={taskOptimization.legend[`sectionLegendTitle${language}`]}
          title={taskOptimization.title[`sectionTitle${language}`]}
          subTitle={taskOptimization.subtitle[`sectionSubTitle${language}`]}
          effect
        >
          <div className={classes.section}>
            <h1 className={`${classes.title} ${classes.textCenter}`}>
              {taskOptimization.titleType[`sectionTitle${language}`]}
            </h1>
            <GridContainer justify="center">
              <TaskOptimizationCard />
            </GridContainer>
          </div>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default TaskOptimization;
