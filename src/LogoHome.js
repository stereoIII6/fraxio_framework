import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onGoHome } from "./action/userActions";
class LogoHome extends Component {
  static propTypes = {
    onGoHome: PropTypes.func,
  };
  state = {};
  onHome = (e) => {
    e.preventDefault();
    this.props.onGoHome();
  };
  render() {
    return (
      <div id="logotxt" onClick={this.onHome}>
        Fractio
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { onGoHome })(LogoHome);
