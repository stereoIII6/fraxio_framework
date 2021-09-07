import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Editor extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Editor);
