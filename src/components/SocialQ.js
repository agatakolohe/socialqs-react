import React from "react";
import PropTypes from "prop-types";

function SocialQ(props) {
  return (
    <React.Fragment>
      <h3>{props.name} </h3>
      <h5>{props.socialQPost}</h5>
      <hr />
    </React.Fragment>
  );
}

SocialQ.propTypes = {
  name: PropTypes.string.isRequired,
  socialQPost: PropTypes.string.isRequired,
};

export default SocialQ;
