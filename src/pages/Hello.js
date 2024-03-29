import React from "react";
import PropTypes from "prop-types";

function Hello(props) {
  return (
    <div>
      Hello {props.name}, age is {props.age}.
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Hello;
