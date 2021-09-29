/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import SectionTitle from "components-sections/SectionTitle";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_TEAMS_QUERY } from "gql/queries/blog";

import blogStyle from "assets/jss/blogStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(blogStyle);

const SectionTeams = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();

  const { loading, error, data } = useQuery(BLOG_TEAMS_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const { teams } = data;

  return (
    <div id="section-teams" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          title={language === "_en" ? "Our experts" : "Nuestros Expertos"}
        >
          <GridContainer justify="center">
            <br />
            {teams &&
              teams.map((team) => {
                return (
                  <GridItem key={team.id} xs={12} sm={6} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src={`${apiUrl}${team.shereImage.url}`}
                            alt={team.shereImage.alternativeText}
                          />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <p className={classes.cardTitle}>
                          {team.name} {team.lastName}
                        </p>
                        <p>{team.specialty[`name${language}`]}</p>
                        <RenderHTML html={team[`description${language}`]} />
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <div className={classes.redes}>
                          <ul className={classes.socialButtons}>
                            <li>
                              <span
                                className="fa-stack"
                                style={{ verticalAlign: "top" }}
                              >
                                <a href={team.linkedin} target="blank">
                                  <i
                                    className="far fa-circle fa-stack-2x"
                                    aria-hidden="true"
                                  />
                                  <i
                                    className="fab fa-linkedin-in fa-stack-1x"
                                    aria-hidden="true"
                                  />
                                </a>
                              </span>
                            </li>
                            <li>
                              <span
                                className="fa-stack"
                                style={{ verticalAlign: "top" }}
                              >
                                <a href={team.facebook} target="blank">
                                  <i
                                    className="far fa-circle fa-stack-2x"
                                    aria-hidden="true"
                                  />
                                  <i
                                    className="fab fa-facebook-f fa-stack-1x"
                                    aria-hidden="true"
                                  />
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                );
              })}
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default SectionTeams;
