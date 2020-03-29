import React from "react";
import PropTypes from "prop-types";

function GameProps(props) {
  return (
    <div>
      <h1>
        Title: {props.title}
      </h1>
      <p>
        <b>Rating: {props.rating}</b>
      </p>
      <p>
        <b>Release date: {props.released}</b>
      </p>
      <p>
        <b>Description: {props.description}</b>
      </p>
      <p>
        <b>Website: {props.websitelink}</b>
      </p>
    </div>
  );
}

export default GameProps;
