// Dependencies
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// context
import { useSettings } from "context/Settings";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Badge from "components/Badge/Badge";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Pagination from "components/Pagination/Pagination";

// gql
import { JOIN_US_VACANCIES_QUERY } from "gql/queries/join-us";

// utils
import { replaceObject, getItemByAttr, removeItem } from "utils/Utils";

import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const Vacancies = ({
  pageVacant,
  tagsID,
  tagsData,
  multipleSelectValue,
  setPageVacant,
  multipleValue,
  setMultipleValue,
  setTagsID,
  setMultipleSelectValue,
}) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();

  const start = pageVacant === 1 ? 0 : (pageVacant - 1) * 4;
  const arrayId = Object.values(tagsID).map((t) => t.id);

  const { loading, error, data } = useQuery(JOIN_US_VACANCIES_QUERY, {
    variables: {
      where: tagsID ? { tags: { id_in: arrayId } } : {},
      limit: 4,
      start,
      sort: "created_at:desc",
    },
  });

  useEffect(() => {
    tagsData.forEach((t) =>
      setMultipleSelectValue((tag) => [...tag, { ...t, active: true }])
    );
  }, []);

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

  if (!data.vacancies) {
    return <span>¡Revisar CMS!</span>;
  }

  const onRemoveItem = (id) => {
    const selectTag = getItemByAttr(multipleSelectValue, { id });
    selectTag.active = true;

    setMultipleValue(removeItem(multipleValue, { id }));
    setTagsID(removeItem(tagsID, { id }));
    setMultipleSelectValue(
      replaceObject(multipleSelectValue, { id }, selectTag)
    );
  };

  const onTags = (temp) => {
    const selectTags = getItemByAttr(multipleSelectValue, {
      id: temp.id,
    });
    selectTags.active = false;
    multipleValue.push(temp);
    setTagsID([...tagsID, { id: temp.id }]);
    setMultipleValue(multipleValue);
    setPageVacant(1);
    setMultipleSelectValue(
      replaceObject(multipleSelectValue, { id: temp.id }, selectTags)
    );
  };

  const SelectTags = () =>
    multipleValue.map((item) => (
      <Badge key={item.id} color="primary">
        <button
          type="button"
          className={classes.tagsButton}
          onClick={() => onRemoveItem(item.id)}
        >
          <span>{item[`name${language}`]}</span>
          <Icon className={classes.removeIcon}>clear</Icon>
        </button>
      </Badge>
    ));

  const { vacancies } = data;

  const lastpage = Math.ceil(
    vacancies.length <= 3 ? vacancies.length / 4 : data.vacanciesCount / 4
  );

  return (
    <div id="section-vacancies" className={classes.section}>
      <GridContainer
        item
        xs={12}
        sm={11}
        md={9}
        className={`${classes.mlAuto}  ${classes.mrAuto} ${classes.displayNone}`}
      >
        <GridItem xs={12} sm={11} md={6}>
          Tags:{" "}
          {multipleSelectValue
            .filter((tag) => tag.active)
            .map((tag) => (
              <Badge key={tag.id} color="primary">
                <button
                  type="button"
                  className={classes.tagsButton}
                  onClick={() => onTags(tag)}
                >
                  <span>{tag[`name${language}`]}</span>
                </button>
              </Badge>
            ))}
          <br />
          <div>
            <SelectTags />
          </div>
        </GridItem>
        <GridItem xs={12} sm={11} md={6}>
          <p className={classes.lengthVacantText}>
            {language !== "_en" ? "Vacantes publicadas " : "Posted vacancies "}
            {data.vacanciesCount}
          </p>
        </GridItem>
        <GridItem xs={12} sm={11} md={12}>
          <div className={classes.dividerTags} />
        </GridItem>
      </GridContainer>
      <GridContainer
        item
        xs={12}
        sm={12}
        md={9}
        className={`${classes.mlAuto} ${classes.mrAuto}`}
      >
        {vacancies.map((item) => {
          return (
            <GridItem xs={12} sm={6} md={6} key={item.id}>
              <Card>
                <CardBody>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.floatRight}>
                      {item.tags.map((tag) => (
                        <Badge key={tag.id} color="primary">
                          <span>{tag[`name${language}`]}</span>
                        </Badge>
                      ))}
                    </div>
                    <br />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.titleVacante}>
                      {item[`title${language}`]}
                    </h3>
                    <hr className={classes.dividerGray} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <p>
                      <strong>{language !== "_en" ? "Edad: " : "Age: "}</strong>
                      {item[`age${language}`]}
                    </p>
                    <p>
                      <strong>
                        {language !== "_en" ? "Sexo: " : "Gender: "}
                      </strong>
                      {item[`gender${language}`]}
                    </p>
                    <p className={classes.mlText}>
                      <strong>
                        {language !== "_en" ? "Escolaridad: " : "Scholarship: "}
                      </strong>
                      <br />
                      {item[`scholarship${language}`]}
                    </p>
                    <p className={classes.mbText}>
                      <strong>
                        {language !== "_en"
                          ? "Zona de trabajo: "
                          : "Work zone: "}
                      </strong>
                      <br />
                      <span className={classes.boldText}>
                        {item[`workZone${language}`]}
                      </span>
                    </p>
                    <p>
                      <strong>
                        {language !== "_en"
                          ? "Requisitos Específicos: "
                          : "Specific requirements:: "}
                      </strong>
                    </p>
                    <RenderHTML
                      html={item[`specificRequirements${language}`]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={7}>
                    <div className={classes.dividerSmall} />
                    <p className={classes.contactText}>
                      {language !== "_en" ? "Contacto: " : "Contact: "}
                      {item.contact}
                    </p>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <div className={classes.floatRight}>
            <Pagination
              pages={[
                {
                  text: "Previous",
                  onClick: () => setPageVacant(pageVacant - 1),
                  disabled: pageVacant <= 1,
                },
                {
                  text: "Next",
                  onClick: () => setPageVacant(pageVacant + 1),
                  disabled: pageVacant >= lastpage,
                },
              ]}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

Vacancies.defaultProps = {
  multipleSelectValue: [],
  tagsID: [],
  multipleValue: [],
  tagsData: [],
};

Vacancies.propTypes = {
  tagsData: PropTypes.arrayOf(PropTypes.shape({})),
  multipleSelectValue: PropTypes.arrayOf(PropTypes.shape({})),
  multipleValue: PropTypes.arrayOf(PropTypes.shape({})),
  tagsID: PropTypes.arrayOf(PropTypes.shape({})),
  pageVacant: PropTypes.number.isRequired,
  setPageVacant: PropTypes.func.isRequired,
  setMultipleSelectValue: PropTypes.func.isRequired,
  setTagsID: PropTypes.func.isRequired,
  setMultipleValue: PropTypes.func.isRequired,
};

export default Vacancies;
