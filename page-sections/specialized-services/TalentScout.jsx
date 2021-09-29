// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import CustomInput from "components/CustomInput/CustomInput";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY } from "gql/queries/specialized-services";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const useStyles = makeStyles(specializedServicesStyle);

const TalentScout = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY
  );
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

  if (!data.specializedService) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    specializedService: { talentScout },
  } = data;

  return (
    <div
      id="section-talent-scout"
      className={classes.sectionWithBackgroundColor}
    >
      <GridContainer justify="center">
        <GridItem xs={10} sm={5} md={5} lg={5}>
          <h2>{talentScout[`talentScoutTitle${language}`]}</h2>
          <RenderHTML
            html={talentScout[`talentScoutIntroduction${language}`]}
          />
        </GridItem>
        <GridItem xs={10} sm={6} md={4} lg={4}>
          <CustomInput
            id="talentScoutSearch"
            name="talentScoutSearch"
            value=""
            labelText={talentScout[`talentScoutSearchField${language}`]}
            handleChange={() => {}}
            inputProps={{
              name: "talentScoutSearch",
              maxLength: 18,
              placeholder: talentScout[`talentScoutSearchField${language}`],
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default TalentScout;
