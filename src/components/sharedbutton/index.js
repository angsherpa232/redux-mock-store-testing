import React from "react";
import PropTypes from "prop-types";

const SharedButton = ({ buttonText, emitEvent }) => {
  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };

  return (
    <button data-test="buttonComponent" onClick={submitEvent}>
      {buttonText}
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
