import React from "react";
import PropTypes from "prop-types";

function FriendSuggestion(props) {
  return (
    <React.Fragment>
      {/* <img src={props.picture} width="200px"></img>
      <p>{props.name}</p>
      <p>{props.pronouns}</p> */}
      {/* <form>
        <button class="btn btn-success">Add Friend</button> */}
      {/* figure out if id=key is correct */}
      {/* </form> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img src={props.picture} width="100%"></img>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{props.name}</h4>
                  <p class="card-text">{props.pronouns}</p>
                  <form>
                    <button class="btn btn-success">Add Friend</button>
                    {/* figure out if id=key is correct */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

FriendSuggestion.propTypes = {
  name: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default FriendSuggestion;
