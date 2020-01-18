import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class HeadLine extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div className="headLine" data-test="headLine">
        <h1 data-test="header">{header}</h1>
        <p>{desc}</p>
      </div>
    );
  }
}

HeadLine.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      online: PropTypes.bool
    })
  )
};

export default HeadLine;
