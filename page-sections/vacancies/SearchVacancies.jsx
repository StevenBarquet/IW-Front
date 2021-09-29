// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import CustomInput from "components/CustomInput/CustomInput";

// context
import { useSettings } from "context/Settings";

// gql
import { VACANCIES_SEARCH_QUERY } from "gql/queries/vacancies";

// jss styles
import vacanciesStyle from "assets/jss/vacanciesStyle";

const useStyles = makeStyles(vacanciesStyle);

const SearchVacancies = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(VACANCIES_SEARCH_QUERY);
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

  if (!data.vacanciesIw) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    vacanciesIw: { search },
  } = data;

  return (
    <div
      id="section-searchVacancies"
      className={classes.sectionWithBackgroundColor}
    >
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={10} sm={5} md={5} lg={5}>
          <div className={classes.titleContainer}>
            <h2>{search.title[`sectionTitle${language}`]}</h2>
          </div>
          <RenderHTML
            html={search.introductoryText[`introductoryText${language}`]}
          />
        </GridItem>
        <GridItem xs={10} sm={6} md={4} lg={4}>
          <CustomInput
            id="automatizacion"
            name="automatizacion"
            value=""
            labelText={search[`searchField${language}`]}
            handleChange={() => {}}
            inputProps={{
              name: "automatizacion",
              maxLength: 18,
              placeholder: search[`searchField${language}`],
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

export default SearchVacancies;
