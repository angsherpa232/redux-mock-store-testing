import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class ListItem extends Component {
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }
    return (
      <div data-test="listItemComponent" className="listItem">
        <h2 data-test="componentTitle">{title}</h2>
        <div data-test="componentDesc">{desc}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
