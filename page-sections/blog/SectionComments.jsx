/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// jss styles
import blogStyle from "assets/jss/blogStyle";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(blogStyle);

const SectionComments = ({ id }) => {
  const classes = useStyles();

  return (
    <div id="section-comments" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <div>
            <div style={{ display: "flex" }}>
              <GridItem style={{ marginRight: "7px" }} xs={2} sm={3} md={1}>
                <div
                  data-lazy="true"
                  className="fb-share-button"
                  data-href={`http://interware.mx/blog/${id}`}
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Finterware.mx%2Fblog%2F${id}&amp;src=sdkpreparse`}
                    className="fb-xfbml-parse-ignore"
                    target="_blank"
                  />
                </div>
              </GridItem>
              <GridItem style={{ marginTop: "4px" }} xs={3} sm={3} md={2}>
                <div className="a2a_kit">
                  <a
                    className="a2a_button_linkedin_share"
                    data-url={`http://interware.mx/blog/${id}`}
                  />
                </div>
              </GridItem>
            </div>
            {/* Comentarios */}
            <div
              data-lazy="true"
              className="fb-comments"
              data-href={`http://interware.mx/blog/${id}`}
              data-numposts="5"
              data-width="100%"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionComments.defaultProps = {
  id: "",
};

SectionComments.propTypes = {
  id: PropTypes.string,
};

export default SectionComments;
